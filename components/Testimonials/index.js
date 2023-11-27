import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useResponsiveWindow from "@/hooks/useResponsiveWindow";
import Slider from "react-slick";
import CardSlider from "../MobileSilder";
import classNames from "classnames";
import styles from './styles'

const TESTIMONIALS_OPTIONS = [
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/static/images/profile-pic.png",
    userName: "John doe",
  },
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/static/images/profile-pic.png",
    userName: "John doe",
  },
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/static/images/profile-pic.png",
    userName: "John doe",
  },
];

const settings = {
  dots: true, // Disable dots
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, // Disable arrows
  draggable: true, // Enable dragging/swiping
};

const MobileSlider = ({ data }) => {
return(
  <>
    <Slider {...settings}>
    {data?.map((item, index)=>(
        <div key={index} style={{display:'flex', justifyContent: 'center'}}>
        <div className="testimonial-wrapper" key={index}>
          <img
            src="/static/images/commas.png"
            alt="comma-icon"
            className="comma-icon"
          />
          <div className="description">{item.content}</div>
          <div className="hr-line"></div>
          <img src={item.image} alt="profile-logo" className="profile-logo" />
          <div>{item.userName}</div>
        </div>
      </div>
    ))}
    </Slider>
    <style jsx>{styles}</style>
  </>
)
};

const Testimonials =() => {
  const isMobile = useResponsiveWindow();

  return (
    <>
      <div className="title">Testimonials</div>
      <div className="sub-title">What our Customer say about us</div>
      <div className={classNames("testimonial-main-container",{
        'testimonial-mobile-container': isMobile, 
      })}>
        {isMobile ? (<MobileSlider data = {TESTIMONIALS_OPTIONS} />) : (
          TESTIMONIALS_OPTIONS?.map((item, index) => (
            <div
              key={index}
              className="testimonial-container"
              style={{
                position: index === 1 && "relative",
                top: index === 1 && "-30px",
              }}
            >
              <div className="testimonial-wrapper" key={index}>
                <img
                  src="/static/images/commas.png"
                  alt="comma-icon"
                  className="comma-icon"
                />
                <div className="description">{item.content}</div>
                <div className="hr-line"></div>
                <img
                  src={item.image}
                  alt="profile-logo"
                  className="profile-logo"
                />
                <div>{item.userName}</div>
              </div>
            </div>
          ))
        )}
        {/* {!isMobile &&
          TESTIMONIALS_OPTIONS?.map((item, index) => (
            <div
              key={index}
              className="testimonial-container"
              style={{
                position: index === 1 && "relative",
                top: index === 1 && "-30px",
              }}
            >
              <div className="testimonial-wrapper" key={index}>
                <img
                  src="/static/images/commas.png"
                  alt="comma-icon"
                  className="comma-icon"
                />
                <div className="description">{item.content}</div>
                <div className="hr-line"></div>
                <img
                  src={item.image}
                  alt="profile-logo"
                  className="profile-logo"
                />
                <div>{item.userName}</div>
              </div>
            </div>
          ))} */}
      </div>
          <style jsx>{styles}</style>
    </>
  );
}

export default Testimonials;
