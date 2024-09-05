import styled from "styled-components"; // 원본의 순서 : postlayout > infocontainer > title > taglist

export const PostLayout = styled.div` // 전체 레이아웃
  display: flex;
  flex-direction: column;
  width: auto;
  max-width: 375px;
  height: auto;
  border: solid 1px #dddddd;
  border-radius: 6px;
  padding: 20px;

  img {
    width: auto;
    height: auto;
    margin-bottom: 20px;
  }
`;

export const InfoContainer = styled.div` // 닉네임, 타이틀 등의 모든 정보
  display: flex;
  flex-direction: column;

 // nickname 스타일링
 & > span:first-child {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.53px;
    letter-spacing: -0.03em;
    text-align: left;
    margin-bottom: 23px; // 닉네임과 제목 간의 간격
  }

  // location, moment 스타일링
  & > div > span {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 14.53px;
    letter-spacing: -0.02em;
  }

  // location, moment 사이 간격
  & > div > span:first-child {
    margin-right: 10px; 
  }
`;

export const Title = styled.span` // 게시글의 제목
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  font-size: 16px; // 제목 글씨 크기
  font-weight: 700;
  line-height: 20.03px;
  letter-spacing: -0.03em;
  text-align: left;
  margin-bottom: 15px; // 제목과 태그 간의 간격
`;

export const TagList = styled.div` // 태그리스트
  display: flex;
  flex-direction: row;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.53px;
  letter-spacing: -0.03em;
  text-align: left;
  margin-bottom: 30px;
  color: #b8b8b8 // 태그의 색상 회색
`;