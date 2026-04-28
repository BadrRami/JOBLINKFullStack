import React from 'react';
import { usePage } from '@inertiajs/react';
import Menu from '../Menu';
import Contacts from './Contacts';
import ChatWindow from './ChatWindow';
import '../../../css/chat.css';

const Conversation = ({ conversation, contacts }) => {
    return (
        <div id="jl-chat-page">
            <Menu />
            <div id="jl-chat-layout">

                <div id="jl-chat-sidebar">
                    <p id="jl-contacts-title">Messages</p>
                    <div id="jl-contacts-list">
                        <Contacts contacts={contacts} activeId={conversation?.id} />
                    </div>
                </div>

                <div id="jl-chat-window">
                    {conversation
                        ? <ChatWindow conversation={conversation} />
                        : <p id="jl-chat-empty">Sélectionne une conversation</p>
                    }
                </div>

            </div>
        </div>
    );
};

export default Conversation;