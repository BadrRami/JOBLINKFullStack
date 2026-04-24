<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Offre;
use App\Models\Villes;
use App\Models\Domaine;
class postulerOffre extends Controller
{
    public function index(Request $request)
    {
        $query=Offre::query();
        // Recherche par titre ou description
        if($request->has('search') && !empty($request->search)){
            $query=$query->where('titre', 'like', '%'.$request->search.'%')
            ->orWhere('description', 'like', '%'.$request->search.'%');
        }
        // Recherche par ville
        if($request->has('ville') && !empty($request->ville)){
            $query->where('ville_id',$request->ville);
        }
        // Rechercher Domaine
        if ($request->has('domaine') && !empty($request->domaine)) {
            $query->where('domaine_id',$request->domaine);
        }
        $offres=$query->get();
        $domaines = Domaine::all();
        $villes  = Villes::all();
        return view('Offres', compact('offres','villes','domaines'));
    }

    public function details($id){
        $offre = Offre::findOrFail($id);
        $domaine = Domaine::findORFail($offre->id);
        $ville  = Villes::findORFail($offre->id);
        return view("Details", compact('offre','domaine','ville'));
    }
    
}
