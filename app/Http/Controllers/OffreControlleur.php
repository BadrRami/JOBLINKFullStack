<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Offre;
use App\Models\Villes;
use App\Models\Domaine;
class OffreControlleur extends Controller
{
    public function index(Request $request)
{
    $query = Offre::query();
    $villes = Villes::all();
    $domaines = Domaine::all();
    if ($request->filled('titre')) {
        $query->where('titre', 'like', '%' . $request->titre . '%');
    }

    if ($request->filled('ville')) {
        $query->where('ville_id', $request->ville);
    }

    if ($request->filled('domaine')) {
        $query->where('domaine_id', $request->domaine);
    }

    $offres = $query->paginate(10);

    return Inertia::render('Offres/Liste', compact('offres', 'villes', 'domaines'));
}
}
