import css from "styled-jsx/css";

export default css`
  .form-main-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 50px;
  }

  .form-right-side {
    width: 40%;
  }

  .form-left-side {
    width: 55%;
    padding: 40px;
    background-color: #ccc;
    border-radius: 10px;
  }

  .address-block {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }

  .form-fields {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
  }

  .form-fields > input {
    width: 45%;
    margin-bottom: 30px;
    padding: 12px;
    border: none;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .help-field > input {
    width: 96%;
    margin-bottom: 30px;
    padding: 12px;
    border: none;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .submit-button {
    display: flex;
    justify-content: center;
  }

  .submit-button > button {
    background-color: #32425c;
    color: white;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
  }

  .hr-divider {
    height: 2px;
    background-color: #ccc;
    width: 100%;
    margin-bottom: 80px;
  }

  .form-line {
    height: 2px;
    background-color: rgba(0, 0, 0, 0.1);
    width: 30%;
  }

  input:focus {
    outline: none;
  }

  /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 768px) {
    .form-main-container {
      flex-direction: column;
    }
    .form-right-side {
      width: 100%;
    }

    .form-left-side {
      width: 100%;
      padding: 0;
    }
    .form-container {
      padding: 20px;
    }
    .form-fields > input {
      width: 42%;
    }
    .help-field > input {
      width: 93%;
    }
  }
`;
