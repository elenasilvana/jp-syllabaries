import React, { Component, useState, useEffect } from "react";
import Board from "../board";
import { initializeDeck } from "../../deck";

import Modal from "../modal/modal.js";

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
  const [isShowing, setisShowing] = useState(false);

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

  useEffect(() => {
    if (cards.length > 1 && cards.length === solved.length) {
      setisShowing(true);
      console.log("is showing", isShowing);
    }
  }, [cards, solved]);

  const handleClick = id => {
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
    cards.map(card => {
      const src = `${process.env.PUBLIC_URL}/img/katakana/${card.type}.png`;
      console.log(src);
      new Image().src = src;
    });
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const sameCardClicked = id => flipped.includes(id);

  const isMatch = id => {
    const clickedCard = cards.find(card => card.id === id);
    const flippedCard = cards.find(card => flipped[0] === card.id);
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

  const openModalHandler = () => {
    setisShowing(true);
  };

  const handleClose = () => {
    setisShowing(false);
  };

  //console.log("cards", cards);
  //console.log("solved", solved);
  console.log("is showing", isShowing);

  return (
    <div>
      <div>
        <div></div>
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
      <div
        className={!isHiragana && !isKatakana ? "hide" : ""}
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <h3 style={{ paddingTop: "60px" }}>
          do you remember where the pair card is?
        </h3>
        <Modal
          modalTitle={"Congratulations!!"}
          show={isShowing}
          handleClose={handleClose}
          children={"Game completed, would you like to play again?"}
        />
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
