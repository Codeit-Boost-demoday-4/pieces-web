import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles.css";
import publicPost from "../../assets/group/공개글1.png";
import publicPost2 from "../../assets/group/공개글2.png";
import publicPost3 from "../../assets/group/공개글3.png";
import publicPost4 from "../../assets/group/공개글4.png";
import publicPost5 from "../../assets/group/공개글5.png";
import moreButton from "../../assets/group/더보기.png";
import privatePost from "../../assets/group/비공개글.png";
import sendLike from "../../assets/group/sendLike.svg";
import likeAnimation from "../../assets/group/likeAnimation.svg";
import searchIcon from "../../assets/group/searchIcon.svg";

// 새로운 이미지 import
import groupPhoto from "../../assets/group/그룹사진.png";

import { LogoTopBar } from "../../components/LogoTopBar";
import UpdateGroupModal from "./UpdateGroupModal";
import DeleteGroupModal from "./DeleteGroupModal";

const Group = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [isPublicView, setIsPublicView] = useState(true);
  const [showSympathy, setShowSympathy] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [introduction, setIntroduction] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [badges, setBadges] = useState([]);
  const [postCount, setPostCount] = useState(0);
  const [dday, setDDay] = useState(0);
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

    fetchGroupInfo();
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
      <div className="home-container">
        <div className="info-container">
          <img src={imageUrl} alt="그룹 사진" className="group-image" />
          <div className="info-content">
            <div className="top-container">
              <div className="dday">{`D+${dday}`}</div>
              <div className="status-public">
                |&nbsp;&nbsp;&nbsp;{isPublic ? "공개" : "비공개"}
              </div>
              <div
                className="edit-button"
                onClick={handleTextClick}
                style={{ cursor: "pointer" }}
              >
                그룹 정보 수정
              </div>
              <div
                className="delete-button"
                onClick={handleDeleteClick}
                style={{ cursor: "pointer" }}
              >
                그룹 삭제하기
              </div>
            </div>

            <div className="title-container">
              <span className="group-name">{name}</span>
              <span className="post-count">{`추억 ${postCount}`}</span>
              <span className="like-count">
                |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`그룹 공감 ${likeCount}`}
              </span>
            </div>

            <p className="introduction">{introduction}</p>

            <div className="badge-container">
              <span className="badge-text">획득 배지</span>
              <div className="badge-list">
                {badges.map((badge, index) => (
                  <div key={index} className="badge-item">
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 공감 보내기 버튼 */}
            <img
              src={sendLike}
              alt="공감 보내기 버튼"
              className="sympathy-button"
              onClick={handleSympathyClick}
            />

            {/* 공감 애니메이션 */}
            {showSympathy && (
              <img
                src={likeAnimation}
                alt="공감 애니메이션"
                className="like-animation"
              />
            )}
          </div>
        </div>

        <div className="posts-container">
          <div className="post-top-container">
            <span className="post-text">추억 목록</span>
            <button onClick={handleUploadClick} className="post-upload-btn">
              추억 올리기
            </button>
          </div>

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
            <div className="posts-list">
              <img src={publicPost} alt="공개글1" className="post" />
              <img src={publicPost2} alt="공개글2" className="post" />
              <img src={publicPost3} alt="공개글3" className="post" />
              <img src={publicPost4} alt="공개글4" className="post" />
              <img src={publicPost5} alt="공개글5" className="post" />
            </div>
          ) : (
            <div className="posts-list">
              <img src={privatePost} alt="비공개글1" className="post" />
              <img src={privatePost} alt="비공개글2" className="post" />
              <img src={privatePost} alt="비공개글3" className="post" />
              <img src={privatePost} alt="비공개글4" className="post" />
              <img src={privatePost} alt="비공개글5" className="post" />
            </div>
          )}
          <button className="load-more-btn">더보기</button>
        </div>
      </div>
    </>
  );
};

export default Group;
