import React from 'react';
import { router } from '@inertiajs/react';

const OffreCard = ({ offre }) => {

    const handlePostuler = () => {
        router.get(`/candidatures/create/${offre.id}`);
    };

    const handleSauvegarder = () => {
        router.post('/sauvegardes', { offre_id: offre.id });
    };

    return (
        <div className="jl-offre-card">

            <div className="jl-offre-card-body">

                {/* Label "Offre d'emploi" */}
                <span className="jl-offre-feed-badge">
                    <i className="bi bi-briefcase-fill"></i> Offre d'emploi
                </span>

                {/* Titre + type contrat */}
                <div className="jl-offre-header">
                    <h3 className="jl-offre-titre">{offre.titre}</h3>
                    <span className="jl-offre-type">{offre.type}</span>
                </div>

                {/* Description */}
                <p className="jl-offre-description">{offre.description}</p>

                {/* Localisation */}
                <div className="jl-offre-meta">
                    <span className="jl-offre-meta-item">
                        <i className="bi bi-geo-alt-fill"></i>
                        {offre.localisation}
                    </span>
                </div>

            </div>

            {/* Actions */}
            <div className="jl-offre-actions">
                <button className="jl-offre-btn jl-offre-btn-postuler" onClick={handlePostuler}>
                    Postuler
                </button>
                <button className="jl-offre-btn jl-offre-btn-save" onClick={handleSauvegarder}>
                    <i className="bi bi-bookmark-fill"></i> Sauvegarder
                </button>
            </div>

        </div>
    );
}

export default OffreCard;