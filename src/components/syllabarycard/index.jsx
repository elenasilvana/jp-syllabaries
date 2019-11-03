import React from "react";
import propTypes from "prop-types";

import "./styles.css";

export default function SyllabaryCard({
  handleClick,
  id,
  type,
  flipped,
  height,
  width
}) {
  return (
    <div
      className={`flip-container ${flipped ? "flipped" : ""}`}
      style={{
        width,
        height
      }}
      onClick={() => handleClick(id)}
    >
      <div className="flipper">
        <div
          style={{ border: "solid red" }}
          className={flipped ? "front" : "back"}
        >
          {flipped ? (
            <p style={{ width: "100%", border: "solid grey" }}>{type}</p>
          ) : (
            <img
              style={{ height, width }}
              src={`${process.env.PUBLIC_URL}/img/katakana/${type}.png`}
            ></img>
          )}
        </div>
      </div>
    </div>
  );
}

SyllabaryCard.propTypes = {
  handleClick: propTypes.func.isRequired,
  id: propTypes.number.isRequired,
  flipped: propTypes.bool.isRequired,
  type: propTypes.string.isRequired,
  height: propTypes.number.isRequired,
  width: propTypes.number.isRequired
};
