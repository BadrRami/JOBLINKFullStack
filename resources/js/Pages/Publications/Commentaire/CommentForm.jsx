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
        <form onSubmit={handleSubmit} className="mb-2">
            <input
                type="text"
                className="form-control"
                placeholder="Écrire un commentaire..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
        </form>
    );
};

export default CommentForm;