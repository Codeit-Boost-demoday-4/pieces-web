import React from 'react';

const CommentSection = ({ comments, onStartEdit, onDeleteComment }) => {
    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id}>
                    <p>{comment.nickname}: {comment.text}</p>
                    <button onClick={() => onStartEdit(comment)}>수정</button>
                    <button onClick={() => onDeleteComment(comment.id)}>삭제</button>
                </div>
            ))}
        </div>
    );
};

export default CommentSection;

