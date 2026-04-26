import React from 'react';
import Entreprise from './Entreprise';
import Menu from '../Menu';

const Liste = ({ entreprises }) => {
    return (
        <div>
            <Menu />

            <div className="container mt-4">

                {entreprises.length > 0 ? (
                    <div className="row">
                        {entreprises.map((entreprise) => (
                            <Entreprise key={entreprise.id} entreprise={entreprise} />
                        ))}
                    </div>
                ) : (
                    <p>Aucune entreprise trouvée</p>
                )}

            </div>
        </div>
    );
}

export default Liste;