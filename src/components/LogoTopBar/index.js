import logo from "../../assets/logo.svg";
import React from "react";
import { useNavigate } from "react-router-dom";
import { LogoContainer } from "./styles";

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
