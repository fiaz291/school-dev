import css from "styled-jsx/css";

export default css `
.increase-card-width {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 32%;
    margin-bottom: 20px;
  }
  
  .all-products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .product-cards {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 24%;
    margin-bottom: 25px;
  }

  .card-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

  @media (max-width: 768px) {
    .product-cards {
    width: 48%;
    }
    .increase-card-width {
      width: 300px;
    }
  }

  @media (max-width: 576px) {
    .product-cards {
    width: 80%;
    }
    .all-products {
        justify-content: center;
      }
      .increase-card-width {
        width: 350px;
      }
  }

`