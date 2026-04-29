import React from 'react';
import Menu from '../Menu';
import Profile from './Profile';
import PostCard from './PostCard';
import OffreCard from './OffreCard';
import '../../../css/Accueil/Accueil.css';

const Accueil = ({ feed, user }) => {
    return (
        <div id="jl-accueil">
            <Menu />
            <div id="jl-accueil-body">
                <aside id="jl-accueil-sidebar">
                    <Profile user={user} />
                </aside>
                <main id="jl-accueil-feed">
                    {feed.map((item, index) => {
                        if (item.type === 'post')  return <PostCard  key={index} post={item} />;
                        if (item.type === 'offre') return <OffreCard key={index} offre={item} />;
                    })}
                </main>
            </div>
        </div>
    );
};

export default Accueil;