import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import SqWrapper from "./SqWrapper";
import SqInner from "./SqInner";

const Store = ({ value: { data, selected, handleCardClick, status } }) => {
  let localData;
  try {
    localData = localStorage.getItem("selectedCard") || "{}";
  } catch (error) {
    console.error("Failed to read from localStorage", error);
  }
  return (
    <>
      {status === "fetched" &&
        data.content.map((item, index) => {
          const isCardSelected = selected[item.abbr] || localData;
          return (
            <Card
              onClick={() => handleCardClick(item.abbr, index)}
              selected={isCardSelected}
              isMain={index === 0}
              key={item.id}
            >
              <SqWrapper>
                <SqInner
                  className="App--square"
                  style={{ background: `${item.color}` }}
                  aria-label={window.ntc.name(item.color)}
                  aria-required="true"
                  isMain={index === 0}
                >
                  {item.abbr}
                </SqInner>
              </SqWrapper>
              <ul>
                <li>{item.label}</li>
              </ul>
            </Card>
          );
        })}
    </>
  );
};

Store.propTypes = {
  value: PropTypes.object.isRequired,
};

export default React.memo(Store);
