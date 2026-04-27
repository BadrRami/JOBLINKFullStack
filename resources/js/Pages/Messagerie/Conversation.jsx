import React from 'react';
import { usePage } from '@inertiajs/react';
import Menu from '../Menu';
import Contacts from './Contacts';
import ChatWindow from './ChatWindow';

const Conversation = ({ conversation, contacts }) => {
    return (
        <div>
            <Menu />
            <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
                <div style={{ width: '30%', borderRight: '1px solid #e5e7eb', overflowY: 'auto' }}>
                    <Contacts contacts={contacts} activeId={conversation?.id} />
                </div>
                <div style={{ width: '70%', display: 'flex', flexDirection: 'column' }}>
                    {conversation
                        ? <ChatWindow conversation={conversation} />
                        : <p style={{ margin: 'auto', color: '#9ca3af' }}>Sélectionne une conversation</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Conversation;