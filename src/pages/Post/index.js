import React, { useState, useEffect } from "react";
import "./styles.css"; // CSS 파일 임포트
import { LogoTopBar } from "../../components/LogoTopBar/index.js";
import postimage from "../../assets/postimage.png"; // 포스트 이미지 임포트
import WriterInfo from "./WriterInfo"; // WriterInfo 컴포넌트 임포트
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import CommentModal from "./CommentModal"; // 댓글 모달 임포트
import CommentSection from "./CommentSection";
import api from "../../api.js"; // axios 인스턴스
import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams(); // 포스트 ID를 URL 파라미터로부터 가져오기
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false); // 댓글 모달 상태
  const [editComment, setEditComment] = useState(null); // 수정할 댓글 상태
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 포스트와 댓글 데이터를 가져오는 함수
  const fetchPostData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get(`/api/posts/${postId}`);
      if (response.status === 200) {
        const postData = response.data;
        setPost(postData);
        setComments(postData.comments || []);
      } else {
        throw new Error("Failed to fetch post data");
      }
    } catch (error) {
      console.error("포스트 데이터를 가져오는 중 오류 발생:", error);
      setError("포스트 데이터를 가져오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostData(); // 컴포넌트 마운트 시 데이터 가져오기
  }, [postId]);

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

  if (loading) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <p>포스트를 찾을 수 없습니다.</p>;
  }

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
          <h1 className="post-title">{post.title}</h1>
          <div className="post-info">
            <span className="author">작성자: {post.author}</span>
            <span className="date">{post.date}</span>
            <span className="views">조회수: {post.views}</span>
            <span className="comments">댓글: {comments.length}</span>
          </div>
        </div>

        <div className="post-container">
          <img src={post.imageUrl || postimage} alt="PostImage" className="post-image" />
          <p className="post-content">{post.content}</p>
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
