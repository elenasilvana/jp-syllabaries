import React, { useState, useEffect } from "react";
import { SyllabaryBoard } from "../components/syllabaryboard/syllabary-board";
import "./syllabary.styles.scss";

import * as Deck from "../deck";
import { Card } from "../components/card/card";

export const Syllabary = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [isHiragana, setisHiragana] = useState(false);
  const [isKatakana, setisKatakana] = useState(false);

  const handleClick = (id: string) => {
    if (flipped.length === 0) {
      setFlipped([id]);
    }
    if (sameCardClicked(id)) {
      return setFlipped([]);
    }
    if (flipped.length === 1) {
      resetCard();
      setFlipped([id]);
    }
  };

  const resetCard = () => {
    setFlipped([]);
  };

  const sameCardClicked = (id: string) => flipped.includes(id);

  useEffect(() => {
    //@ts-ignore
    setCards(Deck.getSyllabaryDeck());
  }, []);

  console.log("hiragana ", isHiragana, " katakana ", isKatakana);

  return (
    <div className="container">
      <div className="row">
        <div className="align-self-center justify-content-center">
          <h1 className="page-title">
            {!isKatakana && !isHiragana
              ? "Select syllabary"
              : isKatakana
              ? "Katakana syllabary"
              : "Hiragana syllabary"}
          </h1>
          <div>
            <button
              className="icon-button"
              onClick={() => {
                setisKatakana(true);
                if (isHiragana) {
                  setisHiragana(false);
                }
              }}
            >
              Katakana
            </button>
            <button
              className="icon-button"
              onClick={() => {
                setisHiragana(true);
                if (isKatakana) {
                  setisKatakana(false);
                }
              }}
            >
              Hiragana
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className={isHiragana || isKatakana ? "" : "hide"}
          >
            <SyllabaryBoard
              isHiragana={isHiragana}
              //isKatakana={isKatakana}
              cards={cards}
              flipped={flipped}
              //handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
