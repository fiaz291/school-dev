import css from "styled-jsx/css";

export default css `
.slide-dropdown {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
}

  .dropdown-container {
    position: relative;
    margin-top: 20px;
  }
  
  .dropdown-content {
    display: block;
  }
  
  .dropdown-content ul {
    padding: 0;
  }
  
  .dropdown-content ul li {
    color: #000;
    font-size: 16px;
    margin-top: 5px;
    list-style-type: none;
    text-align: center;
  }

  .hr-line {
    height: 1px;
    margin-top: 10px;
    width: 100%;
    background: rgba(0,0,0,0.8)
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
  .heading {
    color: #000;
    font-size: 18px;
    text-transform: uppercase;
  }

`