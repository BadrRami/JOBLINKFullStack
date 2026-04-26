import React from 'react';
import Menu from '../Menu';
import Offre from './Offre';

const Liste = ({offres}) => {
    return (
        <div>
            <Menu />
                <h1>Liste des Offres</h1>
                <div className="d-flex flex-column gap-3">
                    {offres.map((offre) => (
                        <Offre key={offre.id} offre={offre} />
                    ))}
                </div>


                    
        </div>
    );
}

export default Liste;
