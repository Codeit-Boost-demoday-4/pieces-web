import React from "react";
import "./styles.css";

const DeleteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <h2>추억 삭제</h2>
          <p>삭제 권한 인증</p>
          <input type="text" placeholder="비밀번호를 입력하세요" />
          <button className="confirm">삭제하기</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
