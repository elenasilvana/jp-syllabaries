import React, { useState, useEffect } from "react";
import { SyllabaryBoard } from "../components/syllabaryboard/syllabary-board";
import * as Deck from "../deck";

import "./syllabary.styles.scss";

export const Syllabary = () => {
  const [cards, setCards] = useState([]);
  const [isHiragana, setisHiragana] = useState(false);
  const [isKatakana, setisKatakana] = useState(false);

  useEffect(() => {
    //@ts-ignore
    setCards(Deck.getSyllabaryDeck());
  }, []);

  console.log("hiragana ", isHiragana, " katakana ", isKatakana);

  return (
    <div className="syllabary__container">
      <div className="syllabary-title">
        <h1 className="page-title">
          {!isKatakana && !isHiragana
            ? "Select syllabary"
            : isKatakana
            ? "Katakana syllabary"
            : "Hiragana syllabary"}
        </h1>
        <div>
          <button
            className={`syllabary-btn-hiragana${isHiragana ? "-active" : ""}`}
            onClick={() => {
              setisHiragana(true);
              if (isKatakana) {
                setisKatakana(false);
              }
            }}
          >
            Hiragana
          </button>
          <button
            className={`syllabary-btn-katakana${isKatakana ? "-active" : ""}`}
            onClick={() => {
              setisKatakana(true);
              if (isHiragana) {
                setisHiragana(false);
              }
            }}
          >
            Katakana
          </button>
        </div>
      </div>
      <div
        className={`syllabary__board${
          !isHiragana && !isKatakana ? "-hide" : ""
        }`}
      >
        <SyllabaryBoard isHiragana={isHiragana} cards={cards} />
      </div>
    </div>
  );
};
