<?php

namespace App\Http\Controllers;

use App\Models\Candidature;
use App\Models\Offre;
use Illuminate\Http\Request;
use Inertia\Inertia;
class CandidatureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $candidatures = Candidature::with('offre')->get();
        return Inertia::render('Etudiant/Candidatures/Liste',compact('candidatures'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($offre_id)
{
    // Vérifier si déjà postulé à CETTE offre
    $exists = Candidature::where('user_id', auth()->id())
        ->where('offre_id', $offre_id)
        ->exists();

    if ($exists) {
        return redirect()->route('offres.index')
            ->with('warning', 'Vous avez déjà postulé à cette offre');
    }

    $offre = Offre::findOrFail($offre_id);

    return Inertia('Candidature', [
        'offre' => $offre
    ]);
}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    // Vérifier si l'utilisateur a déjà postulé
    $exists = Candidature::where('user_id', auth()->id())
        ->where('offre_id', $request->offre_id)
        ->exists();

    if ($exists) {
        return redirect()->route('offres.index')
            ->with('warning', 'Vous avez déjà postulé à cette offre');
    }

    // Upload CV
    $path = $request->file('cv')->store('cvs', 'public');

    // Création candidature
    Candidature::create([
        'user_id' => auth()->id(),
        'offre_id' => $request->offre_id,
        'cv' => $path,
        'lettre_motivation' => $request->lettre_motivation,
        'etat' => 'en_attente',
    ]);

    return redirect()->route('offres.index')
        ->with('success', 'Candidature envoyée');
}

    /**
     * Display the specified resource.
     */
    public function show(Candidature $candidature)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Candidature $candidature)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Candidature $candidature)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Candidature $candidature)
    {
        
    }
}
