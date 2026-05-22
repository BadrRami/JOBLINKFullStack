import React from 'react';

const Offre = ({ sauvegarde, handleDelete }) => {
    return (
        <div className="jl-sauv-card">

            {/* Header sombre : titre + badge type */}
            <div className="jl-sauv-card-top">
                <p className="jl-sauv-titre">{sauvegarde.offre?.titre}</p>
                <span className="jl-sauv-type">{sauvegarde.offre?.type}</span>
            </div>

            {/* Corps : description + salaire */}
            <div className="jl-sauv-card-body">
                <p className="jl-sauv-description">
                    {sauvegarde.offre?.description}
                </p>
                <p className="jl-sauv-salaire">
                    <i className="bi bi-cash-coin"></i>
                    {sauvegarde.offre?.salaire} DH
                </p>
            </div>

            {/* Footer : actions */}
            <div className="jl-sauv-card-footer">
                <button className="jl-sauv-btn jl-sauv-btn-view">
                    <i className="bi bi-eye-fill"></i>
                    Voir Détails
                </button>
                <button className="jl-sauv-btn jl-sauv-btn-postuler">
                    Postuler
                </button>
                <button
                    className="jl-sauv-btn jl-sauv-btn-delete"
                    onClick={() => handleDelete(sauvegarde.id)}
                >
                    <i className="bi bi-trash-fill"></i>
                </button>
            </div>

        </div>
    );
}

export default Offre;