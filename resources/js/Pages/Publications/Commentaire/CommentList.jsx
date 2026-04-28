import CommentItem from './CommentItem';

const CommentList = ({ comments = [] }) => {
    return (
        <div className="jl-comment-list">
            {comments.map(comment => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </div>
    );
};

export default CommentList;