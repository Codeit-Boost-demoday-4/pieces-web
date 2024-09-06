import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogoTopBar } from "../../components/LogoTopBar/index.js";
import api from "../../api.js"; // axios 인스턴스
import {
  CreateGroupBtn,
  HomeLayout,
  PostsContainer,
  PostMidContainer,
  Post,
  PostsList,
  LoadMoreBtn,
} from "./styles.js";
import logo from '../../assets/memories/logo.png';
import PostItem from '../Group/PostItem/index.js';
import { dummyPosts } from "../Group/dummyPosts.js";

const Home = () => {
  const navigate = useNavigate();
  const [isPublicView, setIsPublicView] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [groups, setGroups] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchGroups = async (isPublic, pageNumber = 1) => {
    setLoading(true);
    try {
      const response = await api.get("/api/groups", {
        params: {
          isPublic,
          page: pageNumber,
          pageSize: 10,
          keyword: searchQuery,
        },
      });

      const { data, currentPage, totalPages } = response.data;

      setGroups((prevGroups) => (pageNumber === 1 ? data : [...prevGroups, ...data]));
      setPage(currentPage);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("그룹 데이터를 가져오는 중 에러 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGroups(isPublicView, 1);
  }, [isPublicView, searchQuery]);

  const loadMoreGroups = () => {
    if (page < totalPages) {
      fetchGroups(isPublicView, page + 1);
    }
  };

  const handleCreateGroup = () => {
    navigate("/makegroup");
  };

  useEffect(() => {
    fetchGroups(isPublicView, 1);
  }, [isPublicView, searchQuery]);

  const handleGroupClick = (groupId) => {
    navigate(`/group/${groupId}`);
  };


  const LogoComponent = () => {
    return <img src={logo} alt="Logo" style={{ display: 'block', margin: '0 auto' }} />;
  };

  const handlePostClick = (post) => {
    if (isPublicView) {
      handleGroupClick(post.groupId); // post 객체에서 groupId를 가져옵니다.
    } else {
      navigate("/GroupAuth");
    }
  };

  const filteredPosts = dummyPosts.filter(
    (post) =>
      post.isPublic === isPublicView &&
      (post.title.includes(searchQuery) || post.tags.some(tag => tag.includes(searchQuery)))
  );

  return (
    <>
      <LogoTopBar />
      <CreateGroupBtn onClick={handleCreateGroup}>그룹 만들기</CreateGroupBtn>
      <HomeLayout>
        <PostsContainer>
          <PostMidContainer>
            <button
              className={`public-button ${isPublicView ? "active" : ""}`}
              onClick={() => setIsPublicView(true)}
            >
              공개
            </button>
            <button
              className={`public-button ${!isPublicView ? "active" : ""}`}
              onClick={() => setIsPublicView(false)}
            >
              비공개
            </button>
            <input
              className="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="태그 혹은 제목을 입력해주세요"
            />
          </PostMidContainer>

          <PostsList>
            {groups.map((group) => (
              <div key={group.id} onClick={() => handleGroupClick(group.id)}>
                <img src={group.imageUrl} alt={group.name} />
                <h3>{group.name}</h3>
                <p>{group.introduction}</p>
                <span className="info-row">
                  <span>좋아요: {group.likeCount}</span>
                  <span>뱃지: {group.badgeCount}</span>
                  <span>포스트: {group.postCount}</span>
                </span>
                <span className="date-row">생성일: {new Date(group.createdAt).toLocaleDateString()}</span>
              </div>
            ))}
          </PostsList>

          
          {page < totalPages && (
            <LoadMoreBtn onClick={loadMoreGroups} disabled={loading}>
              {loading ? "로딩 중..." : "더보기"}
            </LoadMoreBtn>
          )}
        </PostsContainer>
      </HomeLayout>
    </>
  );
};

export default Home;