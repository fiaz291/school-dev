import React, { useState } from "react";
import BaseLayout from "../BaseLayout";
import styles from "./styles";
import classNames from "classnames";
import UniformSizeTable from "../UniformSizeTable";
import FooterDropdownMenu from "../DropDownFooterMenus";

const TIPS = [
  {
    id: "1",
    description:
      "Chest:Measure around your Chest at its fullest point, right beneath your armpits",
  },
  {
    id: "2",
    description:
      "Chest:Measure around your Chest at its fullest point, right beneath your armpits",
  },
  {
    id: "3",
    description:
      "Chest:Measure around your Chest at its fullest point, right beneath your armpits",
  },
  {
    id: "4",
    description:
      "Chest:Measure around your Chest at its fullest point, right beneath your armpits",
  },
  {
    id: "5",
    description:
      "Chest:Measure around your Chest at its fullest point, right beneath your armpits",
  },
  {
    id: "6",
    description:
      "Chest:Measure around your Chest at its fullest point, right beneath your armpits",
  },
];

function SizeGuide() {
  const [selectedOption, setSelectedOption] = useState("Boys");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <BaseLayout changeHeader>
      <div className="main-container">
        <FooterDropdownMenu />
        <div className="option-button-container">
          <button
            className={classNames("option-buttons", {
              selected: selectedOption === "Girls",
            })}
            onClick={() => handleOptionClick("Girls")}
          >
            Girls
          </button>
          <button
            className={classNames("option-buttons", {
              selected: selectedOption === "Boys",
            })}
            onClick={() => handleOptionClick("Boys")}
          >
            Boys
          </button>
        </div>
        <p className="sub-title">
          Select product type to display the respective size guide below
        </p>
        <div className="line"></div>
        <div className="clothes-options">
          <div className="options">UnderShirts</div>
          <div className="options">CardiGans</div>
          <div className="options">Pants</div>
        </div>
        <div className="header-container">
          <div className="header-wrapper">
            <div className="heading">{`Boy's Size Guide`}</div>
            <div>Please use our size guide to find the perfect size.</div>
            <div className="divider-line"></div>
          </div>
        </div>
        <UniformSizeTable />
        <UniformSizeTable trousersOptions />
        <div className="our-company-container">
          <div className="our-product-wrapper">
            <div className="divider" />
            <h1>Measuring Tips</h1>
            <div className="divider" />
          </div>
        </div>
        <div className="tips-container">
          <h2>How to measure</h2>
          <div className="tips-wrapper">
            <div className="tips-map">
              {TIPS.map((item, index) => (
                <div className="tips" key={index}>
                  <div className="tips-number">{item.id}</div>
                  <div className="tip-text">{item.description}</div>
                </div>
              ))}
            </div>

            <div className="image"></div>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </BaseLayout>
  );
}

export default SizeGuide;
