import React, { useState, useEffect } from "react";
import SyllabaryBoard from "../syllabaryboard";
import aKatakana from "../../layouts/akatakana.svg";
import aHiragana from "../../layouts/ahiragana.svg";
import "./styles.css";

import * as Deck from "../../deck";

export default function Syllabary() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [isHiragana, setisHiragana] = useState(false);
  const [isKatakana, setisKatakana] = useState(false);

  const handleClick = id => {
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

  const sameCardClicked = id => flipped.includes(id);

  useEffect(() => {
    setCards(Deck.getSyllabaryDeck());
  }, []);

  console.log("hiragana ", isHiragana, " katakana ", isKatakana);

  return (
    <div class="container">
      <div class="row">
        <div class="align-self-center justify-content-center">
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
              <img src={aKatakana} style={{ width: "70px" }} />
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
              <img src={aHiragana} style={{ width: "70px" }} />
            </button>
          </div>
          <div className={isHiragana || isKatakana ? "" : "hide"}>
            <SyllabaryBoard
              isHiragana={isHiragana}
              isKatakana={isKatakana}
              cards={cards}
              flipped={flipped}
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
