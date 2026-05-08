import React from 'react';
import { router } from '@inertiajs/react';

const Offre = ({ offre }) => {

    const handleDelete = (id) => {
        if (confirm("Supprimer cette offre ?")) {
            router.delete(`/offres/${id}`);
        }
    };

    return (
        <div className="jl-offre-card">

            <div className="jl-offre-card-body">

                {/* Header : titre + badge type */}
                <div className="jl-offre-header">
                    <h3 className="jl-offre-titre">{offre.titre}</h3>
                    <span className="jl-offre-type">{offre.type}</span>
                </div>

                {/* Description */}
                <p className="jl-offre-description">{offre.description}</p>

                {/* Méta */}
                <div className="jl-offre-meta">
                    <span className="jl-offre-meta-item">
                        <i className="bi bi-geo-alt-fill"></i>
                        {offre.localisation}
                    </span>
                </div>

            </div>

            {/* Actions */}
            <div className="jl-offre-actions">

                {/* Modifier */}
                <button
                    className="jl-offre-btn jl-offre-btn-edit"
                    onClick={() => router.get(`/offres/${offre.id}/edit`)}
                >
                    <i className="bi bi-pencil-fill"></i>
                </button>

                {/* Supprimer */}
                <button
                    className="jl-offre-btn jl-offre-btn-delete"
                    onClick={() => handleDelete(offre.id)}
                >
                    <i className="bi bi-trash-fill"></i>
                </button>

                {/* Voir candidatures */}
                <button className="jl-offre-btn jl-offre-btn-candidatures">
                    Voir les candidatures
                </button>

                {/* Partager */}
                <button className="jl-offre-btn jl-offre-btn-share">
                    <i className="bi bi-share-fill"></i>
                </button>

                {/* Sauvegarder */}
                <button className="jl-offre-btn jl-offre-btn-save">
                    <i className="bi bi-bookmark-fill"></i>
                </button>

            </div>
        </div>
    );
};

export default Offre;