import React, { Component } from 'react';
import Nav from './components/Nav'
import Image from 'react-bootstrap/Image'
// import Carousel from './components/Carousel'
import me from "./assets/me.jpg"
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="BigDiv">
        <Nav />
        <Image src={ me } alt="error loading img" roundedCircle />
        {/* <Carousel /> */}

      </div>
    );
  }
}
