import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import CommentsSection from './Commentaire/CommentsSection';
const Publication = ({ post }) => {
    const [afficher , setafficher] = useState(false)
    const handleLike = (postId) => {
        router.post('/likes', {
            post_id: postId
        });
    };
    const affichageComments = ()=>{
        setafficher(true)
    }
    const handleMessage = (userId) => {
        router.post('/conversation', {
    user_id: userId
});
    };

    if (!post) return null;

    return (
        <div className="card mb-4 shadow-sm border-0">

    {/* HEADER */}
    <div className="card-body d-flex align-items-center">
        <img
            src={
                post.user?.photo
                    ? `/storage/photos/${post.user.photo}`
                    : '/images.png'
            }
            alt="avatar"
            className="rounded-circle me-2"
            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
        />
        <div>
            <h6 className="mb-0 fw-bold">
                {post.user
                    ? `${post.user.name} ${post.user.prenom}`
                    : 'Utilisateur inconnu'}
            </h6>
            <small className="text-muted">
                {new Date(post.created_at).toLocaleString()}
            </small>
            <button className='btn' onClick={() => handleMessage(post.user_id)}>
                <i className="bi bi-wechat"></i>
            </button>
        </div>
    </div>

    {/* CONTENU */}
    <div className="px-3 pb-2">
        <p className="mb-2">{post.titre}</p>
    </div>

    {/* IMAGE */}
    <img
        src={
            post.media && post.media !== "null"
                ? `/storage/media/${post.media}`
                : '/images.png'
        }
        alt="publication"
        className="img-fluid"
        style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
    />

    {/* STATS */}
    <div className="px-3 py-2 d-flex justify-content-between text-muted small">
        <span><i className="bi bi-hand-thumbs-up"></i> {post.likes?.length}</span>
        <span><i className="bi bi-share-fill"></i> {post.NBComments} commentaires</span>
    </div>

    <hr className="my-0" />

    {/* ACTIONS */}
    <div className="d-flex justify-content-around py-2">
        <button className="btn btn-light w-100" onClick={()=> handleLike(post.id)}>
            <i className="bi bi-hand-thumbs-up"></i> J'aime
        </button>
        <button className="btn btn-light w-100" onClick={affichageComments}>
            <i className="bi bi-chat-left-dots"></i> Commenter
        </button>
        <button className="btn btn-light w-100" >
            <i className="bi bi-share-fill"></i> Partager
        </button>
    </div>

    {afficher && 
    <CommentsSection post={post} />
}


    

</div>
    );
};

export default Publication;
