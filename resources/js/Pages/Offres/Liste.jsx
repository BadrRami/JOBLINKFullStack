import React from 'react';
import Menu from '../Menu';
import Offre from './Offre';
import { usePage } from '@inertiajs/react';
const Liste = ({offres}) => {
    const { flash } = usePage().props;
    return (
        <div>
            <Menu />
                <h1>Liste des Offres</h1>
                {flash.success && (
                <div classNameName="alert alert-success">
                    {flash.success}
                </div>
            )}
                <div className="d-flex flex-column gap-3">
                    {offres.map((offre) => (
                        <Offre key={offre.id} offre={offre} />
                    ))}
                </div>


                    
        </div>
    );
}

export default Liste;
