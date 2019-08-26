import React, { useState, useEffect } from 'react';
import SyllabaryBoard from '../syllabaryboard';

import * as Deck from '../../deck'

export default function Syllabary() { 
//export default class Syllabary extends Component {
    //render(){
    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([])

    const handleClick = (id) => setFlipped([...flipped, id])

    useEffect(()=>{
        setCards(Deck.getKatakanaSyllabary())
    }, [])

        return(
            <div class="container">
                <div class="row">
                    <div class="align-self-center justify-content-center">
                        <h1>Katakana Syllabary</h1>
                        <SyllabaryBoard
                        cards={cards}
                        flipped={flipped}
                        handleClick={handleClick}
                        />
                       
                    </div>
                </div>
            </div>
        )
   // }
}