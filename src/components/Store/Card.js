import styled from "styled-components";

const Card = styled.div`
  height: 40%;
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-height: 50%;
  border-radius: 15px;
  &:hover {
    background: #cecece1a;
    cursor: pointer;
  }
  & > ul {
    width: 50%;
  }
  ${({ selected }) =>
    selected &&
    `
    opacity: 50%;
  `}
  ${({ isMain }) =>
    isMain &&
    `
    height: 40%;
    flex-direction: column;
    flex-basis: 100%;
    width: 45%;
    padding-top: 1em;
  `}

@media (max-width: 768px) {
    height: 100%;
    width: 100%;
    margin: 16px 0;
    & > ul {
      width: 60%;
    }
  }
`;

export default Card;
