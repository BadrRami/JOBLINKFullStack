import React, { useState } from 'react';
import { router } from '@inertiajs/react';

const Form = ({ conversationId }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        router.post(route('message.store'), {
            conversation_id: conversationId,
            message: message,
        }, {
            preserveScroll: true,
            onSuccess: () => setMessage(''),
        });
    };

    return (
        <form id="jl-chat-form" onSubmit={handleSubmit}>
            <input
                id="jl-chat-input"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Écrire un message..."
            />
            <button id="jl-chat-send" type="submit">
                <i className="bi bi-send-fill"></i>
            </button>
        </form>
    );
};

export default Form;