import React from "react";

import "./syllabary-card.scss";

interface CardProps {
  isHiragana: boolean;
  type: string;
}

export const Card: React.FunctionComponent<CardProps> = ({
  isHiragana,
  type,
}) => {
  const height = 153;
  const width = 153;
  return (
    <div className={`syllabary-card${isHiragana ? "-hiragana" : "-katakana"}`}>
      <div className="syllabary-card-content">
        <img
          style={{ height, width }}
          src={`${process.env.PUBLIC_URL}/img/${
            isHiragana ? "hiragana" : "katakana"
          }/${type}.png`}
          alt={`${type} hiragana character`}
        />
        <span className="syllabary-card-char">{type.toLowerCase()}</span>
      </div>
    </div>
  );
};
