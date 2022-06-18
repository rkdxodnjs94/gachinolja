import { Carousel } from 'react-bootstrap';
import { Suspense } from 'react';

function ImgSlide(){
  return (
    <Carousel className='container p-3'>
      <Carousel.Item interval={3000}>
        <img
        className="d-block w-100"
        src="/images/carousel/banner1.jpeg"
        alt="First slide"
        style={{maxWidth: '1300px', maxHeight: '555px'}}
        />
        <Carousel.Caption />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
        className="d-block w-100"
        src="/images/carousel/banner2.jpeg"
        alt="Second slide"
        style={{maxWidth: '1300px', maxHeight: '555px'}}
        />
        <Carousel.Caption />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
        className="d-block w-100"
        src="/images/carousel/banner3.jpeg"
        alt="Third slide"
        style={{maxWidth: '1300px', maxHeight: '555px'}}
        />
        <Carousel.Caption />
      </Carousel.Item>
    </Carousel>
  )
}

export default ImgSlide;
