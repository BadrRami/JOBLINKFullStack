import React from 'react';
import Publication from './Publication';
import Menu from './Menu';

const Publications = ({ posts }) => {
    return (
        <>
        <Menu></Menu>
        <div>
            {posts.map((post) => (
                <Publication key={post.id} post={post} />
            ))}
        </div>
        </>
    );
}

export default Publications;
