// src/pages/PostView/components/CommentModal.js
import React, { useState, useEffect } from 'react';
import './CommentModal.css';

const CommentModal = ({ isOpen, onClose, onSubmit, editComment }) => {
    const [comment, setComment] = useState(editComment ? editComment.text : '');
    const [nickname, setNickname] = useState(editComment ? editComment.nickname : '');
    const [password, setPassword] = useState(editComment ? editComment.password : '');

    useEffect(() => {
        if (editComment) {
            setComment(editComment.text);
            setNickname(editComment.nickname);
            setPassword(editComment.password);
        } else {
            setComment('');
            setNickname('');
            setPassword('');
        }
    }, [editComment]);

    const handleSubmit = () => {
        onSubmit({ nickname, text: comment, password });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>{editComment ? '댓글 수정하기' : '댓글 등록하기'}</h2>

                <label>닉네임</label>
                <input 
                    type="text" 
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)} 
                    placeholder="닉네임을 입력해주세요" 
                />
                
                <label>댓글</label>
                <textarea 
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)} 
                    placeholder="댓글을 입력하세요..."
                />

                <label>비밀번호 생성</label>
                <input 
                    type="text" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="댓글 비밀번호를 생성해 주세요" 
                />

                <div className="modal-actions">
                    <button onClick={handleSubmit}>{editComment ? '수정' : '등록'}</button>
                    <button onClick={onClose}>취소</button>
                </div>
            </div>
        </div>
    );
};

export default CommentModal;
