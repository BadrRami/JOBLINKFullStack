// import React from 'react';
// import Menu from '../Menu';

// const Profile = ({ user }) => {
//     return (
//         <div>
//             <Menu />
//             <div className="container mt-5">

// <div className="card shadow-lg p-4">

// <div className="row align-items-center">

// <div className="col-md-3 text-center">

// {user.photo ? (
//     <img 
//         src={`/storage/profil/${user.photo}`}
//         alt="Photo de profil"
//         classNameName="rounded-circle border img-fluid"
//         width="150"
//     />
// ) : (
//     <img 
//         src="/images.png"
//         alt="Photo de profil"
//         classNameName="rounded-circle border img-fluid"
//         width="150"
//     />
// )}

// </div>

// <div className="col-md-9">

// <h3 className="mb-3">
// {user.name} {user.prenom}
// </h3>

// <p className="mb-1">
// <strong>Email :</strong> {user.email}
// </p>

// <p className="mb-1">
// <strong>Rôle :</strong> 
// <span className="badge bg-danger">
// {user.role}
// </span>
// </p>

// </div>

// </div>

// <hr/>

// <div className="d-flex gap-2 flex-wrap">

// <a href={route('profile.admin.edit')} className="btn btn-warning">
// Modifier Profil
// </a>


// <a href={route('dashboard')} className="btn btn-secondary">
//     Dashboard
// </a>

// <form action="#" method="POST" onsubmit="return confirm('Supprimer votre compte ?')">


// <button className="btn btn-danger">
// Supprimer mon compte
// </button>

// </form>

// </div>

// </div>

// </div>

//         </div>
//     );
// }

// export default Profile;

import React from 'react';
import Menu from '../Menu';
import { route } from 'ziggy-js';
import '../../../css/Admin/ProfileAdmin.css';

const Profile = ({ user }) => {
    return (
        <div id="jl-profile-page">
            <Menu />

            <div id="jl-profile-body">
                <div id="jl-profile-card">

                    {/* Bannière sombre avec avatar + infos */}
                    <div id="jl-profile-banner">

                        <div id="jl-profile-avatar-wrap">
                            {user.photo ? (
                                <img
                                    id="jl-profile-avatar"
                                    src={`/storage/profil/${user.photo}`}
                                    alt="Photo de profil"
                                />
                            ) : (
                                <img
                                    id="jl-profile-avatar"
                                    src="/images.png"
                                    alt="Photo de profil"
                                />
                            )}
                        </div>

                        <div id="jl-profile-info">
                            <h3 id="jl-profile-name">
                                {user.name} {user.prenom}
                            </h3>
                            <p id="jl-profile-email">{user.email}</p>
                            <span id="jl-profile-role-badge">
                                {user.role}
                            </span>
                        </div>

                    </div>

                    <hr id="jl-profile-divider" />

                    {/* Actions */}
                    <div id="jl-profile-actions">
                        <a href={route('profile.admin.edit')} className="jl-btn jl-btn-edit">
                            Modifier Profil
                        </a>
                        <a href={route('dashboard')} className="jl-btn jl-btn-dashboard">
                            Dashboard
                        </a>
                        <form
                            action="#"
                            method="POST"
                            onSubmit={(e) => {
                                if (!confirm('Supprimer votre compte ?')) e.preventDefault();
                            }}
                        >
                            <button type="submit" className="jl-btn jl-btn-delete">
                                Supprimer mon compte
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;