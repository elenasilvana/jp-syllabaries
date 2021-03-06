import React from "react";
import { ColorSelector } from "../components/color-selector/color-selector";
import { GameBoard } from "../components/memory-board/memory-game-board";
import { initializeDeck } from "../deck";

import "./play.styles.scss";

const COLORS = [
  {
    name: "pink",
    code: "#f39d91",
  },
  {
    name: "yellow",
    code: "#f8b133",
  },
  {
    name: "grey",
    code: "#6a7e85",
  },
];

const KATAKANA_PALETTE = [
  {
    name: "green",
    code: "#11584a",
  },
  {
    name: "yellow",
    code: "#f8b133",
  },
  {
    name: "grey",
    code: "#6a7e85",
  },
];

export const Play = () => {
  const [isHiragana, setisHiragana] = React.useState(false);
  const [isKatakana, setisKatakana] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [flipped, setFlipped] = React.useState([]);
  const [dimension, setDimension] = React.useState(400);
  //tracking the ids from the solved cards
  const [solved, setSolved] = React.useState([]);
  //disabled the board when a card has been flipped and when are two cards
  const [disabled, setDisabled] = React.useState(false);

  const [selectedColor, setSelectedColor] = React.useState(
    getDefaultColor(COLORS)
  );

  React.useEffect(() => {
    resizeBoard();
    //@ts-ignore
    setCards(initializeDeck());
  }, []);

  React.useEffect(() => {
    preloadImages();
  }, cards);

  React.useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard);
    //@ts-ignore
    return () => window.removeEventListener("resize", resizeListener);
  });

  const handleClick = (id: any) => {
    setDisabled(true);
    if (flipped.length === 0) {
      //@ts-ignore
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      //@ts-ignore
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        //@ts-ignore
        setSolved([...solved, flipped[0], id]);
        resetCards();
      } else {
        setTimeout(resetCards, 2000);
      }
    }
  };

  const preloadImages = () => {
    cards.map((card) => {
      //@ts-ignore
      const src = `${process.env.PUBLIC_URL}/img/katakana/${card.type}.png`;
      new Image().src = src;
    });
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  //@ts-ignore
  const sameCardClicked = (id: any) => flipped.includes(id);

  const isMatch = (id: any) => {
    //@ts-ignore
    const clickedCard = cards.find((card) => card.id === id);
    //@ts-ignore
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    //@ts-ignore
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

  function getDefaultColor(colors: any[]) {
    if (colors.length > 0) {
      return colors[0].code;
    }
  }

  return (
    <div className="play__container">
      <div className="play-title">
        <span className="play-display-instruction">
          {!isHiragana && !isKatakana
            ? "Select syllabary type to start playing"
            : isHiragana
            ? "Playing with Hiragana"
            : "Playing with Katakana"}
        </span>
        <div className="play-selection-controls">
          <div>
            <div>
              <button
                className={`syllabary-btn-hiragana${
                  isHiragana ? "-active" : ""
                }`}
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
                className={`syllabary-btn-katakana${
                  isKatakana ? "-active" : ""
                }`}
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
            {(isHiragana || isKatakana) && (
              <div className="play-selection-color">
                <ColorSelector colors={COLORS} setSelected={setSelectedColor} />
                <ColorSelector
                  colors={KATAKANA_PALETTE}
                  setSelected={setSelectedColor}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`play-board${!isHiragana && !isKatakana ? "-hide" : ""}`}>
        <h3 style={{ paddingTop: "60px" }}>
          do you remember where the pair card is?
        </h3>
        <GameBoard
          dimension={dimension}
          cards={cards}
          flipped={flipped}
          handleClick={handleClick}
          disabled={disabled}
          solved={solved}
          isHiragana={isHiragana}
          selectedColor={selectedColor}
        />
      </div>
    </div>
  );
};
