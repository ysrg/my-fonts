import styled from "styled-components";

const SqInner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  border: 5px solid white;
  display: flex;
  align-items: flex-end;
  padding: 5px;
  ${({ isMain }) => {
    return (
      isMain &&
      `
    width: 160px;
    height: 160px;
  `
    );
  }}
`;

export default SqInner;
