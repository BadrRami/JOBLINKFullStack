<?php

namespace App\Http\Controllers;

use App\Models\Offre;
use App\Models\Domaine;
use App\Models\Villes;
use App\Http\Requests\StoreOffreRequest;
use App\Http\Requests\UpdateOffreRequest;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Illuminate\Http\Request;

class OffreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $offres = Offre::where('users_id', auth()->id())->get();
        
        return Inertia::render('Recruteur/Offre/Liste', compact('offres'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $domaines = Domaine::all(); // récupère tous les domaines
        $villes = Villes::all(); // récupère tous les domaines
        
        return Inertia::render('Recruteur/Offre/CreateOffre', compact('domaines', 'villes'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    // 1. validation
    $data = $request->validate([
        'titre' => 'required|string|max:80',
        'description' => 'nullable|string',
        'type' => 'required|in:full-time,part-time,stage,mission,freelance',
        'etat' => 'required|in:active,inactive',
        'localisation' => 'required|string|max:255',
        'domaine_id' => 'required|exists:domaines,id',
        'ville_id' => 'required|exists:villes,id',
        'salaire' => 'required|numeric|min:0.01'
    ]);

    // 2. récupérer nom ville
    $ville = \App\Models\Villes::find($request->ville_id);

    // 3. construire adresse
    $address = $ville->name . ' ' . $request->localisation . ' Maroc';

    // 4. appel API GPS
    $response = Http::withoutVerifying()->get(
        'https://nominatim.openstreetmap.org/search',
        [
            'q' => $address,
            'format' => 'json',
            'limit' => 1
        ]
    );

    $geo = $response->json();

    // 5. lat/lng
    $latitude = $geo[0]['lat'] ?? null;
    $longitude = $geo[0]['lon'] ?? null;

    // 6. compléter data
    $data['users_id'] = auth()->id();
    $data['latitude'] = $latitude;
    $data['longitude'] = $longitude;

    // 7. création
    Offre::create($data);

    return redirect()
        ->route('offres.create')
        ->with('success', 'Offre ajoutée avec succès');
}

    /**
     * Display the specified resource.
     */
    public function show(Offre $offre)
    {
        return view('Recruteur.showOffre', compact('offre'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Offre $offre)
    {
        $offre->load(['domaine', 'ville']);

        return Inertia::render('Recruteur/Offre/EditOffre', [
            'offre' => $offre,
            'domaines' => Domaine::all(),
            'villes' => Villes::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Offre $offre)
    {
        $offre->update($request->all());
        return redirect()->route("offres.index")->with("success", "Modification réussie!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Offre $offre)
    {
        $offre->delete();
        return redirect()->route("offres.index")->with("success", "Suppression réussie!");
    }
}
