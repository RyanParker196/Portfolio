import React, { Component } from 'react';
import Nav from './components/Nav'
import Image from 'react-bootstrap/Image'
import Carousel from './components/Carousel'

export default class App extends Component {
  render() {
    return (
      <div >
        <div>
          <Image bg="dark" src="/me.jpg" alt="error loading img" roundedCircle />
        </div>
        <Nav />
        <header >
          <h2 >
            View my recent projects by clicking any of the links below
        </h2>
          <Carousel />
        </header>
      </div>
    );
  }
}
