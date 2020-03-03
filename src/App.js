import React, { Component } from 'react';
import Nav from './components/Nav'
import Image from 'react-bootstrap/Image'
import Carousel from './components/Carousel'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="Avatar">
          <Image bg="dark" src="/me.jpg" alt="error loading img" roundedCircle />
          <Image src="/forest.jpg" alt="error" className="Banner"/>
        </div>
        <Nav />
        <header >
          <h2>
            View my recent projects by clicking any of the links below
            </h2>
          <Carousel />
        </header>
      </div>
    );
  }
}
