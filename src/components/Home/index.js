import React, { Component } from "react";
import aKatakana from "../../layouts/akatakana.svg";
import aHiragana from "../../layouts/ahiragana.svg";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <h1>Japanese Syllabaries</h1>

          <p>
            {" "}
            If you are interested on learn the japanese syllabaries we invite
            you to get familiar with the katakana syllabary on our Syllabaries
            section, and to play with a syllabary memory game to prove your
            memory!
          </p>
          <img src={aKatakana} style={{ width: "200px", heigth: "200px" }} />
          <img src={aHiragana} style={{ width: "200px", heigth: "200px" }} />
        </div>
      </div>
    );
  }
}
