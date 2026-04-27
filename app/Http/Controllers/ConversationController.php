<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Message;
use App\Models\Conversation;
use Inertia\Inertia;
class ConversationController extends Controller
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
        if(Auth::check()){
            return inertia('Messagerie/Conversation');
        }else{
            return redirect()->route('login');
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if (Auth::check()) {

            $authId = auth()->id();
            $otherId = $request->user_id;

            // récupérer UNE seule conversation (pas get)
            $conversation = Conversation::where('user_one_id', $authId)
                ->where('user_two_id', $otherId)
                ->orWhere(function ($q) use ($authId, $otherId) {
                    $q->where('user_one_id', $otherId)
                    ->where('user_two_id', $authId);
                })
                ->first();

            if ($conversation) {
                // conversation existe
                return redirect()->route('conversation.show', $conversation->id);
            } else {
                // créer conversation
                $conversation = Conversation::create([
                    'user_one_id' => $authId,
                    'user_two_id' => $otherId
                ]);

                return redirect()->route('conversation.show', $conversation->id);
            }
        }

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
{
    $authId = Auth::id();

    $conversation = Conversation::with(['messages.sender'])
        ->where('id', $id)
        ->where(function ($q) use ($authId) {
            $q->where('user_one_id', $authId)
              ->orWhere('user_two_id', $authId);
        })->firstOrFail(); // 403 si l'user n'appartient pas à la conv

    // Toutes les conversations de l'utilisateur pour le panneau gauche
    $contacts = Conversation::with(['userOne', 'userTwo', 'lastMessage'])
        ->where('user_one_id', $authId)
        ->orWhere('user_two_id', $authId)
        ->latest('updated_at')
        ->get();

    return inertia('Messagerie/Conversation', [
        'conversation' => $conversation,
        'contacts'     => $contacts,
        'authUser'     => Auth::user()->only('id', 'name'),
    ]);
}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
