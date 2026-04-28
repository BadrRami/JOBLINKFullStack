import React from 'react';
import Post from './post';
import Menu from '../Menu';
import '../../../css/posts/Liste.css';

const Liste = ({ postes }) => {
    return (
        <div id="jl-liste-page">
            <Menu />
            <div id="jl-liste-feed">
                {postes.length > 0 ? (
                    postes.map((post) => (
                        <Post key={post.id} post={post} />
                    ))
                ) : (
                    <p id="jl-liste-empty">Aucun poste trouvé.</p>
                )}
            </div>
        </div>
    );
}

export default Liste;