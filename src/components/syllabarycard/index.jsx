import React from "react";
import propTypes from "prop-types";

import "./styles.css";

export default function SyllabaryCard({
  handleClick,
  id,
  type,
  flipped,
  height,
  width,
  isHiragana
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
        <div style={{}} className={flipped ? "front" : "back"}>
          {flipped ? (
            <div className="alphabet-letter">
              <section>{`${type.toLowerCase()}`}</section>
            </div>
          ) : (
            <img
              style={{ height, width }}
              src={`${process.env.PUBLIC_URL}/img/${
                isHiragana ? "hiragana" : "katakana"
              }/${type}.png`}
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
  width: propTypes.number.isRequired,
  isHiragana: propTypes.bool.isRequired
};