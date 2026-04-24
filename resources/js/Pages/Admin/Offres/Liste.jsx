import React from 'react';
import Menu from '../../Menu';
import Offre from './Offre';
import { usePage } from '@inertiajs/react';
const Liste = ({ offres }) => {
    const { flash } = usePage().props;
    return (
        <div>
            <Menu />
            
            <a href={route('dashboard')} className="btn btn-primary">
                Retour au Dashboard
            </a>
            <h1>Liste des offres</h1>
            {flash.success && (
                <div className="alert alert-success">
                    {flash.success}
                </div>
            )} 
            

            {offres.length === 0 ? (
                <p>Aucune offre disponible.</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Titre</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Etat</th>
                            <th>Localisation</th>
                            <th>Domaine</th>
                            <th>Ville</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {offres.map((offre, index) => (
                            <Offre  key={offre.id} offre={offre} index={index + 1} />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Liste;