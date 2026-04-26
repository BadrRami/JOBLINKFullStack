import React from 'react';
import { router } from '@inertiajs/react';

const Offre = ({ offre }) => {

    const handleSauvegarde = () => {
        router.post('/sauvegardes', {
            offre_id: offre.id
        });
    };

    return (
        <div className="card p-3 mb-3">

            <h3>{offre.titre}</h3>
            <p>{offre.description}</p>
            <p>Lieu: {offre.localisation}</p>
            <p>Type de contrat: {offre.type}</p>

            <div className="d-flex gap-2">

                <button className="btn btn-info">
                    <i className="bi bi-share-fill"></i>
                </button>

                <button 
                    className="btn btn-secondary" 
                    onClick={handleSauvegarde}
                >
                    <i className="bi bi-bookmark-fill"></i>
                </button>

                <button className="btn btn-primary">
                    <i className="bi bi-eye-fill"></i>
                </button>

                <button className="btn btn-success">
                    Postuler
                </button>

            </div>

        </div>
    );
}

export default Offre;