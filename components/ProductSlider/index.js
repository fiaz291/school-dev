import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaShoppingCart } from "react-icons/fa";
import CardItems from '../../data/product.json'
import styles from "./styles";

function ProductSlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="carousel-container">
      <Carousel
        responsive={responsive}
        swipeable={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        infinite
      >
        {CardItems.map((item, index) => (
          <div key={index} className="card">
            <div style={{ position: "relative" }}>
              <img
                src={item.image}
                alt="Avatar"
                className="card-image"
              />
              <div className="cart-container">
                <FaShoppingCart />
              </div>
            </div>
            <div className="container">
              <h4>
                <b>{item.title}</b>
              </h4>
              <div className="card-text">
                <div>{item.product_name}</div>
                <div>{item.price}</div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="button-container">
        <button>See More</button>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
}

export default ProductSlider;
