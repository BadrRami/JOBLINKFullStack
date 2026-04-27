import React, { useState } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';
import '../../css/Menu.css'

const Menu = () => {

    const { auth } = usePage().props;
    const user = auth?.user;
    const [isOpen, setIsOpen] = useState(false);
    const { unreadCount } = usePage().props;
    const handleLogout = () => {
        router.post('/logout');
    };

   const handleConversation = () => {
    router.get(route('conversation.create'));
};

    return (
        <nav id="jl-navbar">
            <div className="jl-container">

                <Link className="jl-brand" href="/">
                    Job<span className="jl-brand-accent">Link</span>
                </Link>

                {/* ✅ Burger button ajouté — visible uniquement sur mobile via CSS */}
                <button
                    id="jl-hamburger"
                    className={isOpen ? 'is-open' : ''}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Ouvrir le menu"
                    aria-expanded={isOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`jl-nav-inner ${isOpen ? 'is-open' : ''}`}>
                    <ul className="jl-nav-list">
                        <li><Link className="jl-nav-link" href="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
                        <li><Link className="jl-nav-link" href={route('offres.index')} onClick={() => setIsOpen(false)}>Offres</Link></li>
                        <li><Link className="jl-nav-link" href={route('entreprises.index')} onClick={() => setIsOpen(false)}>Entreprises</Link></li>
                        <li><Link className="jl-nav-link" href={route('posts.index')} onClick={() => setIsOpen(false)}>Publications</Link></li>
                    </ul>

                    <div className="jl-nav-actions">
                        <button className='btn' onClick={handleConversation}>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                        </button>
                        
                {unreadCount > 0 && (
                    <span style={{
                        position: 'absolute',
                        top: 2,
                        right: 2,
                        backgroundColor: '#ef4444',
                        color: '#fff',
                        fontSize: 11,
                        fontWeight: 700,
                        borderRadius: '999px',
                        minWidth: 18,
                        height: 18,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0 4px',
                    }}>
                        {unreadCount > 99 ? '99+' : unreadCount}
                    </span>
                )}
                        {user ? (
                            <>
                                {user.role === 'admin' && (
                                    <Link className="jl-btn jl-btn-admin" href="/admin">
                                        Admin
                                    </Link>
                                )}
                                {user.role.toLowerCase() === 'recruteur' && (
                                    <Link className="jl-btn jl-btn-ghost" href={route('profile.recruteur')}>
                                        Mon Profil
                                    </Link>
                                )}
                                {user.role.toLowerCase() === 'employee' && (
                                    <Link className="jl-btn jl-btn-ghost" href="/profile/employee">
                                        Mon Profil
                                    </Link>
                                )}
                                {user.role.toLowerCase() === 'admin' && (
                                    <Link className="jl-btn jl-btn-ghost" href="/profile/admin">
                                        Mon Profil
                                    </Link>
                                )}
                                <button className="jl-btn jl-btn-logout" onClick={handleLogout}>
                                    Se déconnecter
                                </button>
                            </>
                        ) : (
                            <Link className="jl-btn jl-btn-login" href="/login">
                                Se connecter
                            </Link>
                        )}
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Menu;