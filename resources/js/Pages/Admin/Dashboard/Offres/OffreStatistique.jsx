import React from 'react';
import LeftBar from '../LeftBar';
import Liste from './part2/Liste';
import OffrePerDayChart from './part1/OffrePerDayChart';
import '../../../../../css/Admin/Dashboard/offres/offre-statistique.css';
import { usePage } from '@inertiajs/react';
const OffreStatistique = ({ data }) => {
    const { offres, OffresPerDay } = usePage().props;

    return (
        <div id="jl-stats-page">
            <LeftBar />
            <main id="jl-stats-content">
                <OffrePerDayChart data={OffresPerDay} />
                <Liste data={offres} />
            </main>
        </div>
    );
}

export default OffreStatistique;