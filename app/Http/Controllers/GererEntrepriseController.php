<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Domaine;
use App\Models\entreprises;
class GererEntrepriseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $domaines = Domaine::all();
        return view('Recruteur.entreprise.create',compact('domaines'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = [
            'nom' => $request->nom,
            'tel' => $request->tel,
            'email' => $request->email,
            'domaine_id' => $request->domaine,
            'adresse' => $request->adresse,
            'annee_creation' => $request->annee_creation,
            'site_web' => $request->site_web,
            'description' => $request->description,
            'logo'=> $request->logo
        ];

        // user connecté
        $data['user_id'] = auth()->id();

        if($request->hasFile('logo')){
            $filename = time() . '.' . $request->logo->getClientOriginalExtension();
            $request->logo->storeAs('logo',$filename,'public');
            $data['logo'] = $filename;
        }

        

        // ✅ Création
        entreprises::create($data);

        return redirect()->route('entreprise.create')
            ->with('success', "Association réussie");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
    public function destroy(string $id)
    {
        //
    }
}
