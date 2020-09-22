import styled from "styled-components";

const MenuItem = styled.div`
  font-size: 12px;
  margin: 12px;
  line-height: 22px;
  display: inline-block;
  font-weight: 700;
  border-radius: 3rem;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  padding: 0.3em 0.8em;
  &:hover {
    color: #0496d8;
    background: #c1c1c11a;
    cursor: pointer;
  }
  ${({ active }) =>
    active &&
    `
    opacity: 50%;
  `}
`;

export default MenuItem;
