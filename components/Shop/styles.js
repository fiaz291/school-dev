import css from "styled-jsx/css";

export default css`
  .title {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 30px;
    color: #000;
    text-align: left;
  }
  .shop-main-container {
    padding: 0 50px;
  }
  .shop-main-container > h1 {
    color: #000;
    margin: 0;
  }

  .shop-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .search-container {
    display: flex;
    align-items: center;
    border: 1px solid #000;
    border-radius: 30px;
    padding: 5px 10px 5px 20px;
  }

  .search-container > input {
    border: none;
    height: 30px;
  }

  .search-container > input:focus {
    outline: none;
  }

  .options-container {
    display: flex;
    align-items: center;
  }

  .options-container > p {
    margin-left: 15px;
    color: #000;
  }

  .shop-divider {
    height: 1px;
    background-color: #000;
    width: 100%;
  }

  .inner-section {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }

  .product-left-side {
    width: 70%;
  }

  .product-right-side {
    width: 25%;
  }

  .right-box {
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 30px;
  }

  .right-box:first-child {
    margin-top: 0;
  }

  .product-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .product-option > p {
    color: #000;
    margin-right: 10px;
  }

  .menu-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .sort-text {
    font-size: 12px;
    margin-left: 10px;
  }

  .product-menu {
    display: flex;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 10px;
  }

  .slide-dropdown {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .heading {
    color: #000;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .hr-line {
    height: 1px;
    margin-top: 10px;
    width: 100%;
    background: rgba(0,0,0,0.8)
  }

  @media (max-width: 768px) {
    .product-left-side {
      width: 100%;
    }
    .shop-main-container {
      padding: 0 30px;
    }
  }

  @media (max-width: 600px) {
    .menu-icon {
      display: block;
      cursor: pointer;
    }

    .nav-elements {
      position: absolute;
      right: 0;
      top: 102px;
      background-color: #fef7e5;
      width: 0px;
      height: 100vh;
      transition: all 0.3s ease-in;
      overflow: hidden;
      z-index: 2;
    }

    .nav-elements.active {
      width: 300px;
    }

    .nav-elements ul {
      display: flex;
      flex-direction: column;
    }

    .nav-elements ul li {
      margin-right: unset;
      margin-top: 22px;
    }
  }
`;
