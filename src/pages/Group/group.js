import React from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import profileAll from '../../assets/profile_all.png';
import profileLine from '../../assets/profile_line.png';
import memoryList from '../../assets/추억목록.png';
import uploadButton from '../../assets/추억올리기.png';
import searchBar from '../../assets/태그 혹은 제목을 입력해 주세요.png';
import 공개글1 from '../../assets/공개글1.png';
import 공개글2 from '../../assets/공개글2.png';
import 공개글3 from '../../assets/공개글3.png';
import 공개글4 from '../../assets/공개글4.png';
import 공개글5 from '../../assets/공개글5.png';
import 공개글6 from '../../assets/공개글6.png';
import 더보기 from '../../assets/더보기.png'; // 더보기.png 추가

import {
  LogoContainer,
  ProfileContainer,
  ProfileLineContainer,
  MemoryListContainer,
  UploadButtonContainer,
  SearchBarContainer,
  PublicPostContainer,
  PublicPost2Container,
  PublicPost3Container,
  PublicPost4Container,
  PublicPost5Container,
  PublicPost6Container,
  MoreButtonContainer, // MoreButtonContainer 추가
} from './styles';

const Group = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Clickable logo */}
      <LogoContainer onClick={() => navigate('/group')}>
        <img src={logo} alt="Logo" />
      </LogoContainer>
     
      {/* Profile All image */}
      <ProfileContainer>
        <img src={profileAll} alt="Profile All" />
      </ProfileContainer>

      {/* Profile Line image */}
      <ProfileLineContainer>
        <img src={profileLine} alt="Profile Line" />
      </ProfileLineContainer>

      {/* Memory List image */}
      <MemoryListContainer>
        <img src={memoryList} alt="Memory List" />
      </MemoryListContainer>

      {/* Upload Button */}
      <UploadButtonContainer>
        <img src={uploadButton} alt="Upload Button" />
      </UploadButtonContainer>

      {/* Search Bar */}
      <SearchBarContainer>
        <img src={searchBar} alt="Search Bar" />
      </SearchBarContainer>

      {/* Public Post 1 */}
      <PublicPostContainer>
        <img src={공개글1} alt="Public Post 1" />
      </PublicPostContainer>

      {/* Public Post 2 */}
      <PublicPost2Container>
        <img src={공개글2} alt="Public Post 2" />
      </PublicPost2Container>

      {/* Public Post 3 */}
      <PublicPost3Container>
        <img src={공개글3} alt="Public Post 3" />
      </PublicPost3Container>

      {/* Public Post 4 */}
      <PublicPost4Container>
        <img src={공개글4} alt="Public Post 4" />
      </PublicPost4Container>

      {/* Public Post 5 */}
      <PublicPost5Container>
        <img src={공개글5} alt="Public Post 5" />
      </PublicPost5Container>

      {/* Public Post 6 */}
      <PublicPost6Container>
        <img src={공개글6} alt="Public Post 6" />
      </PublicPost6Container>

      {/* More Button */}
      <MoreButtonContainer>
        <img src={더보기} alt="More Button" />
      </MoreButtonContainer>
    </>
  );
};

export default Group;
