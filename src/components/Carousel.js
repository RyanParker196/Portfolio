import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Button } from 'react-bootstrap'
import haskell from '../assets/haskell.png'

export default function MyCarousel() {

  return (
    <Carousel className="Carousel">
      <Carousel.Item>
        <img
          src={ haskell }
          className="d-block w-100 poster"
          alt="First slide"
          bg="black"
        />
        <Carousel.Caption>
          <h3 style={{ color: "black" }} >Automatic Differentaion in Haskell</h3>
          <p style={{ color: "black" }} >
            Click the links below to see the source code
            or learn more information about Automatic Differentaion
          </p>
          <Button 
            target="_blank" 
            variant="success" 
            href="https://github.com/RyanParker196/Automatic-Differentiation" >
            Source Code
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100 poster"
          src="/git.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 poster"
          src="/git2.jpeg"
          alt="Third slide"
        />
        <p> test</p>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  )
}