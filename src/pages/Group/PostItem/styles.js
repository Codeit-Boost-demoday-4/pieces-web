import styled from "styled-components";

export const PostLayout = styled.div`
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

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span``;

export const TagList = styled.div`
  display: flex;
  flex-direction: row;
`;
