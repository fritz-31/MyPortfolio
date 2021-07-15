import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './my-carousel.css'
import Slide1 from '../../assets/img/carousel/slide1.webp'
import Slide2 from '../../assets/img/carousel/slide2.webp'
import Slide3 from '../../assets/img/carousel/slide3.webp'
import { ScrollDown } from '../scroll-down/scroll_down'

export const MyCarousel = () => {
    return (
        <div id="home">
            <Carousel fade controls={false} indicators interval={2500} pause={false}>
  <Carousel.Item>
    <img className="d-block w-100 custom-img"src={Slide1} alt="First slide"/>
    </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100 custom-img" src={Slide2} alt="Second slide"/>
</Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100 custom-img" src={Slide3}malt="Third slide"/>
</Carousel.Item>
</Carousel>
<ScrollDown/>
        </div>
    );
}
