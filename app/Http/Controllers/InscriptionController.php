<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Recruteur;
use App\Models\Employee;
use Inertia\Inertia;
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Mail;
class InscriptionController extends Controller
{
    public function index()
    {
        return Inertia::render('Register');
    }

    public function traiter(Request $request)
    {
        $validated = $request->validate([
            'prenom' => 'required|string|max:255',
            'nom' => 'required|string|max:255',
            'email' => 'required|email:rfc,dns|unique:users,email',
            'password' => 'required|min:8',
            'statut' => 'required|in:Recruteur,Employee,Admin'
        ]);

        //  Créer l'utilisateur
        $user = User::create([
            'prenom' => $validated['prenom'],
            'name' => $validated['nom'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
            'role' => $validated['statut'],
            'etat' => 'profil en attente',
            'tel' => null,
            'photo' => null,
        ]);

        //  Créer le profil correspondant selon le rôle
        if ($user->role === 'Recruteur') {
            Recruteur::create([
                'user_id' => $user->id,
                'poste' => null,
                'entreprise_id' => null,
            ]);
            // envoyer email
            Mail::to($user->email)->send(new WelcomeMail($user));
    
        } else { 
            Employee::create([
                'user_id' => $user->id,
                'filiere' => null,
                'niveau_etude' => null,
            ]);
            // envoyer email
            Mail::to($user->email)->send(new WelcomeMail($user));
    
        }

        //  Connexion automatique
        auth()->login($user);

        //  Redirection selon le rôle
        if ($user->role === 'Recruteur') {
            return redirect()->route('profile.recruteur');
        }else if($user->role === 'Admin'){
            return redirect()->route('profile.admin');
        } else {
            return redirect()->route('profile.employee');
        }
    }
}