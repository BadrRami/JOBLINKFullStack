import React from 'react';
import Menu from '../Menu';
import { usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';
import '../../../css/profile/profile-recruteur.css';

const Profile = ({ user }) => {
    const { flash } = usePage().props;

    const etatClass = user.etat === 'profil en attente'
        ? 'jl-etat-pending'
        : 'jl-etat-active';

    return (
        <div id="jl-profile-rec-page">
            <Menu />

            <div id="jl-profile-rec-body">

                {/* Flash */}
                {flash.success && (
                    <div className="jl-flash jl-flash-success">{flash.success}</div>
                )}

                <div id="jl-profile-rec-card">

                    {/* Bannière sombre : avatar + nom + état */}
                    <div id="jl-profile-rec-banner">
                        <div id="jl-profile-rec-avatar-wrap">
                            <img
                                id="jl-profile-rec-avatar"
                                src={user.photo ? `/storage/photos/${user.photo}` : '/images.png'}
                                alt="avatar"
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
                            <span className="jl-profile-rec-detail-value">
                                {user.tel || '—'}
                            </span>
                        </div>
                        <div className="jl-profile-rec-detail-item">
                            <span className="jl-profile-rec-detail-label">Poste</span>
                            <span className="jl-profile-rec-detail-value">
                                {user.recruteur?.poste || '—'}
                            </span>
                        </div>
                    </div>

                    {/* Alerte profil en attente */}
                    {user.etat === 'profil en attente' && (
                        <div id="jl-profile-rec-pending-alert">
                            <i className="bi bi-exclamation-triangle-fill"></i>
                            Vous ne pouvez pas créer des offres car votre compte est en attente de validation.
                        </div>
                    )}

                    {/* Actions */}
                    <div id="jl-profile-rec-actions">

                        <a href={route('profile.recruteur.edit')} className="jl-rec-btn jl-rec-btn-edit">
                            <i className="bi bi-pencil-fill"></i>
                            Modifier Profil
                        </a>

                        <a href={route('entrepriseRecruteur.create')} className="jl-rec-btn jl-rec-btn-entreprise">
                            <i className="bi bi-buildings-fill"></i>
                            Associer à une entreprise
                        </a>

                        {user.etat !== 'profil en attente' && (
                            <>
                                <a href={route('offresrecruteur.index')} className="jl-rec-btn jl-rec-btn-offres">
                                    <i className="bi bi-briefcase-fill"></i>
                                    Mes Offres
                                </a>
                                <a href={route('offres.create')} className="jl-rec-btn jl-rec-btn-primary">
                                    <i className="bi bi-plus-circle-fill"></i>
                                    Créer une Offre
                                </a>
                                <a href={route('candidaturesreçus.index')} className="jl-rec-btn jl-rec-btn-primary">
                                    <i className="bi bi-people-fill"></i>
                                    Candidatures Reçues
                                </a>
                                <a href={route('publications.create')} className="jl-rec-btn jl-rec-btn-ghost">
                                    <i className="bi bi-pencil-square"></i>
                                    Créer un poste
                                </a>
                                <a href={route('publications.index')} className="jl-rec-btn jl-rec-btn-ghost">
                                    <i className="bi bi-file-earmark-post"></i>
                                    Mes postes
                                </a>
                            </>
                        )}

                        <button className="jl-rec-btn jl-rec-btn-delete">
                            <i className="bi bi-trash-fill"></i>
                            Supprimer mon compte
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;