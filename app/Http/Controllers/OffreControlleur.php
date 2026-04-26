<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Offre;
class OffreControlleur extends Controller
{
    public function index()
    {
        $offres = Offre::all();
        return Inertia::render('Offres/Liste', compact('offres'));
    }
}
