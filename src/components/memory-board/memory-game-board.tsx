import React from "react";

import { MemoryCard } from "../memorycard/memory-card";

import "./styles.css";

interface BoardProps {
  disabled: boolean;
  dimension: number;
  cards: any[];
  flipped: any[];
  solved: any[];
  isHiragana: boolean;
  selectedColor: string;
  handleClick: (id: any) => void;
}

export const GameBoard: React.FunctionComponent<BoardProps> = ({
  disabled,
  dimension,
  cards,
  flipped,
  solved,
  selectedColor,
  handleClick,
  isHiragana,
}) => {
  return (
    <div className="board">
      {cards.map((card: any) => (
        <MemoryCard
          key={card.id}
          id={card.id}
          type={card.type}
          char={card.char}
          width={dimension / 4.5}
          height={dimension / 4.5}
          //@ts-ignore
          flipped={flipped.includes(card.id)}
          //@ts-ignore
          solved={solved.includes(card.id)}
          handleClick={handleClick}
          //@ts-ignore
          disabled={disabled || solved.includes(card.id)}
          isHiragana={isHiragana}
          selectedColor={selectedColor}
        />
      ))}
    </div>
  );
};
