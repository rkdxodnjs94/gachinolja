import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ImgSlide(){

  const navigate = useNavigate();

  return (
    <Carousel className='container p-3'>
      <Carousel.Item interval={3000}>
        <img
        className="d-block w-100"
        src="/images/carousel/banner1.jpeg"
        alt="First slide"
        onClick={()=>{navigate('/event/1')}}
        style={{maxWidth: '1300px', maxHeight: '555px', cursor:'pointer'}}
        />
        <Carousel.Caption />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
        className="d-block w-100"
        src="/images/carousel/banner2.jpeg"
        alt="Second slide"
        onClick={()=>{navigate('/event/2')}}
        style={{maxWidth: '1300px', maxHeight: '555px', cursor:'pointer'}}
        />
        <Carousel.Caption />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
        className="d-block w-100"
        src="/images/carousel/banner3.jpeg"
        alt="Third slide"
        onClick={()=>{navigate('/event/3')}}
        style={{maxWidth: '1300px', maxHeight: '555px', cursor:'pointer'}}
        />
        <Carousel.Caption />
      </Carousel.Item>
    </Carousel>
  )
}

export default ImgSlide;
