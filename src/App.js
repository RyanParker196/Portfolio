import React, { Component } from 'react';
import Nav from './components/Nav'
import Image from 'react-bootstrap/Image'
import Carousel from './components/Carousel'
import me from "./assets/me.jpg"
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="BigDiv">
        <div className="Avatar">
          <Image bg="dark" src={ me } alt="error loading img" roundedCircle />
        </div>
        <Nav />
        <header >
          {/* <h2 className="Greeting">
            View my recent projects by clicking any of the links below
          </h2> */}
        </header>
        <Carousel />
      </div>
    );
  }
}
