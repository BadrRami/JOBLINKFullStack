import React from 'react';
import Menu from '../../Menu';
import { router } from '@inertiajs/react';
import Offre from './Offre';
import '../../../../css/sauvegardes.css';

const Liste = ({ sauvegardes, flash }) => {

    const handleDelete = (id) => {
        if (confirm("Voulez-vous supprimer cette offre ?")) {
            router.delete(`/sauvegardes/${id}`);
        }
    };

    return (
        <div id="jl-sauv-page">
            <Menu />

            <div id="jl-sauv-container">

                <h1 id="jl-sauv-heading">Mes Sauvegardes</h1>

                {flash?.success && (
                    <div className="jl-flash jl-flash-success">{flash.success}</div>
                )}

                {sauvegardes.length === 0 ? (
                    <p id="jl-sauv-empty">Vous n'avez aucune offre sauvegardée.</p>
                ) : (
                    <div id="jl-sauv-grid">
                        {sauvegardes.map((sauvegarde) => (
                            <Offre
                                key={sauvegarde.id}
                                sauvegarde={sauvegarde}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Liste;