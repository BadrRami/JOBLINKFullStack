<?php

namespace App\Http\Controllers;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
class posts extends Controller
{
    public function index()
{
    $posts = Post::with(['user', 'comments.user', 'likes'])->get();

    return Inertia('Publications/Index', [
        'posts' => $posts
    ]);
}
}
