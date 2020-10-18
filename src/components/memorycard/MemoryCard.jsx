import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

//destructuring instead passing props
export default function MemoryCard({
  handleClick,
  disabled,
  id,
  type,
  char,
  flipped,
  solved,
  height,
  width,
  isHiragana
}) {
  return (
    <div
      className={`flip-container ${flipped ? "flipped" : ""}`}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <div className="flipper">
        <div
          className={flipped ? "front" : "back"}
          style={{
            width,
            height
          }}
        >
          {flipped || solved ? (
            <div
              className="char-container"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/${
                  isHiragana ? "hiragana" : "katakana"
                }/${type}.png)`
              }}
            >
              <div>{char === true ? `${type}` : ""}</div>
            </div>
          ) : (
            <img
              style={{
                height,
                width
              }}
              src={`${process.env.PUBLIC_URL}/img/katakana/back.jpg`}
            />
          )}
        </div>
        <img
          style={{
            height,
            width
          }}
          src={
            flipped || solved
              ? `${process.env.PUBLIC_URL}/img/${
                  isHiragana ? "hiragana" : "katakana"
                }/${type}.png`
              : `${process.env.PUBLIC_URL}/img/katakana/back.jpg`
          }
        />
      </div>
    </div>
  );
}

MemoryCard.propTypes = {
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  flipped: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  char: PropTypes.bool,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  isHiragana: PropTypes.bool.isRequired
};
