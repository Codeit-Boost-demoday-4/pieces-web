import styled from "styled-components";

export const GroupLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: calc(100vw - 80px);
  height: calc(100vh - 100px);
  padding: 0 40px;
  background-color: #fafafa;
  top: 100px;
  left: 0;
  overflow-y: scroll;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 273px;
  padding: 60px 0 100px 0;
  border-bottom: solid 1px #dddddd;

  img {
    width: 262px;
    height: 273px;
    border-radius: 6px;
    margin-right: 40px;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 302px);
  height: 100%;
  gap: 20px;
`;

export const TopContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  .dday {
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.03px;
    margin-right: 15px;
  }

  .is-public {
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.03px;
  }

  .edit-btn {
    margin-left: auto;
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.53px;
    text-align: center;
    color: #282828;
    cursor: pointer;
  }

  .delete-btn {
    margin-left: 20px;
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #a0a0a0;
    cursor: pointer;
  }
`;

export const TitleContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  .group-name {
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 37.56px;
    letter-spacing: -0.03em;
  }

  .post-count {
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 22.54px;
    letter-spacing: -0.03em;
    margin: 0 30px;
  }

  .like-count {
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 22.54px;
    letter-spacing: -0.03em;
  }
`;

export const Introduction = styled.p`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 22.54px;
  letter-spacing: -0.03em;
  margin: 0;
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 100px;
  width: auto;
  max-width: calc(100% - 200px);
  overflow-x: auto;
  scrollbar-width: none;
  margin-top: 20px;

  span {
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 20.03px;
    letter-spacing: -0.03em;
    margin-bottom: 20px;
  }
`;

export const BadgeList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const BadgeItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  background-color: #f4f4f4;
  border-radius: 26px;
  padding: 0 20px;

  span {
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #282828;
  }
`;

export const SendLikeButton = styled.button`
  position: absolute;
  width: 187.88px;
  height: 52px;
  right: 0;
  bottom: 100px;
  background: #fafafa;
  border: solid 1px #282828;
  border-radius: 6px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  span {
    font-family: Spoqa Han Sans Neo;
    font-size: 16px;
    font-weight: 500;
    line-height: 20.03px;
    letter-spacing: -0.03em;
    text-align: center;
    color: #282828;
  }
`;

export const LikeAnimation = styled.img`
  position: absolute;
  width: 102.28px;
  height: 124px;
  right: 0;
  bottom: 170px;
  transform: translateX(-50%);
  opacity: 0;
  animation: fadeInOut 2s forwards;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(10px);
    }
    50% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(-10px);
    }
  }
`;

export const FamilyText = styled.span`
  position: absolute;
  width: 167px;
  height: 38px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 37.56px;
  letter-spacing: -0.03em;
  text-align: left;
  color: black; /* 글씨 색상 */
  white-space: nowrap;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding-top: 100px;
`;

export const PostTopContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  span {
    font-family: "Spoqa Han Sans Neo"; /* 글꼴 */
    font-style: normal;
    font-weight: 700; /* 글꼴 두께 */
    font-size: 24px; /* 글꼴 크기 */
    line-height: 30px; /* 줄 간격 */
    letter-spacing: -0.03em; /* 자간 */
    color: #282828; /* 텍스트 색상 */
  }

  .post-upload-btn {
    position: absolute;
    width: 200px;
    height: 45px;
    right: 0;
    background-color: #282828;
    color: white;
    border-radius: 5px;
    border: none;
    font-family: Spoqa Han Sans Neo;
    font-size: 14px;
    font-weight: 700;
    line-height: 17.53px;
    letter-spacing: -0.03em;
    text-align: center;
  }
`;

export const PostMidContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  .public-btn {
    width: 66px;
    height: 45px;
    background: none;
    color: #282828;
    border-radius: 22.5px;
    border: none;
    font-family: "Spoqa Han Sans Neo";
    font-weight: 700;
    font-size: 14px;
    margin-right: 10px;

    &.active {
      background: #282828;
      color: #ffffff; /* 활성화된 버튼은 흰색 글씨 */
    }
  }

  .search-input {
    width: 1186px;
    padding: 0 10px;
    height: 45px;
    background: #f4f4f4;
    border-radius: 6px;
    border: none;
  }
`;

/*
/* 그룹상세페이지공개추억.png (공감순.png) 
.reaction-order {
  position: absolute;
  width: 160px;
  height: 45px;
  left: calc(50% + 1560px / 2 - 160px); /* profile_all의 오른쪽 라인에 맞춤 
  top: calc(250px + 273px + 100px + 120px + 100px + 1px); /* 태그 혹은 제목을 입력해 주세요.png와 동일한 top 값 
  background: #F4F4F4;
  border-radius: 6px;
}
*/

export const PostsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const Post = styled.div`
  box-sizing: border-box;
  width: auto;
  height: 370px;
  background: #fafafa;
  border: 1px solid #dddddd;
  border-radius: 12px;
`;

export const LoadMoreBtn = styled.button`
  width: 100%;
  height: 60px;
  border: solid 1px black;
  border-radius: 6px;
  background-color: #fafafa;
  color: #282828;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
`;
