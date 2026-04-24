import React from 'react';
import Post from './post';
import Menu from '../Menu';

const Liste = ({ postes }) => {
    return (
        <>
        <Menu />
        <div>
            {postes.length > 0 ? (
                postes.map((post) => (
                    <div key={post.id} className="card mb-3">
                        <Post post={post} />
                    </div>
                ))  
            ) : (
                <p className="text-center">Aucun poste trouvé.</p>
            )}
        </div>
        </>
    );
}

export default Liste;
