import React from "react";
import "./styles.css"; // 스타일을 위한 CSS 파일

const EditModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>추억 수정</h2>
        <form className="form-container">
          <div className="left-column">
            <label>닉네임</label>
            <input type="text" placeholder="닉네임을 입력해주세요" />

            <label>제목</label>
            <input type="text" placeholder="제목을 입력해주세요" />

            <label>이미지</label>
            <button type="button">파일 선택</button>

            <label>본문</label>
            <input type="text" placeholder="본문 내용을 입력해주세요" />
          </div>

          <div className="right-column">
            <label>태그</label>
            <input type="text" placeholder="태그를 입력 후 Enter" />

            <label>장소</label>
            <input type="text" placeholder="장소를 입력해주세요" />

            <label>추억의 순간</label>
            <textarea placeholder="추억의 순간을 입력해주세요"></textarea>

            <div className="toggle">
              <label>추억 공개 선택</label>
              <input type="checkbox" />
            </div>

            <label>수정 권한 인증</label>
            <textarea placeholder="비밀번호를 입력해주세요"></textarea>
          </div>
        </form>
        <button type="submit" className="submit-button">
          수정하기
        </button>
        <button className="close-button" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default EditModal;
