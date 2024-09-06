import "./styles.css"; // 스타일을 위한 CSS 파일
import React, { useState } from "react";
import closeButton from "../../../assets/close-button.svg";

const EditModal = ({ handleCloseModal }) => {
  const [nickname, setNickname] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [location, setLocation] = useState("");
  const [moment, setMoment] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [password, setPassword] = useState("");

  const handleTagInput = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  const handleSubmit = () => {
    // Submit logic here
    alert("수정 완료!");
    handleCloseModal();
  };

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">추억 수정</h2>
        <button className="close-btn" onClick={handleCloseModal}>
          <img src={closeButton} alt="닫기" width={30} height={30} />
        </button>
        <div className="input-group">
          <label>닉네임</label>
          <input
            type="text"
            value={nickname}
            placeholder="닉네임을 입력해 주세요"
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>제목</label>
          <input
            type="text"
            value={title}
            placeholder="제목을 입력해 주세요"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>이미지</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="input-group">
          <label>태그</label>
          <input
            type="text"
            placeholder="태그 입력 후 Enter"
            onKeyDown={handleTagInput}
          />
          <div className="tags-display">{tags.join(", ")}</div>
        </div>
        <div className="input-group">
          <label>장소</label>
          <input
            type="text"
            value={location}
            placeholder="장소를 입력해 주세요"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>추억의 순간</label>
          <input
            type="text"
            value={moment}
            placeholder="추억의 순간을 입력해 주세요"
            onChange={(e) => setMoment(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>추억 공개 선택</label>
          <input
            type="checkbox"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
          />
          공개
        </div>
        <div className="input-group">
          <label>수정 관련 인증</label>
          <input
            type="password"
            value={password}
            placeholder="비밀번호를 입력해 주세요"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          수정하기
        </button>
      </div>
    </div>
  );
};

export default EditModal;
