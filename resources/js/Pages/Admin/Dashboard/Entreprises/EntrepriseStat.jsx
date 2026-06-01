import React from 'react';
import LeftBar from '../LeftBar';
import Liste from './part2/Liste';
import EntreprisesPerDay from './part1/EntreprisesPerDay';
import EntrepriseByDomaine from './part1/EntrepriseByDomaine';
import '../../../../../css/Admin/Dashboard/entreprises/entreprise-stat.css';

const EntrepriseStat = ({ entreprises, entreprisesPerDay, entrepriseByDomain }) => {
    return (
        <div id="jl-ent-stat-page">
            <LeftBar />
            <main id="jl-ent-stat-content">

                <div id="jl-ent-stat-header">
                    <h1 id="jl-ent-stat-title">Statistiques Entreprises</h1>
                    <p id="jl-ent-stat-subtitle">{entreprises?.length ?? 0} entreprise{entreprises?.length !== 1 ? 's' : ''} enregistrée{entreprises?.length !== 1 ? 's' : ''}</p>
                </div>

                {/* Charts */}
                <div id="jl-ent-stat-charts">
                    <EntreprisesPerDay data={entreprisesPerDay} />
                    <EntrepriseByDomaine data={entrepriseByDomain} />
                </div>

                {/* Table */}
                <Liste data={entreprises} />

            </main>
        </div>
    );
}

export default EntrepriseStat;