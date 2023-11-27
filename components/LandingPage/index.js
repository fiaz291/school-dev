import React from "react";
import ProductSlider from "../ProductSlider";
import ProductOptions from "../ProductOptions";
import OurProducts from "../OurProducts";
import Testimonials from "../Testimonials";
import OurInstagram from "../OurInstagram";
import BaseLayout from "../BaseLayout";
import styles from "./styles";

function LandingPage() {
  return (
    <BaseLayout>
      <section className="hero-section">
        <h1>Best Seller</h1>
        <p>Some of our best and most frquently bought products</p>

        <ul className="weather-options">
          <li>Summer</li>
          <li>Winter</li>
          <li>Fall</li>
          <li>Spring</li>
        </ul>
        <ProductSlider />
      </section>
      <section className="middle-section">
        <div className="product-container">
          <div className="product-card">
            <div className="text-block">
              <h3>Back to school sale</h3>
              <p>71 items</p>
              <p>shop Now</p>
            </div>
          </div>
          <ProductOptions />
        </div>
      </section>
      <section className="middle-section">
        <div className="product-container">

          <OurProducts />
        </div>
      </section>
      <section>
        <div className="bottom-section">
          <Testimonials />
        </div>
        <div className="button-container">
          <button>Write a Quote</button>
        </div>
      </section>

      <section>
        <OurInstagram />
      </section>
      <style jsx>{styles}</style>
    </BaseLayout>
  );
}

export default LandingPage;
