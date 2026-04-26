import React from 'react';

const Post = ({post}) => {
    return (
         <div className="card mb-4 shadow-sm border-0">

    {/* HEADER */}
    <div className="card-body d-flex align-items-center">
        <img
            src={
                post.user?.photo
                    ? `/storage/photos/${post.photo}`
                    : '/images.png'
            }
            alt="avatar"
            className="rounded-circle me-2"
            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
        />
        <div>
            <h6 className="mb-0 fw-bold">
                {post.user
                    ? `${post.user.nom} ${post.user.prenom}`
                    : 'Utilisateur inconnu'}
            </h6>
            <small className="text-muted">
                {new Date(post.created_at).toLocaleString()}
            </small>
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
        <span>👍 {post.NBLikes}</span>
        <span>💬 {post.NBComments} commentaires</span>
    </div>

    <hr className="my-0" />

    {/* ACTIONS */}
    <div className="d-flex justify-content-around py-2">
        <button className="btn btn-light w-100">
            👍 J'aime
        </button>
        <button className="btn btn-light w-100">
            💬 Commenter
        </button>
        <button className="btn btn-light w-100">
            ↗️ Partager
        </button>
    </div>

</div>
    );
}

export default Post;
