import React from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';
import '../../css/Menu.css'

const Menu = () => {

    const { auth } = usePage().props;
    const user = auth?.user;

    const handleLogout = () => {
        router.post('/logout');
    };

    return (
        // <nav className="navbar navbar-expand-lg bg-body-tertiary">
        //     <div className="container-fluid">

        //         <Link className="navbar-brand" href="/">JobLink</Link>

        //         <div className="collapse navbar-collapse">

        //             <ul className="navbar-nav me-auto">
        //                 <li><Link className="nav-link" href="/">Accueil</Link></li>
        //                 <li><Link className="nav-link" href={route('offres.index')}>Offres</Link></li>
        //                 <li><Link className="nav-link" href={route('entreprises.index')}>Entreprises</Link></li>
        //                 <li><Link className="nav-link" href={route('posts.index')}>Publications</Link></li>
        //             </ul>

        //             <div className="d-flex gap-2">

        //                 {user ? (
        //                     <>
        //                     {user.role === 'admin' && (
        //                         <Link className="btn btn-outline-primary" href="/admin">
        //                             Admin
        //                         </Link>
        //                     )}
        //                     {user.role.toLowerCase() === 'recruteur' && (
        //                         <Link className="btn btn-outline-success" href={route('profile.recruteur')}>
        //                             Mon Profil
        //                         </Link>
        //                     )}
        //                     {user.role.toLowerCase() === 'employee' && (
        //                         <Link className="btn btn-outline-info" href="/profile/employee">
        //                             Mon Profil
        //                         </Link>
        //                     )}
        //                     {user.role.toLowerCase() === 'admin' && (
        //                         <Link className="btn btn-outline-info" href="/profile/admin">
        //                             Mon Profil
        //                         </Link>
        //                     )}
        //                     <button 
        //                             className="btn btn-outline-danger"
        //                             onClick={handleLogout}
        //                         >
        //                             Se déconnecter
        //                         </button>
        //                     </>
        //                 ) : (
        //                     <Link className="btn btn-outline-success" href="/login">
        //                         Se connecter
        //                     </Link>
        //                 )}

        //             </div>

        //         </div>
        //     </div>
        // </nav>



                <nav id="jl-navbar">
            <div className="jl-container">
 
                <Link className="jl-brand" href="/">
                    Job<span className="jl-brand-accent">Link</span>
                </Link>
 
                <div className="jl-nav-inner">
                    <ul className="jl-nav-list">
                        <li><Link className="jl-nav-link" href="/">Accueil</Link></li>
                        <li><Link className="jl-nav-link" href={route('offres.index')}>Offres</Link></li>
                        <li><Link className="jl-nav-link" href={route('entreprises.index')}>Entreprises</Link></li>
                        <li><Link className="jl-nav-link" href={route('posts.index')}>Publications</Link></li>
                    </ul>
 
                    <div className="jl-nav-actions">
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
                                <button
                                    className="jl-btn jl-btn-logout"
                                    onClick={handleLogout}
                                >
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