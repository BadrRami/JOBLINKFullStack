import React from 'react';
import Menu from '../Menu';
import Offre from './Offre';
import { usePage } from '@inertiajs/react';
import '../../../css/Offres/offres.css';
import Filter from './Filter';

const Liste = ({ offres, villes, domaines }) => {
    const { flash } = usePage().props;

    return (
        <div id="jl-offres-page">
            <Menu />

            <div id="jl-offres-feed">

                <Filter villes={villes} domaines={domaines} />

                <h1 id="jl-offres-heading">Liste des Offres</h1>

                {flash.success && (
                    <div id="jl-offres-flash">
                        {flash.success}
                    </div>
                )}

                {offres.data.map((offre) => (
                    <Offre key={offre.id} offre={offre} />
                ))}

            </div>
            {offres.links?.map((link, index) => (
            <button
                    key={index}
                    disabled={!link.url}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    onClick={() => Inertia.visit(link.url)}
                    className={`jl-pagination-btn ${link.active ? 'active' : ''}`}
                />
            ))}
        </div>
    );
};
export default Liste;