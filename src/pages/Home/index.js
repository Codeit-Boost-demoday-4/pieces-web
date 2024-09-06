import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoTopBar } from "../../components/LogoTopBar/index.js";
import {
  CreateGroupBtn,
  HomeLayout,
  PostsContainer,
  PostMidContainer,
  PostsList,
  LoadMoreBtn,
} from "./styles.js";

const Home = () => {
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
      <CreateGroupBtn onClick={handleCreateGroup}>그룹 만들기</CreateGroupBtn>
      <HomeLayout>
        <PostsContainer>
          <PostMidContainer>
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
          </PostMidContainer>

          {isPublicView ? <PostsList></PostsList> : <PostsList></PostsList>}
          <LoadMoreBtn>더보기</LoadMoreBtn>
        </PostsContainer>
      </HomeLayout>
    </>
  );
};

export default Home;
