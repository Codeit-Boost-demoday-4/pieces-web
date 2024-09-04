import React, { useState } from "react";
import "./styles.css"; // CSS 파일 임포트
import { LogoTopBar } from "../../components/LogoTopBar/index.js";
import postimage from "../../assets/postimage.png"; // 포스트 이미지 임포트
import WriterInfo from "./WriterInfo"; // WriterInfo 컴포넌트 임포트
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import CommentModal from "./CommentModal"; // 댓글 모달 임포트
import CommentSection from "./CommentSection";

const Post = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false); // 댓글 모달 상태
  const [editComment, setEditComment] = useState(null); // 수정할 댓글 상태
  const [comments, setComments] = useState([
    {
      id: 1,
      nickname: "사용자1",
      text: "첫 번째 댓글입니다.",
      password: "1234",
    },
    {
      id: 2,
      nickname: "사용자2",
      text: "두 번째 댓글입니다.",
      password: "5678",
    },
  ]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    setIsDeleting(true);
  };

  const handleCommentSubmit = (newComment) => {
    if (editComment) {
      setComments(
        comments.map((comment) =>
          comment.id === editComment.id
            ? { ...comment, ...newComment }
            : comment
        )
      );
      setEditComment(null);
    } else {
      setComments([...comments, { id: Date.now(), ...newComment }]);
    }
  };

  const startEdit = (comment) => {
    setEditComment(comment);
    setIsCommenting(true);
  };

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <>
      <LogoTopBar />

      {isEditing && (
        <EditModal isOpen={isEditing} onClose={() => setIsEditing(false)} />
      )}

      {isDeleting && (
        <DeleteModal
          isOpen={isDeleting}
          onClose={() => setIsDeleting(false)}
          onConfirm={() => {
            alert("포스트가 삭제되었습니다.");
            setIsDeleting(false);
          }}
        />
      )}

      <div className="post-layout">
        <div className="info-container">
          <div className="writer-info-container">
            <div className="writer-info">
              <WriterInfo /> {/* 작성자 ID와 공개/비공개 정보 표시 */}
            </div>
            <div className="action-buttons">
              <button onClick={handleEdit} className="edit-button">
                추억 수정하기
              </button>
              <button onClick={handleDelete} className="delete-button">
                추억 삭제하기
              </button>
            </div>
          </div>
          <h1 className="post-title">인천 앞바다에서 무려 60cm 월척을 낚다!</h1>
          <div className="post-info">
            <span className="author">작성자: 당신이름</span>
            <span className="date">24.01.19</span>
            <span className="views">조회수: 120</span>
            <span className="comments">댓글: {comments.length}</span>
          </div>
        </div>

        <div className="post-container">
          <img src={postimage} alt="PostImage" className="post-image" />
          <p className="post-content">
            인천 앞바다에서 월척을 낚았습니다!
            <br />
            가족들과 기억에 오래도록 남을 멋진 하루였어요.
            <br />
            <br />
            인천 앞바다에서 월척을 낚았습니다!
            <br />
            가족들과 기억에 오래도록 남을 멋진 하루였어요.
            <br />
            <br />
            인천 앞바다에서 월척을 낚았습니다!
          </p>
          <button
            onClick={() => setIsCommenting(true)}
            className="add-comment-button"
          >
            댓글 등록하기
          </button>
        </div>
        <div className="comments-section">
          <span className="comment-span">댓글</span>
          <CommentSection
            comments={comments}
            onStartEdit={startEdit}
            onDeleteComment={deleteComment}
          />

          <CommentModal
            isOpen={isCommenting}
            onClose={() => setIsCommenting(false)}
            onSubmit={handleCommentSubmit}
            editComment={editComment}
          />
        </div>
      </div>
    </>
  );
};

export default Post;
