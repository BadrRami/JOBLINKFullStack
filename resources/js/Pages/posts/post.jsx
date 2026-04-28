import React from 'react';
import '../../../css/posts/post.css';

const Post = ({ post }) => {
    return (
        <div className="jl-post-card">
            {/* HEADER */}
            <div className="jl-post-header">
                <img
                    src={
                        post.user?.photo
                            ? `/storage/photos/${post.photo}`
                            : '/images.png'
                    }
                    alt="avatar"
                    className="jl-post-avatar"
                />
                <div>
                    <p className="jl-post-author-name">
                        {post.user
                            ? `${post.user.nom} ${post.user.prenom}`
                            : 'Utilisateur inconnu'}
                    </p>
                    <p className="jl-post-date">
                        {new Date(post.created_at).toLocaleString()}
                    </p>
                    <div>
                        <i className="bi bi-three-dots"></i>
                        <div>
                            <button><i className="bi bi-trash3"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* CONTENU */}
            <div className="jl-post-body">
                <p className="jl-post-titre">{post.titre}</p>
            </div>
            {/* IMAGE */}
            <img
                src={
                    post.media && post.media !== "null"
                        ? `/storage/media/${post.media}`
                        : '/images.png'
                }
                alt="publication"
                className="jl-post-media"
            />
            {/* STATS */}
            <div className="jl-post-stats">
                <span className="jl-post-stat"><i className="bi bi-hand-thumbs-up-fill"></i> {post.NBLikes}</span>
                <span className="jl-post-stat"><i className="bi bi-chat-right-dots"></i> {post.NBComments} commentaires</span>
            </div>
            <hr className="jl-post-divider" />
            {/* ACTIONS */}
            <div className="jl-post-actions">
                <button className="jl-post-action-btn">
                    <i className="bi bi-hand-thumbs-up-fill"></i> J'aime
                </button>
                <button className="jl-post-action-btn">
                    <i className="bi bi-chat-right-dots"></i> Commenter
                </button>
                <button className="jl-post-action-btn">
                    <i className="bi bi-share"></i> Partager
                </button>
            </div>
        </div>
    );
}

export default Post;