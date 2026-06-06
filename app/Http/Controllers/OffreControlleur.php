<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Offre;
use App\Models\Villes;
use App\Models\Domaine;
class OffreControlleur extends Controller
{
    public function index()
    {
        $offres = Offre::paginate(10); 
        $villes = Villes::all();
        $domaines = Domaine::all();
        return Inertia::render('Offres/Liste', compact('offres', 'villes', 'domaines'));
    }
}
