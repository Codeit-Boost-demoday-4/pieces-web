import React, { useState, useRef, } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api.js"; // axios 인스턴스
import "./styles.css";
import { LogoTopBar } from "../../components/LogoTopBar/index.js";

const MakeGroup = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [introduction, setIntroduction] = useState("");
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setImageUrl(fileUrl);
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

      const response = await api.post(`/api/groups`, groupData);

      if (response.status === 200 || response.status === 201) {
        alert("그룹이 성공적으로 생성되었습니다!");

        // 생성된 그룹 ID를 가져옵니다. (예: response.data.groupId)
        const createdGroupId = response.data.id;

        // 그룹 페이지로 리다이렉트합니다.
        navigate(`/group/${createdGroupId}`);
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
    <div className="container">
      <LogoTopBar />
      <h2 className="modal-title">그룹 만들기</h2>

      <div className="form-container">
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
            <button className="file-select-button" onClick={() => fileInputRef.current.click()}>
              파일 선택
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="modal-input image-input"
              onChange={handleFileSelect}
              style={{ display: 'none' }} // input을 숨깁니다
            />
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
              {isSwitchOn ? "비공개" : "공개"}
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

export default MakeGroup;
