import CommentForm from './CommentForm';
import CommentList from './CommentList';

const CommentsSection = ({ post }) => {
    if (!post) return null;
    return (
        <div className="jl-comments-section">
            <CommentForm postId={post.id} />
            <CommentList comments={post.comments ?? []} />
        </div>
    );
};

export default CommentsSection;