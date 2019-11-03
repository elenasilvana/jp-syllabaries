import { KATAKANA } from "./utils/syllabariesCharacters";
import Syllabary from "./utils/syllabary";

function shuffle(array) {
  const _array = array.slice(0);
  for (let i = 0; i < array.length - 1; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = _array[i];
    _array[i] = _array[randomIndex];
    _array[randomIndex] = temp;
  }
  return _array;
}

export function getKatakanaSyllabary() {
  let id = 0;
  const SyllabariesChar = [...KATAKANA];
  const katakanaCards = SyllabariesChar.reduce((acc, type) => {
    acc.push({
      id: id++,
      type
    });
    return acc;
  }, []);
  return katakanaCards;
}

const CARDS_NUMBER = 16;
export function initializeDeck() {
  //función para generar baraja aleatoria a partir del silabario
  const syllabary = Syllabary();
  console.log("syllabary ", syllabary);

  let cards = [];
  let id = 0;
  while (cards.length < CARDS_NUMBER) {
    const index = Math.floor(Math.random() * syllabary.length);
    cards.push({
      id: id++,
      type: syllabary.splice(index, 1)[0]
    });
    cards.push({
      id: id++,
      type: syllabary.splice(index, 1)[0]
    });
    console.log(cards);
  }
  return shuffle(cards);
}
