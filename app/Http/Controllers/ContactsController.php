<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Conversation;
class ContactsController extends Controller
{
    public function index()
    {
        $authId = auth()->id();

        $contacts = Conversation::with(['userOne', 'userTwo', 'lastMessage'])
            ->where('user_one_id', $authId)
            ->orWhere('user_two_id', $authId)
            ->get();

        return inertia('Messagerie/Contacts', [
            'contacts' => $contacts
        ]);
    }
}
