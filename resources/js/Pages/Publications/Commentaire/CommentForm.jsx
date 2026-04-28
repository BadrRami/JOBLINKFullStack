import { useState } from 'react';
import { router } from '@inertiajs/react';

const CommentForm = ({ postId }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('/comments', {
            content,
            post_id: postId
        });
        setContent('');
    };

    return (
        <form className="jl-comment-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="jl-comment-input"
                placeholder="Écrire un commentaire..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit" className="jl-comment-submit">
                <i className="bi bi-send-fill"></i>
            </button>
        </form>
    );
};

export default CommentForm;