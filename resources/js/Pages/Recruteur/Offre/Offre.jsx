import React from 'react';
import { router } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
const Offre = ({ offre }) => {
    const handleDelete = (id) => {
        if (confirm("Supprimer cette offre ?")) {
            router.delete(`/offres/${id}`);
        }
    };

    return (
        <div className="card p-3 mb-3">

            <h3>{offre.titre}</h3>
            <p>{offre.description}</p>
            <p>Lieu: {offre.localisation}</p>
            <p>Type de contrat: {offre.type}</p>

            <div className="d-flex gap-2">

                {/* EDIT */}
                <button 
                    className="btn btn-warning"
                    onClick={() => router.get(`/offres/${offre.id}/edit`)}
                >
                    <i className="bi bi-pencil-fill"></i>
                </button>

                {/* DELETE */}
                <button 
                    className="btn btn-danger"
                    onClick={() => handleDelete(offre.id)}
                >
                    <i className="bi bi-trash-fill"></i>
                </button>

                <button className="btn btn-success">
                    Voir les candidatures
                </button>

                <button className="btn btn-info">
                    <i className="bi bi-share-fill"></i>
                </button>

                <button className="btn btn-secondary">
                    <i className="bi bi-bookmark-fill"></i>
                </button>

            </div>
        </div>
    );
};

export default Offre;