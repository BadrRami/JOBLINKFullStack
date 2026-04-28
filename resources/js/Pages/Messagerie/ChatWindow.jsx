import React from 'react';
import { usePage } from '@inertiajs/react';
import MessageList from './MessageList';
import Form from './Form';

const ChatWindow = ({ conversation }) => {
    const { auth } = usePage().props;
    const otherUser = conversation.user_one_id === auth.user.id
        ? conversation.user_two
        : conversation.user_one;

    // Initiales pour l'avatar
    const initials = otherUser?.name
        ? otherUser.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
        : '?';

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

            <div id="jl-chat-header">
                <div id="jl-chat-header-avatar">{initials}</div>
                <p id="jl-chat-header-name">{otherUser?.name}</p>
            </div>

            <MessageList messages={conversation.messages} />
            <Form conversationId={conversation.id} />

        </div>
    );
};

export default ChatWindow;