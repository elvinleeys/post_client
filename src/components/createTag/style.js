import styled from "styled-components";

const S = {};

S.TagContainer = styled.div`
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    height: 2rem;
    border-radius: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #F8F9FA;
    color: #2FC6AC;
    margin-right: 0.75rem;
    cursor: pointer;
    margin-bottom: 0.75rem;
`;

S.TagName = styled.h3`
  margin-right: 10px;
`;

S.TagBtn = styled.button`
  border: none;
  outline: 0;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export default S;