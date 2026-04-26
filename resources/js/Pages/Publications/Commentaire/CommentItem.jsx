const CommentItem = ({ comment }) => {
    return (
        <div className="border rounded p-2 mb-1">
            <strong>{comment.user.name}</strong>
            <p className="mb-0">{comment.content}</p>
        </div>
    );
};

export default CommentItem;