<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
class LoginController extends Controller
{
    // Affiche la page login
    public function index()
    {
        return Inertia::render('Login');
    }

    // Traite la connexion
    public function traiter(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Tentative de connexion
        if (Auth::attempt($credentials)) {

            // Sécurité : régénère la session
            $request->session()->regenerate();

            // Redirection selon le rôle
            if (Auth::user()->role === 'Recruteur') {
                $user = Auth::user();

        Mail::to($user->email)->send(new WelcomeMail($user));
        Log::info("Email envoyé à ".$user->email);
                return redirect()->route('profile.recruteur');
            }else if(Auth::user()->role === 'Admin'){
                $user = Auth::user();

        Mail::to($user->email)->send(new WelcomeMail($user));
        Log::info("Email envoyé à ".$user->email);
                return redirect()->route('profile.admin');
            } else {
                $user = Auth::user();

        Mail::to($user->email)->send(new WelcomeMail($user));
        Log::info("Email envoyé à ".$user->email);
                return redirect()->route('profile.employee');
            }
        }

        // Si échec
        return back()->withErrors([
            'email' => 'Email ou mot de passe incorrect.',
        ])->onlyInput('email');
    }

    public function logout(Request $request){
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerate();

        return redirect()->route('login');
    }
}
