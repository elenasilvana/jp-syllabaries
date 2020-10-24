import React, { Fragment } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./home/home";
import { Syllabary } from "./syllabary/syllabary";
import { Play } from "./play/play";
import { About } from "./about/about";

import { TopNavMenu } from "./components/menu/topNavMenu";

function App() {
  return (
    <Fragment>
      <Router>
        <TopNavMenu>
          <Route path="/" exact component={Home} />
          <Route path="/syllabary" component={Syllabary} />
          <Route path="/play" component={Play} />
          <Route path="/about" component={About} />
        </TopNavMenu>
      </Router>
    </Fragment>
  );
}

export default App;
