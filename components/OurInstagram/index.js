import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import styles from "./styles";

function OurInstagram() {
  return (
    <>
      <div className="our-product-container">
        <div className="our-product-wrapper">
          <div className="divider" />
          <div className="our-product-header">
            <h1>Our Instagram</h1>
          </div>
          <div className="divider" />
        </div>
      </div>
      <div className="instagram-block-container">
        <div className="instagram-block-wrapper">
          <div className="instagram-image-container">
            <img
              src="/static/images/school-child.png"
              alt="school"
              className="school-uniform-image"
            />
            <img
              src="/static/images/school-child.png"
              alt="school"
              className="school-uniform-image"
            />
            <img
              src="/static/images/school-child.png"
              alt="school"
              className="school-uniform-image"
            />
            <img
              src="/static/images/school-child.png"
              alt="school"
              className="school-uniform-image"
            />
          </div>
          <div className="instagram-link">
            <a target="_blank" href="#">
              Follow Our Instagram
            </a>
            <AiOutlineInstagram />
          </div>
          <div className="hr-container">
            <div className="dark-line" />
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}

export default OurInstagram;
