<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\entreprises;
class EntreprisesController extends Controller
{
    public function index(){
        $entreprises = entreprises::all();
        return view('Entreprises', compact('entreprises'));
    }
}
