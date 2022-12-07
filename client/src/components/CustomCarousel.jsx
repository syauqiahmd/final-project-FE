import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../assets/banner/1.jpg'
import banner2 from '../assets/banner/2.jpg'
import banner3 from '../assets/banner/3.jpg'
import banner4 from '../assets/banner/4.jpg'
import banner5 from '../assets/banner/5.jpg'

function CustomCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner4}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner5}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;