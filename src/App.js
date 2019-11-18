import React, { useState } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import styled from "styled-components";

import HomePage from "./components/Home";
import SyllabaryPage from "./components/Syllabary";
import GamePage from "./components/Game";
import MemoryGamePage from "./components/MemoryGame";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => {
    if (!collapsed) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
    return collapsed ? setCollapsed(false) : setCollapsed(true);
  };

  return (
    <div className="App">
      <Router>
        <div>
          <Navbar color="faded" light>
            <NavbarBrand className="mr-auto">
              <Link to="/">Learn Syllabaries</Link>
            </NavbarBrand>
            <NavbarToggler
              onClick={() => {
                toggleNavbar();
              }}
              className="mr-2"
            />
            <Collapse isOpen={collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink>
                    <Link to="/syllabary">Syllabaries</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link to="/memorygame">Play</Link>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Route path="/" exact component={HomePage} />
          <Route path="/syllabary" component={SyllabaryPage} />
          <Route path="/game" component={GamePage} />
          <Route path="/memorygame" component={MemoryGamePage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
