import React from 'react';
import Menu from '../../Menu';
import '../../../../css/candidatures/candidatures-recruteur.css';
import Candidature from './Candidature';

const Liste = ({ candidatures }) => {
    
    return (
        <div id="jl-cand-rec-page">
            <Menu />
            <div id="jl-cand-rec-feed">

                <h1 id="jl-cand-rec-heading">Candidatures reçues</h1>
                {candidatures.length > 0 && (
                    <p id="jl-cand-rec-count">
                        {candidatures.length} candidature{candidatures.length > 1 ? 's' : ''}
                    </p>
                )}

                {candidatures.length > 0 ? (
                    candidatures.map((candidature) => (
                        <Candidature key={candidature.id} candidature={candidature} />
                    ))
                ) : (
                    <p id="jl-cand-rec-empty">Aucune candidature</p>
                )}

            </div>
        </div>
    );
}

export default Liste;