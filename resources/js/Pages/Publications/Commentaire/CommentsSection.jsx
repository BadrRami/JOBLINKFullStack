import CommentForm from './CommentForm';
import CommentList from './CommentList';
import '../../../../css/publications/publications.css'
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