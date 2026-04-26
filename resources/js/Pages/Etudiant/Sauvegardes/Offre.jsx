import React from 'react';
import { router } from '@inertiajs/react';
const Offre = ({sauvegarde, handleDelete}) => {
    return (
        <div className="col" key={sauvegarde.id}>
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body d-flex flex-column">

                                        <h5 className="card-title">
                                            {sauvegarde.offre?.titre}
                                        </h5>

                                        <p className="card-text text-truncate" style={{ maxHeight: '3rem' }}>
                                            {sauvegarde.offre?.description}
                                        </p>

                                        <p className="mb-1">
                                            <strong>Type :</strong> {sauvegarde.offre?.type}
                                        </p>

                                        <p className="mb-3">
                                            <strong>Salaire :</strong> {sauvegarde.offre?.salaire} DH
                                        </p>

                                        <div className="mt-auto d-flex gap-2 flex-wrap">

                                            <button className="btn btn-success btn-sm">
                                                Voir Détails
                                            </button>

                                            <button className="btn btn-primary btn-sm">
                                                Postuler
                                            </button>

                                            <button
                                                onClick={() => handleDelete(sauvegarde.id)}
                                                className="btn btn-danger btn-sm"
                                            >
                                                Supprimer
                                            </button>

                                        </div>

                                    </div>
                                </div>
                            </div>
    );
}

export default Offre;
