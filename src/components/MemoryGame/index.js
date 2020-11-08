import React, { Component, useState, useEffect } from "react";
import Board from "../memory-board/memory-game-board";
import { initializeDeck } from "../../deck";

import aHiragana from "../../layouts/ahiragana.svg";
import aKatakana from "../../layouts/akatakana.svg";

export default function MemoryGame() {
  const [isHiragana, setisHiragana] = useState(false);
  const [isKatakana, setisKatakana] = useState(false);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(400);
  //tracking the ids from the solved cards
  const [solved, setSolved] = useState([]);
  //disabled the board when a card has been flipped and when are two cards
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);

  useEffect(() => {
    preloadImages();
  }, cards);

  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard);

    return () => window.removeEventListener("resize", resizeListener);
  });

  const handleClick = (id) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards();
      } else {
        setTimeout(resetCards, 2000);
      }
    }
  };

  const preloadImages = () => {
    cards.map((card) => {
      const src = `${process.env.PUBLIC_URL}/img/katakana/${card.type}.png`;
      console.log(src);
      new Image().src = src;
    });
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const sameCardClicked = (id) => flipped.includes(id);

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type;
  };

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };

  return (
    <div>
      <div>
        <h1>
          {!isHiragana && !isKatakana
            ? "Select syllabary"
            : isHiragana
            ? "Playing with Hiragana"
            : "Playing with Katakana"}
        </h1>
        <div className="select-buttons">
          <button
            className="icon-button"
            onClick={() => {
              setisHiragana(true);
              if (isKatakana) {
                setisKatakana(false);
              }
            }}
          >
            <img style={{ width: "70px" }} src={aHiragana} />
          </button>
          <button
            className="icon-button"
            onClick={() => {
              setisKatakana(true);
              if (isHiragana) {
                setisHiragana(false);
              }
            }}
          >
            <img style={{ width: "70px" }} src={aKatakana} />
          </button>
        </div>
      </div>
      <div className={!isHiragana && !isKatakana ? "hide" : ""}>
        <h3 style={{ paddingTop: "60px" }}>
          do you remember where the pair card is?
        </h3>

        <Board
          dimension={dimension}
          cards={cards}
          flipped={flipped}
          handleClick={handleClick}
          disabled={disabled}
          solved={solved}
          isHiragana={isHiragana}
        />
      </div>
    </div>
  );
}
