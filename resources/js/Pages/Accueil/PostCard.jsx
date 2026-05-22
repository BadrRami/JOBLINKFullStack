import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import CommentsSection from '../Publications/Commentaire/CommentsSection';
const PostCard = ({ post }) => {
    const [afficher, setafficher] = useState(false);
    const handleLike = (postId) => {
            router.post('/likes', {
                post_id: postId
            });
        };
    const affichageComments = () => {
        
        setafficher(true);
        
        
    };
    return (
        <div className="jl-post-card">

            {/* HEADER */}
            <div className="jl-post-header">
                <img
                    src={
                        post.user?.photo
                            ? `/storage/photos/${post.user.photo}`
                            : '/images.png'
                    }
                    alt="avatar"
                    className="jl-post-avatar"
                />
                <div>
                    <p className="jl-post-author">
                        {post.user
                            ? `${post.user.name} ${post.user.prenom}`
                            : 'Utilisateur inconnu'}
                    </p>
                    <p className="jl-post-date">
                        {new Date(post.created_at).toLocaleString()}
                    </p>
                </div>
            </div>

            {/* CONTENU */}
            <div className="jl-post-body">
                <p className="jl-post-titre">{post.titre}</p>
            </div>

            {/* IMAGE */}
            {post.media && post.media !== "null" && (
                <img
                    src={`/storage/media/${post.media}`}
                    alt="publication"
                    className="jl-post-media"
                />
            )}

            {/* STATS */}
            <div className="jl-post-stats">
                <span className="jl-post-stat">
                    <i className="bi bi-hand-thumbs-up-fill"></i> {post.likes?.length ?? 0}
                </span>
                <span className="jl-post-stat">
                    <i className="bi bi-chat-right-dots"></i> {post.comments?.length ?? 0} commentaires
                </span>
            </div>

            <hr className="jl-post-divider" />

            {/* ACTIONS */}
            <div className="jl-post-actions">
                <button className="jl-post-action-btn" onClick={() => handleLike(post.id)}>
                    <i className="bi bi-hand-thumbs-up"></i> J'aime
                </button>
                <button className="jl-post-action-btn">
                    <i className="bi bi-chat-left-dots" onClick={affichageComments}></i> Commenter
                </button>
                <button className="jl-post-action-btn">
                    <i className="bi bi-share-fill"></i> Partager
                </button>
            </div>

            {afficher && <CommentsSection post={post} />}

        </div>
    );
}

export default PostCard;