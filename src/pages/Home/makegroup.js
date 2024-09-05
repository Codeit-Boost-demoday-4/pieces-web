import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import { LogoTopBar } from "../../components/LogoTopBar/index.js";

function MakeGroup() {
  const [groupName, setGroupName] = useState('');
  const [groupImage, setGroupImage] = useState(null);
  const [groupDescription, setGroupDescription] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [password, setPassword] = useState('');

  const handleImageChange = (e) => {
    setGroupImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 그룹 생성 로직을 추가하면 됩니다.
    console.log({ groupName, groupImage, groupDescription, isPublic, password });
  };

  return (
    <>
      <LogoTopBar />
      <div className="container">
        <h1>그룹 만들기</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="modal-label">그룹명</label>
            <input
              type="text"
              className="modal-input"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="그룹명을 입력해 주세요"
            />
          </div>

          <div>
            <label className="modal-label">대표 이미지</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <div>
            <label className="modal-label">그룹 소개</label>
            <textarea
              className="modal-input"
              value={groupDescription}
              onChange={(e) => setGroupDescription(e.target.value)}
              placeholder="그룹을 소개해 주세요"
            />
          </div>

          <div>
            <label className="modal-label">그룹 공개 선택</label>
            <select value={isPublic} onChange={(e) => setIsPublic(e.target.value === 'true')}>
              <option value={true}>공개</option>
              <option value={false}>비공개</option>
            </select>
          </div>

          <div>
            <label className="modal-label">비밀번호</label>
            <input
              type="password"
              className="modal-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해 주세요"
            />
          </div>

          <button type="submit">만들기</button>
        </form>
      </div>
    </>
  );
}

export default MakeGroup;
