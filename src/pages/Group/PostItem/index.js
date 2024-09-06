import React, { useState, useEffect } from "react";
import { PostLayout, InfoContainer, Title, TagList } from "./styles";
import api from "../../../api.js"; // axios 인스턴스

const PostItem = ({
  handleClick,
  nickname,
  title,
  tags,
  imageUrl,
  location,
  moment,
  showImage, // showImage prop 추가
}) => {
  return (
    <PostLayout onClick={handleClick}>
      {showImage && <img src={imageUrl} alt={title} />} {/* showImage에 따라 이미지 표시 */}
      <InfoContainer>
        <span>{nickname}</span>
        <Title>{title}</Title>
        <TagList>
          {tags.map((tag, index) => (
            <div key={index} className="tag-item">
              <span>{`#${tag}`}</span>
            </div>
          ))}
        </TagList>
        <div>
          <span>{location}</span>
          <span>{moment}</span>
        </div>
      </InfoContainer>
    </PostLayout>
  );
};

export default PostItem;