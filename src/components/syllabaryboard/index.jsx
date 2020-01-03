import React from "react";
import propTypes from "prop-types";

import SyllabaryCard from "../syllabarycard";

export default function SyllabaryBoard({
  cards,
  flipped,
  handleClick,
  isHiragana
}) {
  return (
    <div className="board">
      {cards.map(card => (
        <SyllabaryCard
          key={card.id}
          id={card.id}
          type={card.type}
          width={150}
          height={150}
          flipped={flipped.includes(card.id)}
          handleClick={() => handleClick(card.id)}
          isHiragana={isHiragana}
        />
      ))}
    </div>
  );
}

SyllabaryBoard.propTypes = {
  cards: propTypes.arrayOf(propTypes.shape({})).isRequired,
  flipped: propTypes.arrayOf(propTypes.number).isRequired,
  handleClick: propTypes.func.isRequired,
  isHiragana: propTypes.bool.isRequired
};
