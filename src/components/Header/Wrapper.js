import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap-reverse;
  height: max-content;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export default Wrapper;
