import React from 'react';
import { router, usePage } from '@inertiajs/react';

const Contact = ({ contact, isActive }) => {
    const { auth } = usePage().props;
    const otherUser = contact.user_one_id === auth.user.id
        ? contact.user_two
        : contact.user_one;

    // Initiales pour l'avatar
    const initials = otherUser?.name
        ? otherUser.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
        : '?';

    return (
        <div
            className={`jl-contact-item ${isActive ? 'is-active' : ''}`}
            onClick={() => router.get(route('conversation.show', contact.id))}
        >
            <div className="jl-contact-avatar">{initials}</div>
            <div className="jl-contact-info">
                <p className="jl-contact-name">{otherUser?.name}</p>
                <p className="jl-contact-last-msg">
                    {contact.last_message?.message ?? 'Aucun message'}
                </p>
            </div>
        </div>
    );
};

export default Contact;