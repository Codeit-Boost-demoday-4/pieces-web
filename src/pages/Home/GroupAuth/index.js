import React, { useState } from "react";
import api from "../../../api.js"; // axios 인스턴스
import { LogoTopBar } from "../../../components/LogoTopBar/index.js"; // LogoTopBar 임포트
import "./styles.css";
import { useParams, useNavigate } from "react-router-dom"; // useParams와 useNavigate를 통해 groupId를 받습니다

const GroupAuth = () => {
  const { groupId } = useParams(); // URL에서 groupId를 추출
  const navigate = useNavigate(); // navigate 훅을 사용하여 리다이렉트 처리
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleAuth = async () => {
    setIsLoading(true);
    setMessage(""); // 이전 메시지 초기화
    try {
      const response = await api.post(
        `/api/groups/${groupId}/verify-password`, // 인증 요청을 보낼 엔드포인트
        { password }
      );

      // 서버에서 성공적인 응답을 받은 경우
      if (response.status === 200) {
        setMessage("인증 성공! 권한이 부여되었습니다.");
        // 인증 성공 시, 사용자를 그룹 페이지로 리다이렉트
        navigate(`/group/${groupId}`);
      } else {
        throw new Error(response.data.message || "인증 실패");
      }
    } catch (error) {
      console.error(error);
      setMessage("인증에 실패했습니다. 비밀번호를 확인해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <LogoTopBar /> {/* LogoTopBar 추가 */}
      <h2 className="auth-title">권한 인증</h2>
      <div className="container">
        <label className="auth-label">비밀번호 입력</label>
        <input
          type="password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해 주세요"
        />
      </div>
      <button className="auth-submit-button" onClick={handleAuth}>
        {isLoading ? "인증 중" : "인증하기"}
      </button>
      {message && <p className="auth-message">{message}</p>}
    </div>
  );
};

export default GroupAuth;
