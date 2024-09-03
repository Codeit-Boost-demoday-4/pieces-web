import styled from 'styled-components';

export const LogoContainer = styled.div`
  position: fixed;
  width: 137px;
  height: 48px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;

export const ProfileContainer = styled.div`
  position: fixed;
  width: 1248px; /* Profile All 너비 */
  height: 218.4px;
  top: 108px;
  left: 50%;
  transform: translateX(-50%);
 
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileLineContainer = styled.div`
  position: fixed;
  width: 1248px;
  height: auto;
  top: calc(108px + 218.4px + 48px);
  left: 50%;
  transform: translateX(-50%);
 
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const MemoryListContainer = styled.div`
  position: fixed;
  width: auto;
  height: auto;
  top: calc(108px + 218.4px + 108px);
  left: 50%;
  transform: translateX(-50%);

  img {
    display: block;
    margin: 0 auto;
    width: auto;
    height: auto;
    object-fit: contain;
  }
`;

export const UploadButtonContainer = styled.div`
  position: fixed;
  width: 200px;
  height: auto;
  top: calc(108px + 218.4px + 108px);
  left: calc(50% + 624px - 200px);
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;

export const SearchBarContainer = styled.div`
  position: fixed;
  width: auto;
  height: auto;
  top: calc(108px + 218.4px + 156px + 40px);
  left: 50%;
  transform: translateX(-50%);

  img {
    display: block;
    margin: 0 auto;
    width: auto;
    height: auto;
    object-fit: contain;
  }
`;

// 공개글1 컨테이너
export const PublicPostContainer = styled.div`
  position: fixed;
  width: 370px; /* 공개글1의 너비 */
  height: auto;
  top: calc(108px + 218.4px + 156px + 40px + 50px + 20px); /* 70px 아래 */
  left: calc(50% - 624px); /* profile_all 왼쪽 정렬 */

  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

// 공개글2 컨테이너
export const PublicPost2Container = styled.div`
  position: fixed;
  width: 370px;
  height: auto;
  top: calc(108px + 218.4px + 156px + 40px + 50px + 20px + 20px + 370px); /* 공개글1 아래 20px 간격 (370px은 공개글1의 높이 가정) */
  left: calc(50% - 624px); /* profile_all 왼쪽 정렬 */

  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

// 공개글3 컨테이너 (중앙 정렬)
export const PublicPost3Container = styled.div`
  position: fixed;
  width: 370px; /* 공개글3의 너비 */
  height: auto;
  top: calc(108px + 218.4px + 156px + 40px + 50px + 20px); /* 공개글1과 동일한 높이 */
  left: 50%; /* 왼쪽 라인을 화면의 중앙으로 */
  transform: translateX(-50%); /* 너비의 50%를 왼쪽으로 이동시켜 중앙 정렬 */

  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

// 공개글4 컨테이너 (공개글3 아래 20px 간격)
export const PublicPost4Container = styled.div`
  position: fixed;
  width: 370px; /* 공개글4의 너비 */
  height: auto;
  top: calc(108px + 218.4px + 156px + 40px + 50px + 20px + 525px + 20px); /* 공개글3 아래 20px 간격 */
  left: 50%; /* 중앙 정렬 */
  transform: translateX(-50%);

  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

// 공개글5 컨테이너
export const PublicPost5Container = styled.div`
  position: fixed;
  width: 370px; /* 공개글5의 너비 */
  height: auto;
  top: calc(108px + 218.4px + 156px + 40px + 50px + 20px); /* 공개글1과 동일한 높이 */
  left: calc(50% + 624px - 370px); /* profile_all의 오른쪽 라인에 맞춤 */

  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

// 공개글6 컨테이너 (공개글5 아래 20px 간격)
export const PublicPost6Container = styled.div`
  position: fixed;
  width: 370px; /* 공개글6의 너비 */
  height: auto;
  top: calc(108px + 218.4px + 156px + 40px + 50px + 20px + 525px + 20px); /* 공개글5 아래 20px 간격 */
  left: calc(50% + 624px - 370px); /* profile_all의 오른쪽 라인에 맞춤 */

  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

// 더보기 버튼 컨테이너 (공개글6 아래 30px 간격)
export const MoreButtonContainer = styled.div`
  position: fixed;
  width: 1248px; /* profile_all과 동일한 너비 */
  height: auto; /* 높이는 비율에 맞게 자동 조정 */
  top: calc(108px + 218.4px + 156px + 40px + 50px + 20px + 525px + 20px + 525px + 30px); /* 공개글6 아래 30px 간격 */
  left: 50%; /* 중앙 정렬 */
  transform: translateX(-50%);

  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

