import React from 'react';
import '../../../css/Accueil/Cards.css';

const PostCard = ({ post }) => {
    return (
        <div className="jl-card">
            <div className="jl-card-header">
                <div className="jl-card-avatar">
                    {post?.user?.name?.charAt(0).toUpperCase() ?? 'U'}
                </div>
                <div>
                    <p className="jl-card-author">{post?.user?.name} {post?.user?.prenom}</p>
                    <p className="jl-card-date">{post?.created_at}</p>
                </div>
            </div>
            <p className="jl-card-body">{post?.titre}</p>
        </div>
    );
};

export default PostCard;