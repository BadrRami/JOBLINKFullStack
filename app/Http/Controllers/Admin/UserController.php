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

    if ($user->role === 'Recruteur') {
        $request->validate([
            'name' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'etat' => 'required|in:profil validé,profil en attente',
        ]);
    } else {
        $request->validate([
            'name' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'etat' => 'required|in:profile validé,en attente de validation',
        ]);
    }

    // Gestion de la photo
    $nomPhoto = $user->photo ?? null;
    if ($request->hasFile('photo')) {
        $nomPhoto = time().'.'.$request->photo->extension();
        $request->photo->storeAs('photos', $nomPhoto, 'public');
    }

    // Mise à jour table users
    $user->update([
        'name' => $request->name,
        'prenom' => $request->prenom,
        'email' => $request->email,
    ]);

    // Mise à jour selon le rôle
    if ($user->role === 'Recruteur' && $user->recruteur) {
        $user->recruteur->update([
            'tel' => $request->tel,
            'poste' => $request->poste,
            'entreprise' => $request->entreprise,
            'photo' => $nomPhoto,
            'etat' => $request->etat,  
        ]);
    }

    if ($user->role === 'Employée' && $user->employee) {
        $user->employee->update([
            'tel' => $request->tel,
            'filiere' => $request->filiere,
            'niveau_etude' => $request->niveau_etude,
            'photo' => $nomPhoto,
            'etat' => $request->etat,  
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
