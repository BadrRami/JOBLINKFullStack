import React from 'react';
import Publication from './Publication';
import Menu from '../Menu';
import '../../../css/publications/publications.css';

const Publications = ({ posts }) => {
    return (
        <div id="jl-publications-page">
            <Menu />
            <div id="jl-publications-feed">
                {posts.map((post) => (
                    <Publication key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Publications;