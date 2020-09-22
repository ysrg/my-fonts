import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  margin: auto;
  height: 450px;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  & a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    height: max-content;
    /* flex-flow: row wrap; */
  }
`;

export default Wrapper;
