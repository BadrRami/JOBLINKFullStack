<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\entreprises;
use App\Models\Domaine;
use Inertia\Inertia;
class EntreprisesController extends Controller
{
    public function index(Request $request){
        $query = entreprises::query();
        if($request->filled('nom')){
            $query->where('nom', 'like', '%' . $request->nom . '%');
        }
        if($request->filled('domaine')){
            $query->where('domaine_id', $request->domaine);
        }
        $entreprises = $query->get();
        $domaines = Domaine::all();
        return Inertia('Entreprises/Liste', compact('entreprises', 'domaines'));
    }
}
