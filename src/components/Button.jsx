import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 13px 20px; /* 내부 여백 */
    font-size: 16px; /* 글자 크기 */
    border: none; /* 테두리 제거 */
    border-radius: 6px; /* 모서리 둥글게 */
    cursor: pointer; /* 커서 모양 */
    background: black; /* 배경색 */
    color: white; /* 글자색 */
    width: auto; /* 글자 수에 맞춰 자동 조정 */
    height: auto; /* 높이 자동 조정 */
`;




function Button(props) {
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;
