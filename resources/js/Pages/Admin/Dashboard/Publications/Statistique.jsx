import React from 'react';
import LeftBar from '../LeftBar';
import '../../../../../css/Admin/Dashboard/Users/StatsPage.css';
import PostsPerDayChart from './part1/PostsPerDayChart';
const Statistique = (props) => {
    const { publications, publicationsPerDay } = props;
    return (
         <div id="jl-stats-page">
            <LeftBar />
            <main id="jl-stats-content">
                <PostsPerDayChart data={publicationsPerDay} />
            </main>
        </div>
    );
}

export default Statistique;
