import React, { useState, useEffect } from "react";

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
    <div
      style={{
        background: "#F39D91",
        borderRadius: "70px",
        position: "relative",
      }}
    >
      <div
        className="card"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "182px",
        }}
      >
        <img
          style={{ height, width }}
          src={`${process.env.PUBLIC_URL}/img/${
            isHiragana ? "hiragana" : "katakana"
          }/${type}.png`}
          alt={`${type} hiragana character`}
        />
        <span
          style={{
            color: "white",
            position: "absolute",
            bottom: "25px",
            right: "25px",
          }}
        >
          {type.toLowerCase()}
        </span>
      </div>
    </div>
  );
};
