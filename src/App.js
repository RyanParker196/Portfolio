import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav'
import Avatar from './components/Avatar';
import Projects from './components/Projects'
import me from "./assets/me.jpg"

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
      <h2>A senior Computer Science major currently working as an Undergraduate Research Assistant at The University of Vermont</h2>
    </div>
  );
}

function Research() {
  return (
    <div>
      <h1>Comings Soon</h1>
    </div>
  );
}
