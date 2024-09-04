import React, { useState } from "react";
import "./styles.css";

const PostItem = ({ handleClick }) => {
  return <div onClick={handleClick}></div>;
};

export default PostItem;
