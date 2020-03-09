import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Card from './components/Card'
import Nav from './components/Nav'
import Avatar from './components/Avatar';
import me from "./assets/me.jpg"
import haskell from './assets/haskell.png'
import git from './assets/git.jpg'
import logo from './assets/logo512.png'
import c from './assets/c.jpg'
import cpp from './assets/cpp.jpg'
import agda from './assets/agda.jpg'
import otm from './assets/otm.jpg'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="BigDiv">
          <Avatar me={me} />
          <Nav />

          <Switch>
            <Route path={process.env.PUBLIC_URL + '/display'}>
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

function Projects() {
  return (
    <div className="row Projects">
      <Card 
      img={ haskell }
      btn="Source code"
      link="https://github.com/RyanParker196/Automatic-Differentiation"
      title="Automatic Differentiation" 
      text="Completed forward and reverse mode Automatic Differentiation
      implemented in Haskell" />
      <Card 
      img={ cpp }
      btn="Source code"
      link="https://github.com/RyanParker196/Zombie_Survival"
      title="Zombie Survival Game" 
      text="Created a 2D zombie survival game using GLUT and OpenGL implemented
      in C++" />
      <Card 
      img={ logo }
      btn="Source code"
      link="https://github.com/RyanParker196/portfolio"
      title="My React Portfolio" 
      text="Teaching myself React to explore new technologies and increase my
      web development efficiency" />
      <Card 
      img={ git }
      btn="Source code"
      link="https://github.com/RyanParker196/Haskell-Compiler/blob/master/a3/Compiler.hs"
      title="X86 Assembly Compiler" 
      text="Created a compiler in Haskell to convert a custom low level programming 
      language into X86-Assembly" />
      <Card 
      img={ c }
      btn="Source code"
      link="https://github.com/RyanParker196/201-HDD-Simulation/blob/master/HDDsimugrad.reparker.c"
      title="HDD Simulation" 
      text="A simulation in C to compare the difference between various
      hard disk drive scheduling methods" />
      <Card 
      img={ agda }
      btn="Source code"
      link="https://github.com/RyanParker196/Agda-Proof-of-the-Chinese-Remainder-Theorem/blob/master/final.agda"
      title="Proof of the Chinese Remainder Theorem" 
      text="Using Agda, an interactive theorem proving programing 
      language based off of Coq" />
      <Card 
      img={ c }
      btn="Source code"
      link="https://github.com/RyanParker196/PQ/blob/master/scheduler.reparker.c"
      title="Priority Queue Simulation" 
      text="A simulation in C to compare the difference between various
      processor scheduling methods used by the CPU" />
      <Card 
      img={ otm }
      link="https://oaktreemanagement.com/"
      btn="View Website"
      title="Website Development" 
      text="Created and manage Oak Tree Management's website" />
    </div>
  );
}

function Research() {
  return (
    <div>
      <h1>Coming soon!</h1>
    </div>
  );
}
