<?php

namespace App\Http\Controllers\Admin\dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class PublicationsAnalyticsController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard/Publications/Statistique',[
            'publications' => $this->getPublications(),
            'publicationsPerDay'=> $this->publicationsPerDay(),
            'mostLikedPublications' => $this->mostLikedPublications()
        ]);
    }

    private function getPublications()
    {
       return Post::all(); 
    }

    private function publicationsPerDay()
    {
        return Post::selectRaw('DATE(created_at) as date, COUNT(*) as total')
            ->groupBy('date')
            ->orderBy('date')
            ->get();
    }

    private function mostLikedPublications()
    {
        return Post::withCount('likes')
            ->orderByDesc('likes_count')
            ->take(5)
            ->get();
    }
}