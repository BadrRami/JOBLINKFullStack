import React from 'react';
import Menu from '../Menu';
import Offre from './Offre';
import { usePage } from '@inertiajs/react';
import '../../../css/Offres/offres.css';

const Liste = ({ offres }) => {
    const { flash } = usePage().props;

    return (
        <div id="jl-offres-page">
            <Menu />
            <div id="jl-offres-feed">

                <h1 id="jl-offres-heading">Liste des Offres</h1>

                {flash.success && (
                    <div id="jl-offres-flash">
                        {flash.success}
                    </div>
                )}

                {offres.map((offre) => (
                    <Offre key={offre.id} offre={offre} />
                ))}

            </div>
        </div>
    );
}

export default Liste;
