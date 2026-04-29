import React from 'react';

const Candidature = ({ candidature }) => {

    // Classe statut
    const statusClass = () => {
        const s = candidature.statut?.toLowerCase();
        if (s === 'accepté' || s === 'accepte') return 'jl-status-accepted';
        if (s === 'refusé'  || s === 'refuse')  return 'jl-status-refused';
        return 'jl-status-pending';
    };

    const statusLabel = candidature.statut ?? 'En attente';

    // Initiales avatar
    const initials = [candidature.user?.name, candidature.user?.prenom]
        .filter(Boolean)
        .map(n => n[0].toUpperCase())
        .join('');

    return (
        <div className="jl-cand-card">

            {/* HEADER : titre offre + statut */}
            <div className="jl-cand-card-top">
                <p className="jl-cand-offre-titre">
                    {candidature.offre?.titre ?? 'Offre inconnue'}
                </p>
                <span className={`jl-cand-status ${statusClass()}`}>
                    {statusLabel}
                </span>
            </div>

            {/* BODY : avatar + infos candidat */}
            <div className="jl-cand-card-body">
                <div className="jl-cand-avatar">{initials}</div>
                <div className="jl-cand-info">
                    <p className="jl-cand-nom">
                        {candidature.user?.name} {candidature.user?.prenom}
                    </p>
                    <p className="jl-cand-email">
                        <i className="bi bi-envelope-fill"></i>
                        {candidature.user?.email ?? 'Non défini'}
                    </p>
                    <p className="jl-cand-date">
                        <i className="bi bi-calendar3"></i>
                        {new Date(candidature.created_at).toLocaleDateString('fr-FR', {
                            day: '2-digit', month: 'long', year: 'numeric'
                        })}
                    </p>
                </div>
            </div>

            {/* FOOTER : actions */}
            <div className="jl-cand-card-footer">
                <button className="jl-cand-btn jl-cand-btn-accept">
                    <i className="bi bi-check-lg"></i> Accepter
                </button>
                <button className="jl-cand-btn jl-cand-btn-refuse">
                    <i className="bi bi-x-lg"></i> Refuser
                </button>
                <a
                    href={`/profile/employee/${candidature.user?.id}`}
                    className="jl-cand-btn jl-cand-btn-profil"
                >
                    <i className="bi bi-person-fill"></i> Voir profil
                </a>
                {candidature.cv && (
                    <a
                        href={`/storage/cv/${candidature.cv}`}
                        className="jl-cand-btn jl-cand-btn-cv"
                        download
                    >
                        <i className="bi bi-download"></i> CV
                    </a>
                )}
            </div>

        </div>
    );
}

export default Candidature;