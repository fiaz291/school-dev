import css from "styled-jsx/css";

export default css`

.testimonial-main-container {
    right: 5%;
    display: flex;
    gap: 10px;
    position: absolute;
    bottom: -50px;
    left: 5%;
  }
  .testimonial-mobile-container {
    right: 0;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
  }

  .testimonial-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 50px;
  }
  .testimonial-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 30px 20px 30px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  
  .comma-icon {
    width: 20px;
    height: 20px;
    margin-bottom: 20px;
  }
  
  .profile-logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #000;
    margin-bottom: 10px;
  }

  .hr-line {
    height: 1px;
    background: #000;
    width: 10%;
    margin-top: 15px;
    margin-bottom: 10px;
  }
  
  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-align: center;
  }

  @media(max-width: 768px) {
    .testimonial-wrapper {
      margin-top: 130px;
      max-width: 260px;
      }
  }
`