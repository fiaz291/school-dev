import css from "styled-jsx/css";

export default css`
  .mobile-footer {
    background-color: #070617;
    display: flex;
    justify-content: center;
    padding: 30px 15px 30px 15px;
    flex-direction: column;
    align-items: center;
  }

  .footer-social {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }

  .footer-social-icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mobile-footer-wrapper {
    max-width: 150px;
  }
  .mobile-footer-wrapper h1 {
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 17px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: normal;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.25em;
  }
  .footer-text {
    display: flex;
    align-items: center;
  }

  .cards-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
