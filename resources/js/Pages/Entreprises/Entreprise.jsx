import React from 'react';

const Entreprise = ({ entreprise }) => {
    return (
        <div className="jl-entreprise-card">

            {/* Header sombre : logo + nom */}
            <div className="jl-entreprise-card-top">
                <img
                    src={
                        entreprise.logo
                            ? `/storage/logo/${entreprise.logo}`
                            : '/images.png'
                    }
                    className="jl-entreprise-logo"
                    alt="logo"
                />
                <h5 className="jl-entreprise-nom">{entreprise.nom}</h5>
            </div>

            {/* Infos */}
            <div className="jl-entreprise-card-body">
                <p className="jl-entreprise-description">
                    {entreprise.description || 'Pas de description'}
                </p>

                <hr className="jl-entreprise-divider" />

                <p className="jl-entreprise-info-item">
                    <i className="bi bi-telephone-fill"></i>
                    {entreprise.tel || 'Non défini'}
                </p>
                <p className="jl-entreprise-info-item">
                    <i className="bi bi-geo-alt-fill"></i>
                    {entreprise.adresse || 'Non défini'}
                </p>
                <p className="jl-entreprise-info-item">
                    <i className="bi bi-globe"></i>
                    {entreprise.site_web ? (
                        <a href={entreprise.site_web} target="_blank" rel="noreferrer">
                            Visiter
                        </a>
                    ) : 'Non défini'}
                </p>
            </div>

            {/* Actions */}
            <div className="jl-entreprise-card-footer">
                <button className="jl-entreprise-btn-detail">
                    Voir détails
                </button>
            </div>

        </div>
    );
}

export default Entreprise;