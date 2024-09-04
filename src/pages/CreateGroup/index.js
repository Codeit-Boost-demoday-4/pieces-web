import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import axios from "axios";
import closeButton from "../../../assets/close-button.svg";

const CreateGroup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [introduction, setIntroduction] = useState("");
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditSuccess, setIsEditSuccess] = useState(false);

  const handleCloseModal = () => {
    navigate(-1);
  };

  // Input 요소를 참조하기 위한 ref 설정
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setImageUrl(fileUrl); // 선택한 이미지의 URL을 상태에 저장
    }
  };

  const handleSwitchToggle = () => {
    setIsSwitchOn(!isSwitchOn);
    setIsPublic((prev) => !prev);
  };

  const handleEditSubmit = async () => {
    setIsLoading(true);
    try {
      const groupData = {
        name,
        password,
        imageUrl,
        isPublic,
        introduction,
      };

      const response = await axios.post(
        `https://pieces-server.onrender.com/api/groups`,
        groupData
      );

      // 서버에서 성공적인 응답을 받은 경우
      if (response.status === 200 || response.status === 201) {
        alert("그룹이 성공적으로 생성되었습니다!");
        handleCloseModal();
      } else {
        throw new Error(response.data.message || "Failed");
      }
    } catch (error) {
      console.error(error);
      alert("생성에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">그룹 만들기</h2>

        <button className="close-btn" onClick={handleCloseModal}>
          <img src={closeButton} alt="닫기" width={30} height={30} />
        </button>

        <div className="container">
          <label className="modal-label">그룹명</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="modal-input"
            placeholder="그룹명을 입력해 주세요"
          />
        </div>

        <div className="container">
          <label className="modal-label">대표 이미지</label>
          <div className="image-upload">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="modal-input image-input"
              placeholder="대표 이미지를 첨부해 주세요"
              onChange={handleFileSelect}
            />
            <button className="file-select-button">파일 선택</button>
          </div>
        </div>

        <div className="container">
          <label className="modal-label">그룹 소개</label>
          <textarea
            className="modal-textarea"
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
            placeholder="그룹을 소개해 주세요"
          ></textarea>
        </div>

        <div className="container">
          <label className="modal-label">그룹 공개 선택</label>
          <div className="switch-container" onClick={handleSwitchToggle}>
            <div className={`switch ${isSwitchOn ? "on" : "off"}`}>
              <div className="switch-circle"></div>
            </div>
            <span className="switch-label">
              {isSwitchOn ? "공개" : "비공개"}
            </span>
          </div>
        </div>

        <div className="container">
          <label className="modal-label">수정 권한 인증</label>
          <input
            type="password"
            className="modal-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해 주세요"
          />
        </div>

        <button className="edit-submit-button" onClick={handleEditSubmit}>
          {isLoading ? "생성 중..." : "만들기"}
        </button>
      </div>
    </div>
  );
};

export default CreateGroup;
