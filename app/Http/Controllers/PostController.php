<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Récupérer tous les posts de l'utilisateur connecté via la relation polymorphe
        $postes = Post::where('user_id', auth()->id())->get();

        return Inertia::render('posts/Liste', compact('postes'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('posts/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {     
        $data = $request->validate([
            'titre' => 'required|string|max:65535',
            'media'=> 'nullable|file|mimes:jpg,jpeg,png,gif,mp4,mov,avi,webm|max:10240'
        ]);

        $data['user_id'] = auth()->id();
        $data['NBLikes'] = 0;       // Ajout ici
        $data['NBComments'] = 0;    // Ajout ici
        $data['media'] = 'null';

        // Gestion du media
        if ($request->hasFile('media')) {
            $filename = time() . '.' . $request->media->getClientOriginalExtension();
            $request->media->storeAs('media', $filename, 'public');
            $data['media'] = $filename;
        }

        // Créer le post avec relation polymorphe
        auth()->user()->posts()->create($data); // ← utiliser la relation définie dans User

        return redirect()->route('publications.create')->with('success','Votre post a été créé avec succès');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return view('Posts.show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return Inertia::render('posts/Edit', compact('post'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
{
    if ($post->user_id != auth()->id()) {
        abort(403, 'Action non autorisée');
    }

    if ($post->media && $post->media !== 'null') {
        \Storage::disk('public')->delete('media/' . $post->media);
    }

    $post->delete();

    return redirect()->route('postes.index')->with('success', 'Votre post a été supprimé avec succès');
}
}
