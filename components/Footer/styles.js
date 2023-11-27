import css from "styled-jsx/css";

export default css ` 

.footer {
    width: 100%;
    background-color: #070617;
    display: flex;
    justify-content: center;
  }
  
  .footer-wrapper {
    width: 85%;
  }
  
  .footer .col h1 {
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 17px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.25em;
  }
  
  .footer .col ul {
    padding: 0;
  }
  
  .footer .col ul li {
    color: rgba(255, 255, 255, 0.4);
    font-size: 14px;
    cursor: pointer;
    transition: 0.2s;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    list-style-type: none;
    margin-top: 10px;
  }
  
  .contain {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 30px;
  }
  
  .footer-social {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }
  
  .footer-social-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
  
  .footer-divider {
    background-color: rgba(255, 255, 255, 0.9);
    height: 2px;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
  }

`