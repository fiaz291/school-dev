import css from "styled-jsx/css";

export default css`
  .title {
    color: #000;
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 28px;
    font-weight: 600;
  }

  .sub-title {
    color: #000;
    margin-bottom: 20px;
    text-align: center;
    font-size: 16px;
    font-weight: normal;
  }

  .main-container {
    padding: 0 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .main-wrapper {
    width: 90%;
  }

  .card-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-wrapper {
    max-width: 350px;
  }

  .range-inputs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }

  .range {
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 5px;
    border-radius: 5px;
  }

  .about-card-image {
    width: 100%;
    height: 200px;
    border-radius: 40px;
  }

  .card-title {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 20px;
  }

  .our-company-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 100px;
  }

  .company-values-container {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 80px;
  }

  .company-values-wrapper {
    width: 50%;
    padding: 0 50px;
  }

  .company-right-box {
    width: 50%;
  }

  .company-left-box {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  .logo-block {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
  }

  .profle-image {
    height: 90px;
    width: 90px;
    border-radius: 50%;
    border: 1px solid #000;
    margin-right: 20px;
  }

  .text-container > p {
    color: #000;
  }

  .contact-form {
    padding: 0 5%;
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

  @media (max-width: 768px) {
    .main-container {
      padding: 0 20px;
    }
    .card-container {
      justify-content: center;
      flex-wrap: wrap;
    }
    .company-values-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 30px;
    }

    .company-values-wrapper {
      width: 100%;
      padding: 0 20px;
    }
    .company-right-box {
      width: 100%;
    }

    .company-left-box {
      width: 100%;
    }
    .profle-image {
      height: 70px;
      width: 70px;
    }
    .bottom-section {
      padding: 20px;
      height: 260px;
    }
  }
`;
