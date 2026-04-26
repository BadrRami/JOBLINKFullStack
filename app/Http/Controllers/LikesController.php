<?php

namespace App\Http\Controllers;

use App\Models\Likes;
use Illuminate\Http\Request;

class LikesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $like = Likes::where('user_id', auth()->id())
        ->where('post_id', $request->post_id)
        ->first();

    if ($like) {
        // Unlike
        $like->delete();
    } else {
        // Like
        Likes::create([
            'user_id' => auth()->id(),
            'post_id' => $request->post_id
        ]);
    }

    return back();
}

    /**
     * Display the specified resource.
     */
    public function show(Likes $likes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Likes $likes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Likes $likes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        Likes::where('user_id', auth()->id())
            ->where('post_id', $request->post_id)
            ->delete();

        return back();
    }
}
