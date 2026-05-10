import React from 'react';
import LeftBar from '../LeftBar';
import '../../../../../css/Admin/Dashboard/Users/StatsPage.css';
import PostsPerDayChart from './part1/PostsPerDayChart';
import MostLikedPublications from './part1/mostLikedPublications';
import Liste from './part2/Liste';
const Statistique = (props) => {
    const { publications, publicationsPerDay, mostLikedPublications } = props;
    return (
         <div id="jl-stats-page">
            <LeftBar />
            <main id="jl-stats-content">
                <PostsPerDayChart data={publicationsPerDay} />
                <MostLikedPublications data={mostLikedPublications} />
                <Liste data={publications}/>
            </main>
        </div>
    );
}

export default Statistique;
