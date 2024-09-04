import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/group/로고.png";

const Group = () => {
  const navigate = useNavigate();

  const groupId = 1;

  const handleGroupClick = () => {
    navigate(`/group/${groupId}`);
  };

  return (
    <div className="container">
      {/* 로고 */}
      <div className="logo" onClick={() => navigate("/group")}>
        <img src={logo} alt="Logo" />
      </div>

      <button className="group" onClick={handleGroupClick}>
        그룹 1
      </button>
    </div>
  );
};

export default Group;
