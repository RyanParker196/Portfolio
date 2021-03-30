import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav'
import Avatar from './components/Avatar';
import Projects from './components/Projects'
import me from "./assets/me.jpg"
import buchi from './assets/Automate_de_Buchi2.jpg'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="BigDiv">
          <Avatar me={me} />
          <Nav />

          <Switch>
            <Route path={process.env.PUBLIC_URL + '/projects'}>
              <Projects />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/research'}>
              <Research />
            </Route>
            <Route path={process.env.PUBLIC_URL}>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
function Home() {
  return (
    <div className="Intro">
      <h1>Hi! I'm Ryan Parker,</h1>
      <h3 style={{ margin: '20px', textAlign: 'left' }}>
        I'm a graduate student pursuing a M.S. in computer science at The University of Vermont.
        My expected graduation is December 2021 and I'm actively looking for internship opportunities for this summer.
      </h3>
    </div>
  );
}

function Research() {
  return (
    <div>
      <div className="Intro">
        <h1>Büchi Automata</h1>
        <Image src={buchi} rounded></Image>
        <h2 style={{ margin: "50px", marginTop: "50px", textAlign: "left" }}>
          My research focuses on
          non-deterministic <a style={{ fontSize: "inherit" }} href="https://en.wikipedia.org/wiki/B%C3%BCchi_automaton" target="_blank" rel="noopener noreferrer">Büchi automaton</a>
          , an abstract mathematical
          model very similar to turing machines.
        </h2>
        <h2 style={{ margin: "50px", marginTop: "50px", textAlign: "left" }}>
          I contribute to the Lean 4 open source documentation by adding information about Lean 4's tactics mode. Which is
          a domain specific language within Lean 4. Tactics mode is used for interactive theorem proving
          and allows the programmer to work with the compiler in a goal based proofing platform.
        </h2>
        <h2>
          Recourses:
          <h2>1.
          <a className="linker" href={"https://leanprover.github.io/talks/LeanPLDI.pdf"} 
          target="_blank" rel="noopener noreferrer">LeanPLDI</a>
          </h2>
          <h2>2.
          <a className="linker" href={"https://leanprover.github.io/lean4/doc/"} target="_blank" rel="noopener noreferrer">LEAN 4 Docs</a>
          </h2>
        </h2>
      </div>
    </div>
  );
}
