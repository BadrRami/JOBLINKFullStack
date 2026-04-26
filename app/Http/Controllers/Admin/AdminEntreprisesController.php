<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\entreprises;
use App\Models\Domaine;
use Inertia\Inertia;

class AdminEntreprisesController extends Controller
{
    public function index(){
        $entreprises= entreprises::all();
        $domaines = Domaine::all();
        return Inertia::render('Admin/Entreprises/Liste', compact('entreprises','domaines'));
    }
    public function destroy($id){
        $entreprise = entreprises::findOrFail($id);
        $entreprise->delete();
        return redirect()->route('entrepriseAdmin.index')->with('success','supprission réussite');
    }
}
