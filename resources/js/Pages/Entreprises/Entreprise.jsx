import React from 'react';

const Entreprise = ({ entreprise }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card shadow border-0 h-100">

                {/* Logo */}
                <div className="text-center mt-3">
                    <img
                        src={
                            entreprise.logo
                                ? `/storage/logo/${entreprise.logo}`
                                : '/images.png'
                        }
                        className="rounded-circle border"
                        width="80"
                        height="80"
                        alt="logo"
                    />
                </div>

                {/* Infos */}
                <div className="card-body text-center">

                    <h5 className="card-title fw-bold">
                        {entreprise.nom}
                    </h5>

                    <p className="text-muted small">
                        {entreprise.description || 'Pas de description'}
                    </p>

                    <hr />

                    <p className="mb-1">
                        📞 {entreprise.tel || 'Non défini'}
                    </p>

                    <p className="mb-1">
                        📍 {entreprise.adresse || 'Non défini'}
                    </p>

                    <p className="mb-1">
                        🌐 {
                            entreprise.site_web ? (
                                <a href={entreprise.site_web} target="_blank" rel="noreferrer">
                                    Visiter
                                </a>
                            ) : 'Non défini'
                        }
                    </p>

                </div>

                {/* Actions */}
                <div className="card-footer bg-white text-center border-0">
                    <button className="btn btn-outline-primary btn-sm">
                        Voir détails
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Entreprise;