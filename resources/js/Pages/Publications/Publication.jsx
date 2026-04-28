import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import CommentsSection from './Commentaire/CommentsSection';

const Publication = ({ post }) => {
    const [afficher, setafficher] = useState(false);

    const handleLike = (postId) => {
        router.post('/likes', {
            post_id: postId
        });
    };

    const affichageComments = () => {
        setafficher(true);
    };

    const handleMessage = (userId) => {
        router.post('/conversation', {
            user_id: userId
        });
    };

    if (!post) return null;

    return (
        <div className="jl-pub-card">

            {/* HEADER */}
            <div className="jl-pub-header">
                <img
                    src={
                        post.user?.photo
                            ? `/storage/photos/${post.user.photo}`
                            : '/images.png'
                    }
                    alt="avatar"
                    className="jl-pub-avatar"
                />
                <div className="jl-pub-header-info">
                    <p className="jl-pub-author">
                        {post.user
                            ? `${post.user.name} ${post.user.prenom}`
                            : 'Utilisateur inconnu'}
                    </p>
                    <p className="jl-pub-date">
                        {new Date(post.created_at).toLocaleString()}
                    </p>
                    <button
                        className="jl-pub-msg-btn"
                        onClick={() => handleMessage(post.user_id)}
                    >
                        <i className="bi bi-wechat"></i>
                    </button>
                </div>
            </div>

            {/* CONTENU */}
            <div className="jl-pub-body">
                <p className="jl-pub-titre">{post.titre}</p>
            </div>

            {/* IMAGE */}
            <img
                src={
                    post.media && post.media !== "null"
                        ? `/storage/media/${post.media}`
                        : '/images.png'
                }
                alt="publication"
                className="jl-pub-media"
            />

            {/* STATS */}
            <div className="jl-pub-stats">
                <span className="jl-pub-stat">
                    <i className="bi bi-hand-thumbs-up"></i> {post.likes?.length}
                </span>
                <span className="jl-pub-stat">
                    <i className="bi bi-share-fill"></i> {post.NBComments} commentaires
                </span>
            </div>

            <hr className="jl-pub-divider" />

            {/* ACTIONS */}
            <div className="jl-pub-actions">
                <button className="jl-pub-action-btn" onClick={() => handleLike(post.id)}>
                    <i className="bi bi-hand-thumbs-up"></i> J'aime
                </button>
                <button className="jl-pub-action-btn" onClick={affichageComments}>
                    <i className="bi bi-chat-left-dots"></i> Commenter
                </button>
                <button className="jl-pub-action-btn">
                    <i className="bi bi-share-fill"></i> Partager
                </button>
            </div>

            {afficher && <CommentsSection post={post} />}

        </div>
    );
};

export default Publication;