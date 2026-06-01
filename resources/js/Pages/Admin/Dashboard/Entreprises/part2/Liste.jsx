import React from 'react';
import Entreprise from './Entreprise';

const Liste = ({ data }) => {
    return (
        <div id="jl-ent-table-wrap">
            <h2 id="jl-ent-table-heading">Liste des entreprises</h2>
            <div id="jl-ent-table-card">
                {!data || data.length === 0 ? (
                    <div id="jl-ent-table-empty">
                        <i className="bi bi-buildings"></i>
                        Aucune entreprise trouvée
                    </div>
                ) : (
                    <table id="jl-ent-table">
                        <thead>
                            <tr>
                                <th>Entreprise</th>
                                <th>Domaine</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((entreprise) => (
                                <Entreprise
                                    key={entreprise.id}
                                    entreprise={entreprise}
                                />
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Liste;