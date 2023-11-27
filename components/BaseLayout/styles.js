import css from "styled-jsx/css";

export default css`
  .top-header {
    color: white;
    text-align: center;
    background: #202639;
    padding: 10px 0 10px 0;
  }

  .header-image {
    background-color: #32425c;
  }

  .change-background {
    background-image: url(/static/images/header-uniform.png);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 30px;
  }
  .nav-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-link > a {
    color: #000;
    text-decoration: none;
    margin-left: 20px;
  }

  .add-to-bag {
    background-color: #3b4463;
    display: flex;
    align-items: center;
    width: 120px;
    height: 40px;
    border-radius: 10px;
    justify-content: center;
    color: #fff;
  }

  .social-icon {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 12%;
  }

  .wrapper h2 {
    text-transform: uppercase;
    font-size: 28px;
    font-weight: 400;
  }
  @media(max-width: 768px) {
    .nav-wrapper {
      padding: 20px;
    }
    .social-icon {
      width: 20%;
    }
  }
`;
