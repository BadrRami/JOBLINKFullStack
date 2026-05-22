import React from 'react';
import Offre from './Offre';

const Liste = ({ data = [] }) => {
    return (
        <div>
            <h2 id="jl-offre-table-heading">Offres publiées</h2>

            <div id="jl-offre-table-card">
                {data.length === 0 ? (
                    <div id="jl-offre-table-empty">
                        <i className="bi bi-briefcase"></i>
                        Aucune offre publiée pour le moment.
                    </div>
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table id="jl-offre-table">
                            <thead>
                                <tr>
                                    <th>Titre</th>
                                    <th>Type</th>
                                    <th>Date</th>
                                    <th>Candidatures</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((offre) => (
                                    <Offre key={offre.id} offre={offre} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Liste;