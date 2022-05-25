import { Carousel } from 'react-bootstrap';

function ImgSlide(){
  return (
    <Carousel className='container p-3'>
      <Carousel.Item interval={3000}>
        <img
        className="d-block w-100"
        src="/images/card/photo1.jpeg"
        alt="First slide"
        style={{maxWidth: '1300px', maxHeight: '555px'}}
        />
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
        className="d-block w-100"
        src="/images/carousel/car2.png"
        alt="Second slide"
        style={{maxWidth: '1300px', maxHeight: '555px'}}
        />
        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
        className="d-block w-100"
        src="/images/carousel/car3.png"
        alt="Third slide"
        style={{maxWidth: '1300px', maxHeight: '555px'}}
        />
        <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ImgSlide;
