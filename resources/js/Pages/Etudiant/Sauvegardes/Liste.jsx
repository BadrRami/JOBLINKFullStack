import React from 'react';
import Menu from '../../Menu';
import { router } from '@inertiajs/react';
import Offre from './Offre';

const Liste = ({ sauvegardes, flash }) => {

    const handleDelete = (id) => {
        if (confirm("Voulez-vous supprimer cette offre ?")) {
            router.delete(`/sauvegardes/${id}`);
        }
    };

    return (
        <div>
            <Menu />

            <div className="container mt-4">

                {/* Message succès */}
                {flash?.success && (
                    <div className="alert alert-success">
                        {flash.success}
                    </div>
                )}

                {/* Liste vide */}
                {sauvegardes.length === 0 ? (
                    <p className="text-center mt-5">
                        Vous n'avez aucune offre sauvegardée.
                    </p>
                ) : (
                    <div className="row row-cols-1 row-cols-md-3 g-4">

                        {sauvegardes.map((sauvegarde) => (
                            <Offre sauvegarde={sauvegarde} handleDelete={handleDelete}/>
                        ))}

                    </div>
                )}

            </div>
        </div>
    );
};

export default Liste;