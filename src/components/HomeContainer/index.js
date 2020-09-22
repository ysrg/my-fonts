import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useFetch, Context, constants } from "../../utils";
import Store from "../Store";
import Checkout from "../Checkout";
import Header from "../Header";
import Wrapper from "./Wrapper";
import Main from "./Main";

const HomeContainer = ({ history }) => {
  const context = useContext(Context);
  const [route, setRoute] = useState("/");
  const [selected, setSelected] = useState({});

  useEffect(() => setRoute(history.location.pathname), [
    history.location.pathname,
  ]);

  const handleCardClick = (abbr, index) => {
    const config = { [abbr]: !selected[abbr] };
    setSelected(config);
    context.setCard(config);
  };

  const { status, data } = useFetch(constants.FONTS_URL);

  return (
    <Wrapper>
      <Header />
      <Main>
        {route === "/fonts_b" ? (
          <Checkout />
        ) : (
          <Store value={{ data, selected, handleCardClick, status }} />
        )}
      </Main>
    </Wrapper>
  );
};

HomeContainer.propTypes = {
  history: PropTypes.object.isRequired,
};

export default HomeContainer;
