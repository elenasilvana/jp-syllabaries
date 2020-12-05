import React from "react";

import "./styles.css";

interface MemoryCardProps {
  handleClick: (id: number) => void;
  disabled: boolean;
  id: number;
  type: string;
  char: boolean;
  flipped: boolean;
  solved: boolean;
  height: number;
  width: number;
  isHiragana: boolean;
  selectedColor: string;
}

export const MemoryCard: React.FunctionComponent<MemoryCardProps> = ({
  handleClick,
  disabled,
  id,
  type,
  char,
  flipped,
  solved,
  height,
  width,
  isHiragana,
  selectedColor,
}) => {
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
            height,
          }}
        >
          {flipped || solved ? (
            <div
              className="char-container"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/${
                  isHiragana ? "hiragana" : "katakana"
                }/${type}.png)`,
              }}
            >
              <div>{char === true ? `${type}` : ""}</div>
            </div>
          ) : (
            <div
              style={{
                height,
                width,
                background: selectedColor,
                borderRadius: 30,
              }}
            ></div>
          )}
        </div>
        {flipped || solved ? (
          <img
            style={{
              height,
              width,
            }}
            src={`${process.env.PUBLIC_URL}/img/${
              isHiragana ? "hiragana" : "katakana"
            }/${type}.png`}
            alt={`${
              isHiragana ? "hiragana" : "katakana"
            } character for ${type}`}
          />
        ) : (
          <div style={{ height, width }}></div>
        )}
      </div>
    </div>
  );
};
