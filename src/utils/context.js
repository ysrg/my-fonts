import React from "react";
import PropTypes from "prop-types";

export const Context = React.createContext();

Provider.propTypes = {
  children: PropTypes.object,
};

export function Provider({ children }) {
  return (
    <Context.Provider
      value={{
        card: {},
        setCard(rCard) {
          this.card = rCard;
          localStorage.setItem("selectedCard", JSON.stringify(rCard));
        },
      }}
    >
      {children}
    </Context.Provider>
  );
}
