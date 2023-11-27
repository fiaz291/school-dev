import css from "styled-jsx/css";

export default css`

.slide-dropdown {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.heading {
  color: rgba(255,255,255,.7);
  font-size: 18px;
  text-transform: uppercase;
}

.dropdown-container {
  position: relative;
}

button {
  padding: 10px;
  background: #0074d9;
  color: #fff;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: block;
}

.dropdown-content ul {
  padding: 0;
}

.dropdown-content ul li {
  color: rgba(255,255,255,.7);
  font-size: 16px;
  margin-top: 5px;
  list-style-type: none;
  text-align: center;
}

.footer-divider {
  background-color: rgba(255, 255, 255, 0.3);
  height: 1px;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
}

`