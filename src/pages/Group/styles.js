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
`;

export const GroupImage = styled.img`
  width: 262px;
  height: 273px;
  border-radius: 6px;
  margin-right: 40px;
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
`;

export const DDay = styled.div`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-right: 15px;
`;

export const StatusPublic = styled.div`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

export const EditButton = styled.div`
  margin-left: auto;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #282828;
  cursor: pointer;
`;

export const DeleteButton = styled.div`
  margin-left: 20px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #a0a0a0;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const GroupName = styled.span`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 37.56px;
  letter-spacing: -0.03em;
`;

export const PostCount = styled.span`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin: 0 30px;
`;

export const LikeCount = styled.span`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 18px;
  font-weight: 700;
`;

export const Introduction = styled.p`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 18px;
  font-weight: 400;
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 100px;
  max-width: calc(100% - 200px);
  overflow-x: auto;
  margin-top: 20px;
`;

export const BadgeText = styled.span`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const BadgeList = styled.div`
  display: flex;
  gap: 10px;
`;

export const BadgeItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  border-radius: 26px;
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-weight: 500;
  background-color: #f4f4f4;
  padding: 0 20px;
`;

export const SympathyButton = styled.img`
  position: absolute;
  width: 187.88px;
  height: 52px;
  right: 0;
  bottom: 100px;
  background: none;
  border: none;
  cursor: pointer;
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
  align-items: center;
  justify-content: center;
`;

export const PostText = styled.span`
  font-family: "Spoqa Han Sans Neo";
  font-size: 24px;
  font-weight: 700;
  color: #282828;
`;

export const PostUploadBtn = styled.button`
  position: absolute;
  width: 200px;
  height: 45px;
  right: 0;
  background-color: #282828;
  color: white;
  border-radius: 5px;
  border: none;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 700;
`;

export const PostMidContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const PublicButton = styled.button`
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
    color: white;
  }
`;

export const SearchInput = styled.input`
  width: 1186px;
  padding: 0 10px;
  height: 45px;
  background: #f4f4f4;
  border-radius: 6px;
  border: none;
`;

export const PostsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const LoadMoreBtn = styled.button`
  width: 100%;
  height: 60px;
  border: solid 1px black;
  border-radius: 6px;
  background-color: #fafafa;
  color: #282828;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 40px;
`;
