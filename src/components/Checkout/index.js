import React from "react";
import styled from "styled-components";
import { useFetch, constants } from "../../utils";

const Wrapper = styled.div`
  width: 70%;
`;
const Checkout = () => {
  const { data } = useFetch(constants.BUY_URL);
  return <Wrapper>{data.content}</Wrapper>;
};

export default Checkout;
