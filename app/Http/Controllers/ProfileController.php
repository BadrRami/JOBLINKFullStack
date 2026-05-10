<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Recruteur;
use App\Models\Employee;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
class ProfileController extends Controller
{

    public function showAdmin(){
        $user = Auth::user();

        return Inertia::render('Admin/Profile', compact('user'));
    }
    public function editAdmin(){
        $user = Auth::user();

        return Inertia::render('Admin/EditProfile', compact('user'));
    }
    public function updateAdmin(Request $request){
        $request->validate([
            'name' => 'required|min:3',
            'prenom' => 'required|min:3',
            'email' => 'required|email'
        ]);
        $user = auth()->user();
        // update users table
        $user->update([
            'name' => $request->name,
            'prenom' => $request->prenom,
            'email' => $request->email,
        ]);
        return redirect()->route('profile.admin')->with('success', 'Profil admin mis à jour');
    }

    // Affiche le profil du recruteur

    public function showRecruteur()
{
    $user = Auth::user()->load('recruteur');

    return Inertia::render('Recruteur/Profile', [
        'user' => $user
    ]);
}
    
    public function editRecruteur()
    {
        $user = Auth::user()->load('Recruteur'); 

        return Inertia::render('Recruteur/EditProfile', compact('user'));
    }
    
    public function updateRecruteur(Request $request)
    {
        $user = auth()->user();
        
        if ($request->hasFile('photo') && $user->recruteur->photo) {
            Storage::disk('public')->delete('photos/'.$user->recruteur->photo);
        }

        $nomPhoto = null;

        if($request->hasFile('photo')){
            $nomPhoto = time().'.'.$request->photo->extension();

            $request->photo->storeAs('photos', $nomPhoto, 'public');
        }

        // update users table
        $user->update([
            'name' => $request->name,
            'prenom' => $request->prenom,
            'email' => $request->email,
            'tel'=>$request->tel,
            'photo' => $nomPhoto,
            'gender' => $request->gender
        ]);

        // update recruteurs table
        $user->recruteur->update([
            'entreprise' => $request->entreprise,
            'poste'=>$request->poste,
        ]);

        return redirect()->route('profile.recruteur.edit')->with('success', 'Profil recruteur mis à jour');
    }

    public function showEmployee()
    {
        $user = Auth::user()->load('Employee'); 

        return Inertia::render('Etudiant/Profile', compact('user'));
    }


    public function editEmployee(){
        $user = Auth::user()->load('Employee'); 
        return Inertia::render('Etudiant/EditProfile', compact("user"));
    }



    public function updateEmployee(Request $request)
    {
            $user = auth()->user();
            if ($request->hasFile('photo') && $user->employee->photo) {
                Storage::disk('public')->delete('photos/'.$user->employee->photo);
            }
            $nomPhoto = null;

            if($request->hasFile('photo')){
                $nomPhoto = time().'.'.$request->photo->extension();

                $request->photo->storeAs('photos', $nomPhoto, 'public');
            }

            $user->update([
                'name' => $request->name,
                'prenom' => $request->prenom,
                'email' => $request->email,
                'tel' => $request->tel,
                'photo'=>$nomPhoto,
                'gender' => $request->gender
            ]);

            $user->employee->update([
                'filiere'=>$request->filiere,
                'niveau_etude'=>$request->niveau_etude,
            ]);

            return redirect()->route('profile.employee')->with('success', 'Profil employee mis à jour');
    }
}
