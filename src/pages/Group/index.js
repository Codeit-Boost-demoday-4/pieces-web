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
import { dummyPosts } from "./dummyPosts.js";
import PostItem from "./PostItem/index.js";

const Group = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [isPublicView, setIsPublicView] = useState(true);
  const [showSympathy, setShowSympathy] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);


  // 그룹 상태
  // 그룹 정보 상태
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

  useEffect(() => {
    const fetchGroupInfo = async () => {
      /*
      //더미데이터
      setName("달봉이네 가족");
      setImageUrl(groupPhoto);
      setIsPublic(false);
      setIntroduction("서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.");
      setLikeCount(8);
      setBadges([
        "7일 연속 추억 등록",
        "그룹 공감 1만 개 이상 받기",
        "추억 공감 1만 개 이상 받기",
      ]);
      setPostCount(8);
      setDDay(265);
      */

      //서버 연결
      try {
        const response = await api.get(`/api/groups/${groupId}`);

        if (response.status === 200 || response.status === 201) {
          const groupData = response.data;

          // 서버로부터 받은 데이터를 상태에 반영
          setName(groupData.name);
          setImageUrl(groupData.imageUrl || groupPhoto); // 기본 이미지를 사용할 경우
          setIsPublic(groupData.isPublic);
          setIntroduction(groupData.introduction);
          setLikeCount(groupData.likeCount);
          setBadges(groupData.badges || []);
          setPostCount(groupData.postCount);

          // createdAt 날짜를 기준으로 D-Day 계산
          const createdAtDate = new Date(groupData.createdAt);
          const currentDate = new Date();
          const diffTime = Math.abs(currentDate - createdAtDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 밀리초를 일 수로 변환
          setDDay(diffDays);
        } else {
          throw new Error(response.data.message || "Failed");
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchGroupPosts = () => {
      setPosts(dummyPosts);
    };

    fetchGroupInfo();
    fetchGroupPosts();
  }, []);

  const handleShowPublic = () => {
    setIsPublicView(true);
  };

  const handleShowPrivate = () => {
    setIsPublicView(false);
  };

  const handleSympathyClick = () => {
    setShowSympathy(true);
    setTimeout(() => setShowSympathy(false), 1000);
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

      {/* 그룹 정보 수정 모달 */}
      {showModal && <UpdateGroupModal handleCloseModal={handleCloseModal} />}

      {/* 그룹 삭제 모달 */}
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
                {badges.map((badge, index) => (
                  <BadgeItem key={index}>
                    <span>{badge}</span>
                  </BadgeItem>
                ))}
              </BadgeList>
            </BadgeContainer>
            {/* 공감 보내기 버튼 */}
            <SendLikeButton onClick={handleSympathyClick}>
              <span>공감 보내기</span>
            </SendLikeButton>

            {/* 공감 애니메이션 */}
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
              onChange={(e) => setSearchQuery(e.target.value)} // 검색어 상태 업데이트
            />
          </PostMidContainer>
          <PostsList>
            {posts
              .filter(
                (post) =>
                  post.isPublic === isPublicView && // 공개 여부 필터
                  (post.title.includes(searchQuery) || // 제목 필터
                   post.tags.some((tag) => tag.includes(searchQuery))) // 태그 필터
              )
              .map((post) => (
                <PostItem
                  key={post.id}
                  nickname={post.nickname}
                  title={post.title}
                  imageUrl={post.imageUrl} // 이미지 URL 전달
                  tags={post.tags}
                  location={post.location}
                  moment={post.moment}
                  showImage={isPublicView} // 공개일 때만 이미지 표시
                  handleClick={() => navigate(`/posts/${post.id}`)} // 게시물 클릭 시 동작 추가
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
