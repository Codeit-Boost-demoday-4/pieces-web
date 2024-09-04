import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { LogoTopBar } from "../../components/LogoTopBar/index.js";

const Group = () => {
  const navigate = useNavigate();
  const [isPublicView, setIsPublicView] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const groupId = 1;

  const handleCreateGroup = () => {
    navigate("/create-group");
  };

  const handleShowPublic = () => {
    setIsPublicView(true);
  };

  const handleShowPrivate = () => {
    setIsPublicView(false);
  };

  const handleGroupClick = () => {
    navigate(`/group/${groupId}`);
  };

  return (
    <>
      <LogoTopBar />
      <button onClick={handleCreateGroup} className="create-group-btn">
        그룹 만들기
      </button>
      <div className="home-layout">
        <div className="posts-container">
          <div className="post-mid-container">
            <button
              className={`public-button ${isPublicView ? "active" : ""}`}
              onClick={handleShowPublic}
            >
              공개
            </button>
            <button
              className={`public-button ${!isPublicView ? "active" : ""}`}
              onClick={handleShowPrivate}
            >
              비공개
            </button>
            <input
              className="search-input"
              type="text"
              value={searchQuery}
              placeholder="태그 혹은 제목을 입력해주세요"
            />
          </div>

          {isPublicView ? (
            <div className="posts-list"></div>
          ) : (
            <div className="posts-list"></div>
          )}
          <button className="load-more-btn">더보기</button>
        </div>
      </div>
    </>
  );
};

export default Group;
