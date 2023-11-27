import css from "styled-jsx/css";

export default css`
  
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 30px;
  }
  
  .navbar-container {
    height: 60px;
  }
  
  .menu-icon {
    display: none;
  }
  
  .nav-elements > ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
  }
  
  .nav-elements > ul > li:not(:last-child) {
    margin-right: 40px;
  }
  
  
  .nav-elements ul a.active {
    color: #574c4c;
    font-weight: 500;
    position: relative;
  }
  
  .nav-elements ul a.active::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #574c4c;
  }
  
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 12%;
  }

  @media (max-width: 768px) {
    .nav-elements ul li:not(:last-child) {
      margin-right: 30px;
    }
    .social-icon {
      width: 20%;
    }
  }
  
  @media (max-width: 600px) {
    .menu-icon {
      display: block;
      cursor: pointer;
    }
  
    .nav-elements {
      position: absolute;
      left: 0px;
      top: 80px;
      background-color: #fef7e5;
      width: 0px;
      height: calc(100vh - 60px);
      transition: all 0.3s ease-in;
      overflow: hidden;
      z-index: 1;
    }
  
    .nav-elements.active {
      width: 270px;
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

`