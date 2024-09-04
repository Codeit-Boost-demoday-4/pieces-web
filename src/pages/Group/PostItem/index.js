import React, { useState } from "react";
import { PostLayout, InfoContainer, Title, TagList } from "./styles";

const PostItem = ({
  handleClick,
  nickname,
  title,
  tags,
  imageUrl,
  location,
  moment,
}) => {
  return (
    <PostLayout onClick={handleClick}>
      <img src={imageUrl} />
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
