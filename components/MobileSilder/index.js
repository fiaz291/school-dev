// components/CardSlider.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// data/cardsData.js
const cardsData = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      image: '/image1.jpg',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      image: '/image2.jpg',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
      image: '/image3.jpg',
    },
  ];
  
  

const CardSlider = ({ cards }) => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Show arrows for navigation
  };

  return (
    <Slider {...settings}>
      {cardsData?.map((card, index) => (
        <div key={index}>
          <div className="card">
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;
