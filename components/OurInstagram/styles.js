import css from "styled-jsx/css";

export default css `
.instagram-block-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .instagram-block-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    flex-direction: column;
  }
  
  .instagram-link {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }
  .instagram-link > a {
    text-decoration: underline;
    margin-right: 10px;
    color: #000;
  }
  .instagram-image-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
    flex-wrap: wrap;
    gap: 20px;
  }

  .school-uniform-image {
    width: 250px;
    height: 250px;
  }

  .hr-container {
    height: 2px;
    width: 100%;
    background-color: lightgray;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  
  .dark-line {
    height: 2px;
    width: 30%;
    background-color: #32425c;
  }
  
  .insta-divider {
    height: 1px;
    background-color: #000;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    .instagram-image-container {
    display: flex;
    justify-content: center;
    }
  }
`