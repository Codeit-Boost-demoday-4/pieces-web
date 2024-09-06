import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import sendLike from "../../assets/group/sendLike.svg";
import likeAnimation from "../../assets/group/likeAnimation.svg";
import groupPhoto from "../../assets/group/그룹사진.png";

import { LogoTopBar } from "../../components/LogoTopBar/index.js";
import UpdateGroupModal from "./UpdateGroupModal";
import DeleteGroupModal from "./DeleteGroupModal";
import { dummyPosts } from "./dummyPosts.js";
import PostItem from "./PostItem/index.js";
import {
  GroupLayout,
  InfoContainer,
  GroupImage,
  InfoContent,
  TopContainer,
  DDay,
  StatusPublic,
  EditButton,
  DeleteButton,
  TitleContainer,
  GroupName,
  PostCount,
  LikeCount,
  Introduction,
  BadgeContainer,
  BadgeText,
  BadgeList,
  BadgeItem,
  SympathyButton,
  LikeAnimation,
  PostsContainer,
  PostTopContainer,
  PostText,
  PostUploadBtn,
  PostMidContainer,
  PublicButton,
  SearchInput,
  PostsList,
  LoadMoreBtn,
} from "./styles"; // styled-components import

const Group = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [isPublicView, setIsPublicView] = useState(true);
  const [showSympathy, setShowSympathy] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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
    const fetchGroupInfo = () => {
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

      {showModal && <UpdateGroupModal handleCloseModal={handleCloseModal} />}
      {showDeleteModal && (
        <DeleteGroupModal handleCloseModal={handleCloseDeleteModal} />
      )}
      <GroupLayout>
        <InfoContainer>
          <GroupImage src={imageUrl} alt="그룹 사진" />
          <InfoContent>
            <TopContainer>
              <DDay>{`D+${dday}`}</DDay>
              <StatusPublic>|&nbsp;&nbsp;&nbsp;{isPublic ? "공개" : "비공개"}</StatusPublic>
              <EditButton onClick={handleTextClick}>그룹 정보 수정</EditButton>
              <DeleteButton onClick={handleDeleteClick}>그룹 삭제하기</DeleteButton>
            </TopContainer>

            <TitleContainer>
              <GroupName>{name}</GroupName>
              <PostCount>{`추억 ${postCount}`}</PostCount>
              <LikeCount>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`그룹 공감 ${likeCount}`}</LikeCount>
            </TitleContainer>

            <Introduction>{introduction}</Introduction>

            <BadgeContainer>
              <BadgeText>획득 배지</BadgeText>
              <BadgeList>
                {badges.map((badge, index) => (
                  <BadgeItem key={index}>
                    <span>{badge}</span>
                  </BadgeItem>
                ))}
              </BadgeList>
            </BadgeContainer>

            <SympathyButton src={sendLike} onClick={handleSympathyClick} />
            {showSympathy && <LikeAnimation src={likeAnimation} />}
          </InfoContent>
        </InfoContainer>

        <PostsContainer>
          <PostTopContainer>
            <PostText>추억 목록</PostText>
            <PostUploadBtn onClick={handleUploadClick}>추억 올리기</PostUploadBtn>
          </PostTopContainer>
          <PostMidContainer>
            <PublicButton className={isPublicView ? "active" : ""} onClick={handleShowPublic}>
              공개
            </PublicButton>
            <PublicButton className={!isPublicView ? "active" : ""} onClick={handleShowPrivate}>
              비공개
            </PublicButton>
            <SearchInput
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="태그 혹은 제목을 입력해주세요"
            />
          </PostMidContainer>

          <PostsList>
            {posts
              .filter(
                (post) =>
                  (post.isPublic === isPublicView && post.title.includes(searchQuery)) ||
                  post.tags.some((tag) => tag.includes(searchQuery))
              )
              .map((post) => (
                <PostItem
                  key={post.id}
                  nickname={post.nickname}
                  title={post.title}
                  imageUrl={post.imageUrl}
                  tags={post.tags}
                  location={post.location}
                  moment={post.moment}
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
