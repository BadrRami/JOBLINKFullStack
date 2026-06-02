<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Offre;
use App\Models\Post;
use App\Models\Commentaire;
use Illuminate\Support\Facades\Auth;
class Accueil extends Controller
{
    public function index(){
        $offres = Offre::all()->shuffle();
        $posts = Post::with(['user', 'comments.user', 'likes', 'comments'])->get()->shuffle();

        $feed = collect();

        while ($posts->count() > 0 || $offres->count() > 0) {

            // 1 à 2 publications
            for ($i = 0; $i < rand(1,2); $i++) {
                if ($posts->count() > 0) {
                    $item = $posts->shift();
                    $item->type = 'post';
                    $feed->push($item);
                }
            }

            // 1 offre
            if ($offres->count() > 0) {
                $item = $offres->shift();
                $item->type = 'offre';
                $feed->push($item);
            }
        }

        $user = Auth::user();

        return Inertia::render('Accueil/Accueil', [
            'feed' => $feed,
            'user' => $user
        ]);
    }
}
