import React, { Component } from 'react';
import Nav from './components/Nav'
import Image from 'react-bootstrap/Image'
import Carousel from './components/Carousel'

export default class App extends Component {
  render() {
    return (
      <div>
        <Image bg="dark" src="/me.jpg" roundedCircle />
        <Nav />
        <header >
          <h1 >
            Welcome to my first React App!
        </h1>
        <Carousel />
        </header>
      </div>
    );
  }
}
