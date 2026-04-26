import CommentItem from './CommentItem';

const CommentList = ({ comments = [] }) => {
    return (
        <div>
            {comments.map(comment => (
                <CommentItem comment={comment}/>
            ))}
        </div>
    );
};

export default CommentList;