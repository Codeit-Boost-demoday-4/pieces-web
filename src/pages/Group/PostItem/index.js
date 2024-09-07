import React from "react";
import { PostLayout, InfoContainer, Title, TagList } from "./styles";

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
  // moment를 JavaScript Date 객체로 변환
  const postDate = new Date(moment);
  
  // 날짜를 "yyyy-mm-dd" 형식으로 변환
  const dateString = postDate.toLocaleDateString([], {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

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
          <span>{dateString}</span> {/* 날짜만 표시 */}
        </div>
      </InfoContainer>
    </PostLayout>
  );
};

export default PostItem;
