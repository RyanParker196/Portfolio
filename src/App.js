import React, { Component } from 'react';
import Nav from './components/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import me from "./assets/me.jpg"
import Avatar from './components/Avatar';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="BigDiv">
          <Avatar me={ me }/>
          <Nav />

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/research">
              <Research />
            </Route>
            <Route path="/">
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
    <div >
    </div>
  );
}

function Projects() {
  return (
    <div>
    </div>
  );
}

function Research() {
  return (
    <div>
    </div>
  );
}
