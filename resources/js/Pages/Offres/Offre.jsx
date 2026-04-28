import React from 'react';
import { router } from '@inertiajs/react';
import { route } from 'ziggy-js';

const Offre = ({ offre }) => {

    const handleSauvegarde = () => {
        router.post('/sauvegardes', {
            offre_id: offre.id
        });
    };

    const handlePostuler = () => {
        router.get(`/candidatures/create/${offre.id}`);
    };

    return (
        <div className="jl-offre-card">

            {/* HEADER : titre + badge type */}
            <div className="jl-offre-header">
                <h3 className="jl-offre-titre">{offre.titre}</h3>
                <span className="jl-offre-type">{offre.type}</span>
            </div>

            {/* DESCRIPTION */}
            <p className="jl-offre-description">{offre.description}</p>

            {/* MÉTA */}
            <div className="jl-offre-meta">
                <span className="jl-offre-meta-item">
                    <i className="bi bi-geo-alt-fill"></i>
                    {offre.localisation}
                </span>
            </div>

            {/* ACTIONS */}
            <div className="jl-offre-actions">
                <button className="jl-offre-btn jl-offre-btn-share">
                    <i className="bi bi-share-fill"></i>
                </button>
                <button className="jl-offre-btn jl-offre-btn-save" onClick={handleSauvegarde}>
                    <i className="bi bi-bookmark-fill"></i>
                </button>
                <button className="jl-offre-btn jl-offre-btn-view">
                    <i className="bi bi-eye-fill"></i>
                </button>
                <a className="jl-offre-btn jl-offre-btn-postuler" onClick={handlePostuler}>
                    Postuler
                </a>
            </div>

        </div>
    );
}

export default Offre;