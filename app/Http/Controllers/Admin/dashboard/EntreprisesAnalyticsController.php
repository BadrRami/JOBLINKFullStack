<?php

namespace App\Http\Controllers\Admin\dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\entreprises;
use Illuminate\Support\Facades\DB;

class EntreprisesAnalyticsController extends Controller
{
    public function index(){
        return Inertia::render('Admin/Dashboard/Entreprises/EntrepriseStat',[
            'entreprises' => $this->getEntreprises(),
            'entreprisesPerDay'=> $this->entreprisesPerDay(),
            'entrepriseByDomain' => $this->entrepriseByDomain()
        ]);
    }
    public function getEntreprises(){
        return entreprises::all();
    }

    public function entreprisesPerDay()
    {
        return entreprises::selectRaw('DATE(created_at) as date')
            ->selectRaw('COUNT(*) as total')
            ->groupBy('date')
            ->orderBy('date')
            ->get();
    }

    public function entrepriseByDomain()
{
    return entreprises::join('domaines', 'entreprises.domaine_id', '=', 'domaines.id')
        ->select(
            'domaines.nom as domaine',
            DB::raw('COUNT(*) as total')
        )
        ->groupBy('domaines.nom')
        ->get();
}
}
