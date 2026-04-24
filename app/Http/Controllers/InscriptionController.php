<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Recruteur;
use App\Models\Employee;
use Inertia\Inertia;
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
            'statut' => 'required|in:Recruteur,Employée,Admin'
        ]);

        //  Créer l'utilisateur
        $user = User::create([
            'prenom' => $validated['prenom'],
            'name' => $validated['nom'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
            'role' => $validated['statut'],
        ]);

        //  Créer le profil correspondant selon le rôle
        if ($user->role === 'Recruteur') {
            Recruteur::create([
                'user_id' => $user->id,
                'nom' => $validated['nom'],        // ou $user->name
                'prenom' => $validated['prenom'],  // ou $user->prenom
                'email' => $validated['email'],    // obligatoire
                'tel' => null,
                'poste' => null,
                'entreprise_id' => null,
                'etat' => 'profil en attente',
            ]);
        } else { // Employée
            Employee::create([
                'user_id' => $user->id,
                'nom' => $validated['nom'],        // ou $user->name
                'prenom' => $validated['prenom'],  // ou $user->prenom
                'email' => $validated['email'],    // obligatoire
                'tel' => null,
                'filiere' => null,
                'niveau_etude' => null,
                'etat' => 'en attente de validation',
            ]);
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