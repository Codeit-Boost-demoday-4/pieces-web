import React from "react";

const WriterInfo = () => {
  // 작성자 ID와 공개/비공개 정보 예시
  const writerId = "달봉이아들"; // 예시 ID
  const privacy = "공개"; // 예시 공개 정보

  return (
    <div className="writer-info-text">
      <span>{writerId}</span> | <span>{privacy}</span>
    </div>
  );
};

export default WriterInfo;
