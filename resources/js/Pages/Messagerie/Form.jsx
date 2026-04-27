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
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, padding: 12, borderTop: '1px solid #e5e7eb' }}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Écrire un message..."
                style={{ flex: 1, padding: '8px 12px', borderRadius: 8, border: '1px solid #d1d5db' }}
            />
            <button type="submit" style={{ padding: '8px 16px', borderRadius: 8, background: '#3b82f6', color: '#fff', border: 'none' }}>
                Envoyer
            </button>
        </form>
    );
};

export default Form;