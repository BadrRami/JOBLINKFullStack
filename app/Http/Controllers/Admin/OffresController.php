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
        $offres = Offre::all(); 
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Offre $offre)
    {
        $offre->delete();
        return redirect()->route('offre.index')->with('success','suppression réussit');
    }
}
