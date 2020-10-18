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
            <SyllabaryBoard isHiragana={isHiragana} cards={cards} />
          </div>
        </div>
      </div>
    </div>
  );
};
