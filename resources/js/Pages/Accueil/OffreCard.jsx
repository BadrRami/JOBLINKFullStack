import React from 'react';
import '../../../css/Accueil/Cards.css';

const OffreCard = ({ offre }) => {
    return (
        <div className="jl-card">
            <div className="jl-card-header">
                <div className="jl-card-avatar jl-card-avatar--offre">
                    <i className="bi bi-briefcase-fill"></i>
                </div>
                <div>
                    <p className="jl-card-author">{offre?.titre}</p>
                    <p className="jl-card-date">{offre?.entreprise}</p>
                </div>
                <span className="jl-badge">Offre</span>
            </div>
            <p className="jl-card-body">{offre?.description}</p>
            <div className="jl-card-footer">
                <span className="jl-card-meta">
                    <i className="bi bi-geo-alt-fill"></i>
                    {offre?.localisation}
                </span>
                <span className="jl-card-meta">
                    <i className="bi bi-clock-fill"></i>
                    {offre?.created_at}
                </span>
            </div>
        </div>
    );
};

export default OffreCard;