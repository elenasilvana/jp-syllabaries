import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import HomePage from './components/Home';
import Syllabary from './components/Syllabary';
import GamePage from './components/Game';
import MemoryGamePage from './components/MemoryGame';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/syllabary">Syllabary</Link>
            </li>
            <li>
              <Link to="/game">Play to learn</Link>
            </li>
            <li>
              <Link to="/memorygame">Memory game</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={HomePage} />
        <Route path="/syllabary" component={Syllabary} />
        <Route path="/game" component={GamePage} />
        <Route path="/memorygame" component={MemoryGamePage} />
      </div>
    </Router>
     
    </div>
  );
}

export default App;
