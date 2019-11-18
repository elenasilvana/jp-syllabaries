import React, { useState, useEffect } from "react";
import SyllabaryBoard from "../syllabaryboard";
import "./styles.css";

import * as Deck from "../../deck";

export default function Syllabary() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);

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
    setCards(Deck.getKatakanaSyllabary());
  }, []);

  return (
    <div class="container">
      <div class="row">
        <div class="align-self-center justify-content-center">
          <h1 className="page-title">Katakana Syllabary</h1>
          <SyllabaryBoard
            cards={cards}
            flipped={flipped}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
  // }
}
