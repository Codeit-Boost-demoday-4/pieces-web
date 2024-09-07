import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../api.js"; // axios 인스턴스
import "./styles.css";
import closeButton from "../../../assets/close-button.svg";

const DeleteGroupModal = ({ handleCloseModal }) => {
  const { postId } = useParams();
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");

  const handleDeleteGroup = async () => {
    setIsLoading(true);
    try {
      const response = await api.delete(
        `/api/posts/${postId}`,
        {
          data: { password },
        }
      );

      // 서버에서 성공적인 응답을 받은 경우
      if (response.status === 200 || response.status === 201) {
        alert("추억이 성공적으로 삭제되었습니다!");
        nav(`/group`);
        handleCloseModal();
      } else {
        throw new Error(response.data.message || "Failed");
      }
    } catch (error) {
      console.error(error);
      alert("삭제에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div
        className="delete-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="delete-modal-title">추억 삭제</h2>
        <button className="close-btn" onClick={handleCloseModal}>
          <img src={closeButton} alt="닫기" width={30} height={30} />
        </button>
        <div className="container">
          <label className="delete-modal-label">삭제 권한 인증</label>
          <input
            type="password"
            className="delete-modal-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해 주세요"
          />
        </div>
        <button className="delete-submit-button" onClick={handleDeleteGroup}>
          {isLoading ? "삭제 중" : "삭제하기"}
        </button>
      </div>
    </div>
  );
};

export default DeleteGroupModal;

