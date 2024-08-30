import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;

const ContentText = styled.p`
    font-size: 16px;
    white-space: pre-wrap;
`;

const Button = styled.button`
    margin-top: 8px;
    padding: 4px 8px;
    font-size: 14px;
    cursor: pointer;
`;

function CommentListItem(props) {
    const { comment, onEdit, onDelete } = props;

    const handleEdit = () => {
        if (onEdit) {
            onEdit(comment.id); // 댓글 수정 함수 호출
        }
    };

    const handleDelete = () => {
        if (onDelete) {
            onDelete(comment.id); // 댓글 삭제 함수 호출
        }
    };

    return (
        <Wrapper>
            <ContentText>{comment.content}</ContentText>
            <Button onClick={handleEdit}>수정</Button>
            <Button onClick={handleDelete}>삭제</Button>
        </Wrapper>
    );
}

export default CommentListItem;

