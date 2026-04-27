import React, { useEffect, useRef } from 'react';
import { usePage } from '@inertiajs/react';

const MessageList = ({ messages = [] }) => {
    const { auth } = usePage().props;
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {messages.map((msg) => {
                const isMine = msg.sender_id === auth.user.id;
                return (
                    <div key={msg.id} style={{ display: 'flex', justifyContent: isMine ? 'flex-end' : 'flex-start' }}>
                        <div style={{
                            maxWidth: '70%',
                            padding: '8px 12px',
                            borderRadius: 12,
                            backgroundColor: isMine ? '#3b82f6' : '#f3f4f6',
                            color: isMine ? '#fff' : '#111',
                            fontSize: 14,
                        }}>
                            {msg.message}
                        </div>
                    </div>
                );
            })}
            <div ref={bottomRef} />
        </div>
    );
};

export default MessageList;