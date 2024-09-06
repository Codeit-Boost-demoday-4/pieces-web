import styled from "styled-components";

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 100px;
  left: 0;
  width: calc(100vw - 80px);
  height: calc(100vh - 100px);
  padding: 0 40px;
  background-color: #fafafa;
  overflow-y: scroll; /* 필요 시 사용 가능 */
`;

export const CreateGroupBtn = styled.button`
  position: fixed;
  top: 27px;
  right: 40px;
  width: 200px;
  height: 45px;
  background-color: #282828;
  color: white;
  border-radius: 6px;
  border: none;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 700;
  line-height: 17.53px;
  letter-spacing: -0.03em;
  text-align: center;
  z-index: 2;
`;

export const SearchIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("../../assets/search-icon.png"); /* 돋보기 이미지 경로 */
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 10px;
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
  div {
    box-sizing: border-box;
    width: auto;
    height: auto;
    background: #fafafa;
    border: 1px solid #dddddd;
    border-radius: 12px;
    padding: 15px; /* 내부 여백 추가 */
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 왼쪽 정렬 */
  }

  img {
    width: 335px;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    margin-bottom: 3px;
  }
  h3 {
    font-family: 'Spoqa Han Sans Neo';
    font-size: 16px;
    font-weight: 700;
    line-height: 20.03px;
    letter-spacing: -0.03em;
    text-align: left;
    margin-bottom: 2px; /* 그룹 이름 아래 간격 */
  }
  p {
    font-family: 'Spoqa Han Sans Neo';
    font-size: 16px;
    font-weight: 400;
    line-height: 20.03px;
    letter-spacing: -0.03em;
    text-align: left;
    margin-bottom: 5px; /* 그룹 인트로덕션 아래 간격 */
  }
  .info-row {
    display: flex; /* 한 줄로 배치 */
    gap: 10px; /* 각 항목 사이에 간격 */
    font-family: 'Spoqa Han Sans Neo';
    font-size: 12px;
    font-weight: 400;
    color: #999999; /* 회색 글씨 */
    text-align: left;
    margin-bottom: 10px;
  }
  .date-row {
    font-family: 'Spoqa Han Sans Neo';
    font-size: 14px;
    font-weight: 400;
    line-height: 17.53px;
    letter-spacing: -0.03em;
    text-align: left;
    color: #333333;
  }
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
