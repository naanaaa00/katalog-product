import React from 'react'
import { Carousel } from "react-bootstrap"
import p1 from "../img/caraosel/n.jpg"
import p2 from "../img/caraosel/mbk.jpg"
import p3 from "../img/caraosel/p.jpg"

const CarouselBisa = () => {
  return (
    <div>
       <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={p1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={p2}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p3}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselBisa