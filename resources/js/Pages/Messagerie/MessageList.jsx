import React, { useEffect, useRef } from 'react';
import { usePage } from '@inertiajs/react';

const MessageList = ({ messages = [] }) => {
    const { auth } = usePage().props;
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div id="jl-message-list">
            {messages.map((msg) => {
                const isMine = msg.sender_id === auth.user.id;
                return (
                    <div key={msg.id} className={`jl-msg-row ${isMine ? 'is-mine' : 'is-other'}`}>
                         
                        <div className="jl-msg-bubble">
                            
                            {msg.message}
                        </div>
                        {/* <span>{new Date(msg.created_at).toLocaleString()}</span> */}
                        
                    </div>
                );
            })}
            <div ref={bottomRef} />
        </div>
    );
};

export default MessageList;