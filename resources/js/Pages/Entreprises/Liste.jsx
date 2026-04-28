import React from 'react';
import Entreprise from './Entreprise';
import Menu from '../Menu';
import '../../../css/entreprises/entreprises.css';

const Liste = ({ entreprises }) => {
    return (
        <div id="jl-entreprises-page">
            <Menu />
            <div id="jl-entreprises-container">
                <h1 id="jl-entreprises-heading">Entreprises</h1>
                <div id="jl-entreprises-grid">
                    {entreprises.length > 0 ? (
                        entreprises.map((entreprise) => (
                            <Entreprise key={entreprise.id} entreprise={entreprise} />
                        ))
                    ) : (
                        <p id="jl-entreprises-empty">Aucune entreprise trouvée</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Liste;