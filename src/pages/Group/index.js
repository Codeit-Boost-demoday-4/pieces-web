import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles.css";
import profileLine from "../../assets/group/profile_line.png";
import memoryUpload from "../../assets/group/추억올리기.png";
import toggleButton from "../../assets/group/공개비공개버튼.png";
import publicPost from "../../assets/group/공개글1.png";
import publicPost2 from "../../assets/group/공개글2.png";
import publicPost3 from "../../assets/group/공개글3.png";
import publicPost4 from "../../assets/group/공개글4.png";
import publicPost5 from "../../assets/group/공개글5.png";
import moreButton from "../../assets/group/더보기.png";
import privatePost from "../../assets/group/비공개글.png";
import sympathyButton from "../../assets/group/공감보내기.png";
import sympathyAnimation from "../../assets/group/공감보내기클릭시.png";
import badge1 from "../../assets/group/badge1.png";
import badge2 from "../../assets/group/badge2.png";
import badge3 from "../../assets/group/badge3.png";

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
      setImageUrl();
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
      <div className="home-container">
        <div className="info-container">
          <img src={groupPhoto} alt="그룹 사진" className="group-image" />
          <div className="info-content">
            <div className="container">
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

            <div className="container">
              <span className="group-name">{name}</span>
              <span className="memory-count">{`추억 ${postCount}`}</span>
              <span className="group-sympathy">
                |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`그룹 공감 ${likeCount}`}
              </span>
            </div>

            <div className="container">
              <p className="profile-description">{introduction}</p>
            </div>

            <div className="badge-container">
              <span className="badge-text">획득 배지</span>
              <div className="bage-list">
                <img src={badge1} alt="Badge 1" className="badge" />
                <img src={badge2} alt="Badge 2" className="badge" />
                <img src={badge3} alt="Badge 2" className="badge" />
              </div>
            </div>

            {/* 공감 보내기 버튼 */}
            <img
              src={sympathyButton}
              alt="공감 보내기 버튼"
              className="sympathy-button"
              onClick={handleSympathyClick}
            />

            {/* 공감 애니메이션 */}
            {showSympathy && (
              <img
                src={sympathyAnimation}
                alt="공감 애니메이션"
                className="sympathy-animation"
              />
            )}
          </div>
        </div>

        {/* 그룹 정보 수정 모달 */}
        {showModal && <UpdateGroupModal handleCloseModal={handleCloseModal} />}

        {/* 그룹 삭제 모달 */}
        {showDeleteModal && (
          <DeleteGroupModal handleCloseModal={handleCloseDeleteModal} />
        )}

        <div className="posts-container">
          <div className="container">
            <span className="post-text">추억 목록</span>
            <button onClick={handleUploadClick} className="post-upload-btn">
              추억 올리기
            </button>
          </div>

          <div className="container">
            <button className="public-button" onClick={handleShowPublic}>
              공개
            </button>
            <button className="public-button" onClick={handleShowPrivate}>
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
          <img src={moreButton} alt="더보기 버튼" className="more-button" />
        </div>
      </div>
    </>
  );
};

export default Group;
