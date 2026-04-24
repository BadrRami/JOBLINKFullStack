<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function index(){
        $posts = Post::all();
        return view('Admin.posts.index', compact('posts'));
    }
    public function destroy(Post $post){
        $post->delete();
        return redirect()->route('post.index')
                        ->with('success','post supprimé');
    }
}
