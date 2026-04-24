<?php

namespace App\Http\Controllers;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
class posts extends Controller
{
    public function index(){
        $posts = Post::all();
        return Inertia::render('Publications/Index', [
            'posts' => $posts
        ]);
    }
}
