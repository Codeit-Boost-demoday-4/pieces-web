import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import closeButton from "../../../assets/close-button.svg";
import {
  ModalOverlay,
  DeleteModalContent,
  DeleteModalTitle,
  CloseButton,
  Container,
  DeleteModalLabel,
  DeleteModalInput,
  DeleteSubmitButton,
} from "./styles"; // styles.js 파일에서 불러오기

const DeleteGroupModal = ({ handleCloseModal }) => {
  const { groupId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");

  const handleDeleteGroup = async () => {
    setIsLoading(true);
    try {
      const response = await axios.delete(
        `https://pieces-server.onrender.com/api/groups/${groupId}`,
        {
          data: { password },
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert("그룹이 성공적으로 삭제되었습니다!");
        handleCloseModal();
      } else {
        throw new Error(response.data.message || "Failed");
      }
    } catch (error) {
      console.error(error);
      alert("삭제에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModalOverlay onClick={handleCloseModal}>
      <DeleteModalContent onClick={(e) => e.stopPropagation()}>
        <DeleteModalTitle>그룹 삭제</DeleteModalTitle>
        <CloseButton onClick={handleCloseModal}>
          <img src={closeButton} alt="닫기" width={30} height={30} />
        </CloseButton>
        <Container>
          <DeleteModalLabel>삭제 권한 인증</DeleteModalLabel>
          <DeleteModalInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해 주세요"
          />
        </Container>
        <DeleteSubmitButton onClick={handleDeleteGroup}>
          {isLoading ? "삭제 중" : "삭제하기"}
        </DeleteSubmitButton>
      </DeleteModalContent>
    </ModalOverlay>
  );
};

export default DeleteGroupModal;
