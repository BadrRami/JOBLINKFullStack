<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Offre;
use App\Models\User;
use App\Models\Domaine;
use App\Models\Villes;
use Inertia\Inertia;
class OffresController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $offres = Offre::with(['domaine', 'ville'])->get();
        return Inertia('Admin/Offres/Liste', compact('offres'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $offre = Offre::find($id);
        $user = User::find($offre->users_id);
        $ville = Villes::find($offre->id);
        $domaine = Domaine::find($offre->id);
        return view('Admin.Offres.show', compact('offre','user','ville','domaine'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $offre = Offre::findOrFail($id);

        $villes = Villes::all();
        $domaines = Domaine::all();

        return Inertia('Admin/Offres/Edit', [
            'offre' => $offre,
            'villes' => $villes,
            'domaines' => $domaines
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $offre = Offre::findOrFail($id);

        $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'required|string',
            'type' => 'required|string',
            'localisation' => 'required|string|max:255',
            'salaire' => 'required|numeric|min:0',
            'etat' => 'required|in:active,inactive',
            'domaine_id' => 'required|exists:domaines,id',
            'ville_id' => 'required|exists:villes,id',
            // Add other validation rules as needed
        ]);

        $offre->update([
            'titre' => $request->titre,
            'description' => $request->description,
            'type' => $request->type,
            'localisation' => $request->localisation,
            'salaire' => $request->salaire,
            'etat' => $request->etat,
            'domaine_id' => $request->domaine_id,
            'ville_id' => $request->ville_id,
            // Update other fields as needed
        ]);

        return redirect()->route('offresAdmin.index')
                         ->with('success', 'Offre mise à jour avec succès');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
{
    $offre = Offre::findOrFail($id);
    $offre->delete();

    return redirect()->route('offresAdmin.index')
        ->with('success','suppression réussie');
}
}
