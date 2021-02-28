import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselHead = () => {
  return (
    <Carousel >
      <Carousel.Item className="carousel-height">
        <img
          className="d-block w-100 img-fluid carousel-img"
          src="https://www.pedigree.com/images/default-source/article-images/labrador-puppy-eating-out-of-hand-sunset-942x344.tmb-header-sm.jpg?sfvrsn=79196249_0"
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3 className="carousel-title">Choose your friend!</h3>
          <p className="carousel-description">Select a friend from the list of breeds.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-height">
        <img
          className="d-block w-100 img-fluid carousel-img"
          src="https://moderndogmagazine.com/sites/default/files/images/articles/top_images/tamu_obedience_header_0.jpg"
          alt="Second slide"
          
        />
        <Carousel.Caption>
          <h3 className="carousel-title">Make a team!</h3>
          <p className="carousel-description">Make a team with the best.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-height">
        <img
          className="d-block w-100 img-fluid carousel-img"
          src="https://www.thelabradorsite.com/wp-content/uploads/2012/08/send-dog-away.jpg"
          alt="Third slide"
          
        />
        <Carousel.Caption>
          <h3 className="carousel-title">Have a lot of fun!</h3>
          <p className="carousel-description">Please strongly encourage you to have fun.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHead;
