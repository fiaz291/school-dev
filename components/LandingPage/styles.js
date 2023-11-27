import css from "styled-jsx/css";

export default css `
.hero-section > h1 {
    text-align: center;
    color: #000;
  }
  .hero-section > p {
    text-align: center;
    color: #000;
  }

  .weather-options {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
  
  .weather-options > li {
    margin-left: 10px;
    list-style-type: none;
  }
  .middle-section {
    display: flex;
    justify-content: center;
  }
  .product-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .product-card {
    background-image: url(/static/images/sample.png);
    background-repeat: no-repeat;
    background-size: cover;
    width: 66%;
    height: 250px;
  }
  .bottom-section {
    background-color: #3b4463;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px 50px 0 50px;
    height: 335px;
    position: relative;
    margin-top: 20px;
  }

  .button-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .button-container > button {
    background-color: #32425c;
    border: none;
    color: #fff;
    margin-top: 40px;
    margin-bottom: 30px;
    text-transform: uppercase;
    padding: 10px 20px 10px 20px;
    cursor: pointer;
  }

  @media only screen and (max-width: 1200px) {
    .product-card {
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    .bottom-section {
      padding: 20px;
      height: 260px;
    }
    .product-card {
        background-repeat: no-repeat;
        width: 100%;
        height: 250px;
      }
      .button-container > button {

        margin-top: 130px;
       }
  }
`