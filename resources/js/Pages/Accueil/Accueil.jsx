import React from 'react';
import Menu from '../Menu';
import Profile from './Profile';
import PostCard from './PostCard';
import OffreCard from './OffreCard';
import '../../../css/accueil/accueil.css';

const Accueil = ({ feed, user }) => {
    return (
        <div id="jl-accueil-page">
            <Menu />
            <div id="jl-accueil-layout">

                {/* Sidebar profil */}
                <div id="jl-accueil-sidebar">
                    <Profile user={user} />
                </div>

                {/* Feed central */}
                <div id="jl-accueil-feed">
                    {feed.map((item, index) => {
                        if (item.type === 'post') {
                            return <PostCard key={index} post={item} />;
                        }
                        if (item.type === 'offre') {
                            return <OffreCard key={index} offre={item} />;
                        }
                    })}
                </div>

            </div>
        </div>
    );
}

export default Accueil;