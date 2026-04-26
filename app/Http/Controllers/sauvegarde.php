<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\sauvegardes;
use Illuminate\Support\Facades\Auth;

class sauvegarde extends Controller
{
    // 1️⃣ Afficher toutes les sauvegardes de l'utilisateur
    public function index()
    {
        $sauvegardes = sauvegardes::where('user_id', Auth::id())->with('offre')->get();

        return Inertia('Etudiant/Sauvegardes/Liste', compact('sauvegardes'));
    }

    // 2️⃣ Ajouter une sauvegarde (bookmark)
    public function add(Request $request)
    {
        // Vérifie si l'offre est déjà sauvegardée
        $exists = sauvegardes::where('user_id', Auth::id())
            ->where('idOffre', $request->offre_id)
            ->first();

        if (!$exists) {
            sauvegardes::create([
                'user_id' => Auth::id(),
                'idOffre' => $request->offre_id
            ]);
        }

        return back()->with('success', 'Offre sauvegardée avec succès');
    }

    // 3️⃣ Supprimer une sauvegarde
    public function delete($id)
    {
        $sauvegarde = sauvegardes::where('user_id', Auth::id())
            ->where('id', $id)
            ->firstOrFail();

        $sauvegarde->delete();

        return back()->with('success', 'Offre supprimée de vos sauvegardes');
    }
}