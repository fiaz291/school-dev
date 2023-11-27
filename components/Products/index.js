import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import classNames from "classnames";
import styles from "./styles";

function Products({cardWidth, products}) {

  const cardToShow = cardWidth ? 6 : 8;
  const moreCardShow = cardWidth ? 3 : 4;


  const [visibleProducts, setVisibleProducts] = useState(cardToShow); // Initially, display 4 products

  const handleSeeMoreClick = () => {
    // When the "See More" button is clicked, increment the number of visible products
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + moreCardShow);
  };

  return (
    <>
      <div className="all-products">
        {products?.slice(0, visibleProducts)?.map((item, index) => (
          <div key={index} className={classNames({
            'increase-card-width': cardWidth,
            'product-cards': !cardWidth,
          })}>
            <div style={{ position: "relative" }}>
              <img src={item.image} alt="Avatar" className="card-image" />
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
      </div>
      {visibleProducts < products.length && (
        <div className="button-container">
          <button onClick={handleSeeMoreClick}>See More</button>
        </div>
      )}
      <style jsx>{styles}</style>
    </>
  );
}

export default Products;
