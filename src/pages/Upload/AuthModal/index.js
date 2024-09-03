import React, { useState } from "react";
import closeButton from "../assets/close-button.svg";
import { ModalWrapper, Modal, CloseButton, Button } from "./styles";

const AuthModal = ({ onSubmit, onClose }) => {
  const [groupPassword, setGroupPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    await onSubmit(groupPassword); // 부모 컴포넌트로부터 받은 onSubmit 호출
    setIsLoading(false);
  };

  return (
    <ModalWrapper>
      <Modal>
        <span>추억 올리기</span>
        <CloseButton onClick={onClose} disabled={isLoading}>
          <img src={closeButton} alt="닫기" width={30} height={30} />
        </CloseButton>

        <label>올리기 권한 인증</label>
        <input
          type="password"
          placeholder="그룹 비밀번호를 입력해 주세요"
          value={groupPassword}
          onChange={(e) => setGroupPassword(e.target.value)}
        />
        <Button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "업로드 중..." : "제출하기"}
        </Button>
      </Modal>
    </ModalWrapper>
  );
};

export default AuthModal;
