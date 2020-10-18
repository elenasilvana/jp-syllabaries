import React from "react";

import { Card } from "../card/card";

import "./syllabary-board.styles.scss";

interface BoardProps {
  cards: any[];
  isHiragana: boolean;
}

export const SyllabaryBoard: React.FunctionComponent<BoardProps> = ({
  cards,
  isHiragana,
}) => {
  const caseY = ["ya", "yu", "yo"];
  const caseW = ["wa", "wo"];
  const caseN = ["n"];

  const isValidCase = (type: string, referenceTypes: string[]) =>
    referenceTypes.indexOf(type) >= 0;

  const isCase = (type: string) => {
    if (isValidCase(type, caseY)) {
      return "w-30";
    }
    if (isValidCase(type, caseW)) {
      return "w-40";
    }
    if (isValidCase(type, caseN)) {
      return "w-100";
    } else {
      return "w-18";
    }
  };

  console.log("CARDS", cards);
  return (
    <div
      className="syllabary-board-container"
      style={{
        display: "flex",
        alignItems: "flex-start",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "center",
      }}
    >
      {cards.map((card: any) => (
        <div
          className={isCase(card.type.toLowerCase())}
          style={{
            padding: "3px 1px",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Card isHiragana={isHiragana} type={card.type} />
        </div>
      ))}
    </div>
  );
};
