<?php

namespace App\Http\Controllers\Recruteur;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Candidature;
use Inertia\Inertia;
class CandidaturesController extends Controller
{
    public function index()
{
    $candidaturesRecues = Candidature::with(['offre', 'user'])
    ->join('offres', 'offres.id', '=', 'candidatures.offre_id')
    ->where('offres.users_id', auth()->id())
    ->select('candidatures.*')
    ->get();

    return Inertia::render('Recruteur/CandidaturesRecu/Liste', [
        'candidatures' => $candidaturesRecues
    ]);
    
}
}