import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/group/로고.png";
import 공감보내기 from "../../assets/group/공감보내기.png";
import 꽃 from "../../assets/group/꽃.png";

const Group = () => {
  const navigate = useNavigate();
  const [showFlower, setShowFlower] = useState(false);

  const handleHugClick = () => {
    setShowFlower(true);
    setTimeout(() => {
      setShowFlower(false);
    }, 1000); // 1초 후 꽃을 사라지게 함
  };

  return (
    <div className="container">
      {/* 로고 */}
      <div className="logo" onClick={() => navigate("/group")}>
        <img src={logo} alt="Logo" />
      </div>

      {/* 공감 보내기 버튼 */}
      <div className="hug-button" onClick={handleHugClick}>
        <img src={공감보내기} alt="공감 보내기" />
      </div>

      {/* 꽃 애니메이션 */}
      {showFlower && (
        <div className="flower">
          <img src={꽃} alt="Flower" />
        </div>
      )}

      {/* 프로필 선 */}
      <div className="profile-line"></div>

      {/* 추억 목록 */}
      <div className="memory-list">추억 목록</div>

      {/* 추억 올리기 버튼 */}
      <button className="upload-memory">추억 올리기</button>

      {/* 태그 혹은 제목을 입력해 주세요 입력창 */}
      <div className="search-bar">
        <div className="search-icon"></div>
        <input
          type="text"
          placeholder="태그 혹은 제목을 입력해 주세요"
          className="search-input"
        />
      </div>
    </div>
  );
};

export default Group;
