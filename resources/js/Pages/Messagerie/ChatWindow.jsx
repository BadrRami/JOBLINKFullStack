import React from 'react';
import { usePage } from '@inertiajs/react';
import MessageList from './MessageList';
import Form from './Form';

const ChatWindow = ({ conversation }) => {
    const { auth } = usePage().props;

    const otherUser = conversation.user_one_id === auth.user.id
        ? conversation.user_two
        : conversation.user_one;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ padding: '12px 16px', borderBottom: '1px solid #e5e7eb', fontWeight: 600 }}>
                {otherUser?.name}
            </div>
            <MessageList messages={conversation.messages} />
            <Form conversationId={conversation.id} />
        </div>
    );
};

export default ChatWindow;