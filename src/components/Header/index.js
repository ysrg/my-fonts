import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useFetch, constants } from "../../utils";
import Wrapper from "./Wrapper";
import PromptText from "./PromptText";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

const Root = styled.div`
  width: 100%;
`;

const Header = () => {
  const history = useHistory();
  const [routes, setRoutes] = useState({});
  const { data } = useFetch(constants.TABS_URL);

  const handleItemClick = (selected, ep) => {
    setRoutes({ [ep]: true });
  };

  return (
    <Root>
      <Wrapper>
        <PromptText>Please select one font</PromptText>
        <Menu>
          {data.map((tab, index) => {
            if (tab.label) {
              const showActive =
                history.location.pathname === `/${tab.content_endpoint}`;
              return (
                <MenuItem
                  active={`${
                    routes[tab.content_endpoint] === true || showActive
                      ? true
                      : ""
                  }`}
                  key={tab.id}
                >
                  <Link
                    onClick={() => handleItemClick(index, tab.content_endpoint)}
                    to={`/${tab.content_endpoint}`}
                  >
                    {tab.label.toUpperCase()}
                  </Link>
                </MenuItem>
              );
            }
          })}
        </Menu>
      </Wrapper>
    </Root>
  );
};

export default Header;
