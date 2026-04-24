<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\entreprises;
use App\Models\Domaine;
class AdminEntreprisesController extends Controller
{
    public function index(){
        $entreprises= entreprises::all();
        $domaines = Domaine::all();
        return view('Admin.entreprises.index',compact('entreprises','domaines'));
    }
    public function destroy(entreprises $entreprise){
        $entreprise->delete();
        return redirect()->route('entreprise.index')->with('success','supprission réussite');
    }
}
