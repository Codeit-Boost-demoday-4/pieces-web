import React, { useState } from 'react';
import './Memories.css';
import logo from '../../assets/memories/logo.png'; // 로고 이미지 불러오기
import fileButton from '../../assets/memories/파일선택창.png'; // 파일 선택 버튼 이미지 불러오기
import deleteTagImage from '../../assets/memories/태그삭제.png'; // 태그 삭제 버튼 이미지 불러오기

const Memories = () => {
  const [isPublic, setIsPublic] = useState(true);
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const toggleSwitch = () => {
    setIsPublic(!isPublic);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTags([...tags, inputValue]);
      setInputValue('');
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    // 여기에 제출 버튼이 눌렸을 때 실행할 코드 추가
    alert("추억이 성공적으로 업로드되었습니다!");
  };

  return (
    <div className="memories-container">
      <img src={logo} alt="로고" className="logo" />
      
      {/* 닉네임 */}
      <label className="nickname-label">닉네임</label>
      <input type="text" className="nickname-input" placeholder="닉네임을 입력해 주세요" />
      
      {/* 제목 */}
      <label className="title-label">제목</label>
      <input type="text" className="title-input" placeholder="제목을 입력해 주세요" />
      
      {/* 이미지 */}
      <label className="image-label">이미지</label>
      <input type="text" className="image-input" placeholder="파일을 선택해 주세요" />
      
      {/* 파일 선택 버튼 */}
      <div className="file-button-container">
        <img src={fileButton} alt="파일 선택 버튼" className="file-button-image" />
        <span className="file-button-text">파일 선택</span>
      </div>
      
      {/* 본문 */}
      <label className="content-label">본문</label>
      <textarea className="content-input" placeholder="본문 내용을 입력해 주세요"></textarea>
      
      {/* 태그 */}
      <label className="tag-label">태그</label>
      <input 
        type="text" 
        className="tag-input" 
        placeholder="태그를 입력해 주세요" 
        value={inputValue} 
        onChange={handleInputChange} 
        onKeyPress={handleInputKeyPress}
      />
      
      {/* 태그 리스트 */}
      <div className="tag-list">
        {tags.map((tag, index) => (
          <div className="tag-item" key={index}>
            <span className="tag-text">#{tag}</span>
            <img 
              src={deleteTagImage} 
              alt="태그 삭제" 
              className="tag-delete" 
              onClick={() => removeTag(index)} 
            />
          </div>
        ))}
      </div>

      {/* 장소 */}
      <label className="place-label">장소</label>
      <input type="text" className="place-input" placeholder="장소를 입력해 주세요" />

      {/* 추억의 순간 */}
      <label className="moment-label">추억의 순간</label>
      <input type="text" className="moment-input" placeholder="YYYY-MM-DD" />

      {/* 비밀번호 */}
      <label className="password-label">비밀번호</label>
      <input type="password" className="password-input" placeholder="비밀번호를 입력해 주세요" />

      {/* 추억 공개 선택 */}
      <div className="public-toggle-container">
        <label className="public-label">추억 공개 선택</label>
        <div className="toggle-wrapper" onClick={toggleSwitch}>
          <span className="public-text">{isPublic ? "공개" : "비공개"}</span>
          <div className={`toggle-switch ${isPublic ? "public" : "private"}`}>
            <div className="switch-handle"></div>
          </div>
        </div>
      </div>

      {/* 올리기 버튼 */}
      <button className="submit-button" onClick={handleSubmit}>올리기</button>
    </div>
  );
};

export default Memories;
