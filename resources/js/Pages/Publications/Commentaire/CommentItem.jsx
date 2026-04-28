const CommentItem = ({ comment }) => {
    const initials = comment.user?.name
        ? comment.user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
        : '?';

    return (
        <div className="jl-comment-item">
            <div className="jl-comment-avatar">{initials}</div>
            <div className="jl-comment-bubble">
                <p className="jl-comment-author">{comment.user.name}</p>
                <p className="jl-comment-content">{comment.content}</p>
            </div>
        </div>
    );
};

export default CommentItem;