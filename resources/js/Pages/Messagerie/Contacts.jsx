import React from 'react';
import Contact from './Contact';

const Contacts = ({ contacts = [], activeId }) => {
    return (
        <div className="card">
            {contacts.map((contact) => (
                <Contact
                    key={contact.id}
                    contact={contact}
                    isActive={contact.id === activeId}
                />
            ))}
        </div>
    );
};

export default Contacts;