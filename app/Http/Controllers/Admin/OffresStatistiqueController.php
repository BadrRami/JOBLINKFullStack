<?php

namespace App\Http\Controllers\Admin;
use App\Models\Offre;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
class OffresStatistiqueController extends Controller
{
    public function index(){
        return Inertia::render('Admin/Dashboard/Offres/OffreStatistique',[
            'offres' => $this->getOffres(),
            'OffresPerDay' => $this->OffresPerDay()
        ]);
    }
    private function getOffres(){
        return Offre::all();
    }
    private function OffresPerDay(){
        return Offre::selectRaw('DATE(created_at) as date, COUNT(*) as total')
            ->groupBy('date')
            ->orderBy('date')
            ->get();
    }
}
