import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogoTopBar } from "../../components/LogoTopBar/index.js";
import api from "../../api.js"; // axios 인스턴스
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
  const [isPublicView, setIsPublicView] = useState(true); // 공개/비공개 필터
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태
  const [groups, setGroups] = useState([]); // 서버에서 받은 그룹 리스트 상태
  const [page, setPage] = useState(1); // 페이지 상태
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수
  const [loading, setLoading] = useState(false); // 로딩 상태 관리

  // 공개/비공개 그룹을 서버에서 가져오는 함수
  const fetchGroups = async (isPublic, pageNumber = 1) => {
    setLoading(true); // 로딩 시작
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

      // 데이터 업데이트
      setGroups((prevGroups) => (pageNumber === 1 ? data : [...prevGroups, ...data]));
      setPage(currentPage);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("그룹 데이터를 가져오는 중 에러 발생:", error);
    } finally {
      setLoading(false); // 로딩 끝
    }
  };

  // 공개/비공개 그룹 필터 변경 시 데이터 불러오기
  useEffect(() => {
    fetchGroups(isPublicView, 1); // 첫 페이지부터 다시 가져옴
  }, [isPublicView, searchQuery]);

  // "더보기" 버튼 클릭 시 다음 페이지의 그룹 가져오기
  const loadMoreGroups = () => {
    if (page < totalPages) {
      fetchGroups(isPublicView, page + 1);
    }
  };

  const handleCreateGroup = () => {
    navigate("/create-group");
  };

  const handleGroupClick = (groupId) => {
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
                <div>좋아요: {group.likeCount}</div>
                <div>뱃지: {group.badgeCount}</div>
                <div>포스트: {group.postCount}</div>
                <div>생성일: {new Date(group.createdAt).toLocaleDateString()}</div>
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
