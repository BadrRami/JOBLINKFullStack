import React from 'react';

const Candidature = ({ candidature }) => {

    

    // Classe CSS selon le statut
    const statusClass = () => {
        const s = candidature.etat?.toLowerCase();
        if (s === 'accepté' || s === 'accepte') return 'jl-status-accepted';
        if (s === 'refusé' || s === 'refuse')  return 'jl-status-refused';
        return 'jl-status-pending';
    };

    const statusLabel = candidature.etat ?? 'En attente';

    return (
        <a href={`/candidatures/${candidature.id}`} className="jl-candidature-card">

            <div className="jl-candidature-info">
                <p className="jl-candidature-titre">
                    {candidature.offre.titre}
                </p>
                <p className="jl-candidature-date">
                    <i className="bi bi-calendar3"></i>
                    {new Date(candidature.created_at).toLocaleDateString('fr-FR', {
                        day: '2-digit', month: 'long', year: 'numeric'
                    })}
                </p>
            </div>

            <span className={`jl-candidature-status ${statusClass()}`}>
                {statusLabel}
            </span>

            <i className="bi bi-chevron-right jl-candidature-arrow"></i>

        </a>
    );
}

export default Candidature;