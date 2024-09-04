import logo from "../assets/logo.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled.div`
  width: 100vw;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoTopBar = () => {
  const nav = useNavigate();

  const handleClick = () => {
    nav("/");
  };

  return (
    <LogoContainer>
      <img src={logo} alt="로고" onClick={handleClick} />
    </LogoContainer>
  );
};
