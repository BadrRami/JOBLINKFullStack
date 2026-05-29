import React from 'react';

const Publication = ({ publication, onDelete }) => {
    console.log(publication);
    return (
        <tr>
            {/* Média */}
            <td>
                {publication.media && publication.media !== 'null' ? (
                    <img
                        src={`/storage/media/${publication.media}`}
                        alt="média"
                        className="jl-pub-thumb"
                    />
                ) : (
                    <div className="jl-pub-thumb-placeholder">
                        <i className="bi bi-image"></i>
                    </div>
                )}
            </td>

            {/* Date */}
            <td>
                <span className="jl-pub-date">
                    {new Date(publication.created_at).toLocaleDateString('fr-FR', {
                        day: '2-digit', month: 'short', year: 'numeric'
                    })}
                </span>
            </td>

            {/* Stats */}
            <td>
                <div className="jl-pub-stats-cell">
                    <span className="jl-pub-stat-item">
                        <i className="bi bi-hand-thumbs-up-fill"></i>
                        {publication.likes_count}
                    </span>

                    <span className="jl-pub-stat-item">
                        <i className="bi bi-chat-right-dots"></i>
                        {publication.comments_count}
                    </span>
                </div>
            </td>

            {/* Actions */}
            <td>
                <div className="jl-pub-actions-cell">
                    <button className="jl-pub-btn jl-pub-btn-view">
                        <i className="bi bi-eye-fill"></i>
                    </button>
                    <button
                        className="jl-pub-btn jl-pub-btn-delete"
                        onClick={() => onDelete(publication.id)}
                    >
                        <i className="bi bi-trash-fill"></i>
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default Publication;