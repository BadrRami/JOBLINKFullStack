<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
class PostsController extends Controller
{
    public function index(){
        $posts = Post::all();
        return Inertia::render('Admin/Publications/Liste', [
            'posts' => $posts
        ]);
    }
    public function destroy($id){
        $post = Post::findOrFail($id);
        $post->delete();
        return redirect()->route('postsAdmin.index')
                        ->with('success','post supprimé');
    }
}
