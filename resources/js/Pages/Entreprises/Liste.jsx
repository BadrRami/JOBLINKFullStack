import React from 'react';
import Entreprise from './Entreprise';
import Menu from '../Menu';
import '../../../css/entreprises/entreprises.css';
import Filter from './Filter';

const Liste = ({ entreprises, domaines, villes }) => {
    return (
        <div id="jl-entreprises-page">
            <Menu />
            <div id="jl-entreprises-container">
                <Filter domaines={domaines} villes={villes} />

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
            {entreprises.links?.map((link, index) => (
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
}

export default Liste;