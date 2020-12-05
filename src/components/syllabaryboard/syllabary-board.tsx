import React from "react";

import { Card } from "../syllabary-card/syllabary-card";

import "./syllabary-board.scss";

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

  const getCase = (type: string) => {
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

  return (
    <div className="syllabary-board-container">
      {cards.map((card: any) => (
        <div
          className={`${getCase(
            card.type.toLowerCase()
          )} syllabary-card-container`}
        >
          <Card isHiragana={isHiragana} type={card.type} />
        </div>
      ))}
    </div>
  );
};
