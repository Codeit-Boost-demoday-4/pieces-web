import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api.js"; // axios 인스턴스
import {
  BadgeItem,
  GroupLayout,
  InfoContainer,
  InfoContent,
  TopContainer,
  TitleContainer,
  Introduction,
  BadgeContainer,
  BadgeList,
  SendLikeButton,
  LikeAnimation,
  PostsContainer,
  PostTopContainer,
  PostMidContainer,
  PostsList,
  LoadMoreBtn,
} from "./styles.js";
import sendLike from "../../assets/group/sendLike.svg";
import likeAnimation from "../../assets/group/likeAnimation.svg";
import searchIcon from "../../assets/group/searchIcon.svg";
import groupPhoto from "../../assets/group/그룹사진.png";

import { LogoTopBar } from "../../components/LogoTopBar/index.js";
import UpdateGroupModal from "./UpdateGroupModal";
import DeleteGroupModal from "./DeleteGroupModal";
import PostItem from "./PostItem/index.js";

const Group = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [isPublicView, setIsPublicView] = useState(true);
  const [showSympathy, setShowSympathy] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // 그룹 상태
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [introduction, setIntroduction] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [badges, setBadges] = useState([]);
  const [postCount, setPostCount] = useState(0);
  const [dday, setDDay] = useState(0);

  // 게시물 목록 상태
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState('latest');

  useEffect(() => {
    const fetchGroupInfo = async () => {
      try {
        const response = await api.get(`/api/groups/${groupId}`);
        if (response.status === 200 || response.status === 201) {
          const groupData = response.data;
          setName(groupData.name);
          setImageUrl(groupData.imageUrl || groupPhoto); // 기본 이미지를 사용할 경우
          setIsPublic(groupData.isPublic);
          setIntroduction(groupData.introduction);
          setLikeCount(groupData.likeCount);
          setPostCount(groupData.postCount);

          const createdAtDate = new Date(groupData.createdAt);
          const currentDate = new Date();
          const diffTime = Math.abs(currentDate - createdAtDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          setDDay(diffDays);
        } else {
          throw new Error(response.data.message || "Failed");
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchGroupPosts = async () => {
      try {
        const response = await api.get(`/api/groups/${groupId}/posts`, {
          params: {
            page: currentPage,
            pageSize: pageSize,
            sortBy: sortBy,
            keyword: searchQuery,
            isPublic: isPublicView
          }
        });
        if (response.status === 200 || response.status === 201) {
          setPosts(response.data.data);
        } else {
          throw new Error(response.data.message || "Failed");
        }
      } catch (error) {
        console.error(error);
      }
    };
    
    const fetchGroupBadges = async () => {
      try {
        const response = await api.get(`/api/badges/${groupId}`);
        if (response.status === 200 || response.status === 201) {
          const badgeNames = response.data.map(badge => badge.name); // name만 추출
          setBadges(badgeNames); // badges 상태에 name만 저장
        } else {
          throw new Error(response.data.message || "Failed to load badges");
        }
      } catch (error) {
        console.error("Error fetching badges:", error);
      }
    };

    fetchGroupInfo();
    fetchGroupPosts();
    fetchGroupBadges(); // 뱃지 데이터 가져오기
  }, [groupId, currentPage, pageSize, sortBy, searchQuery, isPublicView]);

  const handleShowPublic = () => {
    setIsPublicView(true);
  };

  const handleShowPrivate = () => {
    setIsPublicView(false);
  };

  const handleSympathyClick = async () => {
    try {
      setShowSympathy(true);
      setTimeout(() => setShowSympathy(false), 1000);

      // 공감 보내기 API 호출
      const response = await api.post(`/api/groups/${groupId}/like`);
      if (response.status === 200 || response.status === 201) {
        // 공감 수를 갱신
        setLikeCount(likeCount + 1);
      } else {
        throw new Error("공감 보내기에 실패했습니다.");
      }
    } catch (error) {
      console.error(error);
      alert("공감 보내기에 실패했습니다.");
    }
  };


  const handleTextClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleUploadClick = () => {
    navigate(`/group/${groupId}/upload`);
  };

  return (
    <>
      <LogoTopBar />

      {showModal && <UpdateGroupModal handleCloseModal={handleCloseModal} />}
      {showDeleteModal && (
        <DeleteGroupModal handleCloseModal={handleCloseDeleteModal} />
      )}
      <GroupLayout>
        <InfoContainer>
          <img src={imageUrl} alt="그룹 사진" />
          <InfoContent>
            <TopContainer>
              <span className="dday">{`D+${dday}`}</span>
              <span className="is-public">
                |&nbsp;&nbsp;&nbsp;{isPublic ? "공개" : "비공개"}
              </span>
              <div
                className="edit-btn"
                onClick={handleTextClick}
                style={{ cursor: "pointer" }}
              >
                그룹 정보 수정
              </div>
              <div
                className="delete-btn"
                onClick={handleDeleteClick}
                style={{ cursor: "pointer" }}
              >
                그룹 삭제하기
              </div>
            </TopContainer>
            <TitleContainer>
              <span className="group-name">{name}</span>
              <span className="post-count">{`추억 ${postCount}`}</span>
              <span className="like-count">
                |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`그룹 공감 ${likeCount}`}
              </span>
            </TitleContainer>
            <Introduction>{introduction}</Introduction>
            <BadgeContainer>
              <span>획득 배지</span>
              <BadgeList>
                {(badges && badges.length > 0) ? (
                  badges.map((badgeName, index) => (
                    <BadgeItem key={index}>
                      <span>{badgeName}</span>
                    </BadgeItem>
                  ))
                ) : (
                  <span>획득한 배지가 없습니다.</span>
              )}
              </BadgeList>
            </BadgeContainer>
            <SendLikeButton onClick={handleSympathyClick}>
              <span>공감 보내기</span>
            </SendLikeButton>
            {showSympathy && (
              <LikeAnimation src={likeAnimation} alt="공감 애니메이션" />
            )}
          </InfoContent>
        </InfoContainer>

        <PostsContainer>
          <PostTopContainer>
            <span>추억 목록</span>
            <button onClick={handleUploadClick} className="post-upload-btn">
              추억 올리기
            </button>
          </PostTopContainer>
          <PostMidContainer>
            <button
              className={`public-button ${isPublicView ? "active" : ""}`}
              onClick={handleShowPublic}
            >
              공개
            </button>
            <button
              className={`public-btn ${!isPublicView ? "active" : ""}`}
              onClick={handleShowPrivate}
            >
              비공개
            </button>
            <input
              className="search-input"
              type="text"
              value={searchQuery}
              placeholder="태그 혹은 제목을 입력해주세요"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </PostMidContainer>
          <PostsList>
            {posts
              .filter(
                (post) =>
                  post.isPublic === isPublicView &&
                  (post.title.includes(searchQuery) ||
                   post.tags.some((tag) => tag.includes(searchQuery)))
              )
              .map((post) => (
                <PostItem
                  groupId={groupId}
                  key={post.id}
                  nickname={post.nickname}
                  title={post.title}
                  imageUrl={post.imageUrl}
                  tags={post.tags}
                  location={post.location}
                  moment={post.moment}
                  showImage={isPublicView}
                  handleClick={() => navigate(`/posts/${post.id}`)}
                />
              ))}
          </PostsList>

          <LoadMoreBtn>더보기</LoadMoreBtn>
        </PostsContainer>
      </GroupLayout>
    </>
  );
};

export default Group;
