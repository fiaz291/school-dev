import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CardItems from '../../data/product.json'

function ShoppingCard() {
  return (
    <>
      <div className="card-slider-container">
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          dots={false}
          showIndicators={false}
          swipeable
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
              <div class="container">
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
      </div>
      {/* <div class="card">
            <div style={{position: 'relative'}}>
  <img src="/static/images/product.png" alt="Avatar" className="card-image" />
  <div className="cart-container">
    <FaShoppingCart/>
  </div>
  </div>
  <div class="container">
    <h4><b>Short steve t-shirt</b></h4>
    <div className="card-text">
    <div>Architect & Engineer</div>
    <div>$20.00</div>
    </div>
  </div>
</div> */}
    </>
  );
}

export default ShoppingCard;
