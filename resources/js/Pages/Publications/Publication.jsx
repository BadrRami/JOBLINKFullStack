
import React from 'react';

const Publication = ({ post }) => {

    if (!post) return null;

    return (
        <div className="card p-3 mb-3 shadow-sm">

            <h5 className="mb-2">{post.titre}</h5>

            <img
                src={post.media 
                    ? `/storage/publications/${post.media}` 
                    : '/images.png'}
                alt="publication"
                className="img-fluid rounded"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
            />

        </div>
    );
};

export default Publication;
