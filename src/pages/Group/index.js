import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/logo.png";
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

import UpdateGroupModal from "./UpdateGroupModal";
import DeleteGroupModal from "./DeleteGroupModal";

const Group = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [isPublicView, setIsPublicView] = useState(true);
  const [showSympathy, setShowSympathy] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  /*
  useEffect(() => {
    const scalePage = () => {
      const scale = window.innerWidth / 1920; // 1920px 기준으로 스케일 계산
      document.body.style.transform = `scale(${scale})`;
      document.body.style.transformOrigin = "top left"; // 기준점 설정
      document.body.style.width = "1920px"; // 축소 후 너비 고정
      document.body.style.height = "auto"; // 필요시 자동 높이 설정
    };

    scalePage(); // 페이지 로드 시 스케일 조정
    window.addEventListener("resize", scalePage); // 창 크기 조정 시 스케일 재적용

    return () => {
      window.removeEventListener("resize", scalePage);
    };
  }, []);
  */

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
    <div className="home-container">
      <div className="background-layer"></div>
      <img src={logo} alt="로고" className="logo" />
      <img src={profileLine} alt="프로필 선" className="profile-line" />
      <span className="memory-list">추억 목록</span>

      <button onClick={handleUploadClick}>
        <img src={memoryUpload} alt="추억 올리기" className="memory-upload" />
      </button>

      <img
        src={toggleButton}
        alt="공개 비공개 버튼"
        className="toggle-button"
      />
      <span
        className="public-text"
        onClick={handleShowPublic}
        style={{ cursor: "pointer" }}
      >
        공개
      </span>

      <span
        className="private-text"
        onClick={handleShowPrivate}
        style={{ cursor: "pointer" }}
      >
        비공개
      </span>

      {/* 그룹 정보 수정 버튼 */}
      <div
        className="text-button"
        onClick={handleTextClick}
        style={{ cursor: "pointer" }}
      >
        그룹 정보 수정
      </div>

      <div className="dday-description">D+265</div>

      <div className="status-public">|&nbsp;&nbsp;&nbsp;공개</div>

      <div className="memory-count">추억 8</div>

      <div className="group-sympathy">
        |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;그룹
        공감 23
      </div>

      {/* 그룹 삭제하기 버튼 */}
      <div
        className="delete-button"
        onClick={handleDeleteClick}
        style={{ cursor: "pointer" }}
      >
        그룹 삭제하기
      </div>

      <div className="group-name">달봉이네 가족</div>

      {/* 공감 보내기 버튼 */}
      <img
        src={sympathyButton}
        alt="공감 보내기 버튼"
        className="sympathy-button"
        onClick={handleSympathyClick}
      />

      <img src={badge1} alt="Badge 1" className="badge-image-1" />
      <img src={badge2} alt="Badge 2" className="badge-image-2" />
      <img src={badge3} alt="Badge 2" className="badge-image-3" />

      {/* 공감 애니메이션 */}
      {showSympathy && (
        <img
          src={sympathyAnimation}
          alt="공감 애니메이션"
          className="sympathy-animation"
        />
      )}

      {/* 입력창 모달 */}
      {showModal && <UpdateGroupModal handleCloseModal={handleCloseModal} />}

      {/* 그룹 삭제 모달 */}
      {showDeleteModal && (
        <DeleteGroupModal handleCloseModal={handleCloseDeleteModal} />
      )}

      {isPublicView ? (
        <>
          <img src={publicPost} alt="공개글1" className="public-post" />
          <img src={publicPost2} alt="공개글2" className="public-post-2" />
          <img src={publicPost3} alt="공개글3" className="public-post-3" />
          <img src={publicPost4} alt="공개글4" className="public-post-4" />
          <img src={publicPost5} alt="공개글5" className="public-post-5" />
          <img src={moreButton} alt="더보기 버튼" className="more-button" />
        </>
      ) : (
        <>
          <img
            src={privatePost}
            alt="비공개글1"
            className="private-post-group1-1"
          />
          <img
            src={privatePost}
            alt="비공개글2"
            className="private-post-group1-2"
          />
          <img
            src={privatePost}
            alt="비공개글3"
            className="private-post-group1-3"
          />
          <img
            src={privatePost}
            alt="비공개글4"
            className="private-post-group1-4"
          />

          <img
            src={privatePost}
            alt="비공개글5"
            className="private-post-group2-1"
          />

          <img
            src={moreButton}
            alt="더보기 버튼"
            className="more-button-private"
          />
        </>
      )}
      {/* "달봉이네 가족" 문구 추가 */}
      <p className="profile-description">
        서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.
      </p>

      {/* "획득 배지" 문구 추가 */}
      <p className="badge-text">획득 배지</p>

      {/* 추가된 이미지 */}
      <img src={groupPhoto} alt="그룹 사진" className="group-photo" />
    </div>
  );
};

export default Group;
