import React from 'react';
import { router, usePage } from '@inertiajs/react';

const Contact = ({ contact, isActive }) => {
    const { auth } = usePage().props;

    const otherUser = contact.user_one_id === auth.user.id
        ? contact.user_two
        : contact.user_one;

    return (
        <div
            className="p-2 border-bottom"
            style={{ cursor: 'pointer', backgroundColor: isActive ? '#eff6ff' : 'transparent' }}
            onClick={() => router.get(route('conversation.show', contact.id))}
        >
            <strong>{otherUser?.name}</strong>
            <p className="text-muted">
                {contact.last_message?.message ?? 'Aucun message'}
            </p>
        </div>
    );
};

export default Contact;