import React from 'react';
import Menu from '../../Menu';
import Offre from './Offre';
import { usePage } from '@inertiajs/react';
const Liste = ({ offres }) => {
    const { flash } = usePage().props;
    return (
        <div>
            <Menu />
            {flash.success && (
                <div className="alert alert-success">
                    {flash.success}
                </div>
            )}

            <div className="container mt-5">
                <h2>Liste de vos Offres</h2>
                {offres.length === 0 ? (
                    <p>Vous n'avez aucune offre pour le moment.</p>
                ) : (
                    offres.map((offre) => (
                        <Offre key={offre.id} offre={offre} />
                    ))
                )}
            </div>
        </div>
    );
}

export default Liste;
