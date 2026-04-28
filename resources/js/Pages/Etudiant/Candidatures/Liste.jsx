import React from 'react';
import Candidature from './Candidature';
import Menu from '../../Menu';
import '../../../../css/candidatures/candidatures.css';

const Liste = ({ candidatures }) => {
    return (
        <div id="jl-candidatures-page">
            <Menu />
            <div id="jl-candidatures-feed">

                <h1 id="jl-candidatures-heading">Mes candidatures</h1>
                {candidatures.length > 0 && (
                    <p id="jl-candidatures-count">{candidatures.length} candidature{candidatures.length > 1 ? 's' : ''}</p>
                )}

                {candidatures.length > 0 ? (
                    candidatures.map((candidature) => (
                        <Candidature
                            key={candidature.id}
                            candidature={candidature}
                        />
                    ))
                ) : (
                    <p id="jl-candidatures-empty">Aucune candidature</p>
                )}

            </div>
        </div>
    );
}

export default Liste;