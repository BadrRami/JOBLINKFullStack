import React from 'react';
import Menu from '../../Menu';
import Entreprise from './Entreprise';
import { usePage } from '@inertiajs/react';
const Liste = ({entreprises,domaines}) => {
    const { flash } = usePage().props;
    return (
        <div>
            <Menu />
            <div className='container'>
                {flash.success && (
                <div className="alert alert-success">
                    {flash.success}
                </div>
            )}
                <h1>Liste des entreprises</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Adresse</th>
                            <th>Numéro de téléphone</th>
                            <th>Domaine</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entreprises.map((entreprise) => (
                            <Entreprise  entreprise={entreprise} domaines={domaines} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Liste;
