import React from 'react';
import Menu from '../Menu';
import { Link, router } from '@inertiajs/react';
import { route } from 'ziggy-js';
import '../../../css/profile/profile-emplyee.css';

const Profile = ({ user }) => {

    const handleDelete = () => {
        if (confirm("Voulez-vous vraiment supprimer votre compte ?")) {
            router.delete('/profile/delete');
        }
    };

    const etatClass = user.etat === 'profil validé'
        ? 'jl-etat-active'
        : 'jl-etat-pending';

    return (
        <div id="jl-profile-rec-page">
            <Menu />

            <div id="jl-profile-rec-body">
                <div id="jl-profile-rec-card">

                    {/* Bannière sombre : avatar + nom + état */}
                    <div id="jl-profile-rec-banner">
                        <div id="jl-profile-rec-avatar-wrap">
                            <img
                                id="jl-profile-rec-avatar"
                                src={user.photo ? `/storage/photos/${user.photo}` : '/images.png'}
                                alt="profil"
                            />
                        </div>
                        <div id="jl-profile-rec-info">
                            <h3 id="jl-profile-rec-name">
                                {user.name} {user.prenom}
                            </h3>
                            <p id="jl-profile-rec-role">{user.role}</p>
                            <span className={`jl-profile-rec-etat ${etatClass}`}>
                                {user.etat}
                            </span>
                        </div>
                    </div>

                    {/* Détails */}
                    <div id="jl-profile-rec-details">
                        <div className="jl-profile-rec-detail-item">
                            <span className="jl-profile-rec-detail-label">Email</span>
                            <span className="jl-profile-rec-detail-value">{user.email}</span>
                        </div>
                        <div className="jl-profile-rec-detail-item">
                            <span className="jl-profile-rec-detail-label">Rôle</span>
                            <span className="jl-profile-rec-detail-value">{user.role}</span>
                        </div>
                        <div className="jl-profile-rec-detail-item">
                            <span className="jl-profile-rec-detail-label">Téléphone</span>
                            <span className="jl-profile-rec-detail-value">{user.tel || '—'}</span>
                        </div>
                        <div className="jl-profile-rec-detail-item">
                            <span className="jl-profile-rec-detail-label">Filière</span>
                            <span className="jl-profile-rec-detail-value">
                                {user.employee?.filiere || '—'}
                            </span>
                        </div>
                        <div className="jl-profile-rec-detail-item">
                            <span className="jl-profile-rec-detail-label">Niveau d'étude</span>
                            <span className="jl-profile-rec-detail-value">
                                {user.employee?.niveau_etude || '—'}
                            </span>
                        </div>
                    </div>

                    {/* Alerte compte non validé */}
                    {user.etat !== 'profil validé' && (
                        <div id="jl-profile-rec-pending-alert">
                            <i className="bi bi-exclamation-triangle-fill"></i>
                            Vous ne pouvez pas utiliser toutes les fonctionnalités tant que votre compte n'est pas validé.
                        </div>
                    )}

                    {/* Actions */}
                    <div id="jl-profile-rec-actions">

                        <Link href="/profile/employee/edit" className="jl-rec-btn jl-rec-btn-edit">
                            <i className="bi bi-pencil-fill"></i>
                            Modifier Profil
                        </Link>

                        {user.etat === 'profil validé' && (
                            <>
                                <Link href={route('publications.create')} className="jl-rec-btn jl-rec-btn-ghost">
                                    <i className="bi bi-pencil-square"></i>
                                    Créer un poste
                                </Link>
                                <Link href={route('publications.index')} className="jl-rec-btn jl-rec-btn-ghost">
                                    <i className="bi bi-file-earmark-post"></i>
                                    Mes postes
                                </Link>
                                <Link href={route('candidature.index')} className="jl-rec-btn jl-rec-btn-candidatures-emp">
                                    <i className="bi bi-briefcase-fill"></i>
                                    Mes Candidatures
                                </Link>
                            </>
                        )}

                        <Link href={route('sauvegarde.index')} className="jl-rec-btn jl-rec-btn-save">
                            <i className="bi bi-bookmark-fill"></i>
                            Sauvegardes
                        </Link>

                        <button
                            className="jl-rec-btn jl-rec-btn-delete"
                            onClick={handleDelete}
                        >
                            <i className="bi bi-trash-fill"></i>
                            Supprimer mon compte
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;