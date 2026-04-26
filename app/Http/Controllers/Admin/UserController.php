<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\recruteur;
use App\Models\employee;
use Inertia\Inertia;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return Inertia('Admin/Users/Liste', compact('users'));
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
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::find($id);

        if(!$user){
            return redirect()->route('users.index')->with('error','Utilisateur introuvable');
        }

        return view('Admin.Users.show', compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::with(['employee', 'recruteur'])->find($id);
        return Inertia('Admin/Users/Modifier', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
{
    $user = User::findOrFail($id);

    $data = [
        'name'   => $request->name,
        'prenom' => $request->prenom,
        'email'  => $request->email,
        'tel'    => $request->tel,
        'etat'   => $request->etat,
    ];


    if ($request->hasFile('photo')) {
        $nomPhoto = time() . '.' . $request->photo->extension();
        $request->photo->storeAs('photos', $nomPhoto, 'public');

        $data['photo'] = $nomPhoto; 
    }

    $user->update($data);

    // Recruteur
    if ($user->role === 'Recruteur' && $user->recruteur) {
        $user->recruteur->update([
            'poste' => $request->poste,
            'entreprise_id' => $request->entreprise,
        ]);
    }

    // Employee
    if ($user->role === 'Employee' && $user->employee) {
        $user->employee->update([
            'filiere' => $request->filiere,
            'niveau_etude' => $request->niveau_etude,
        ]);
    }

    return redirect()->route('users.index')->with('success', 'Utilisateur mis à jour');
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('users.index')
                        ->with('success','Utilisateur supprimé');
    }
}
