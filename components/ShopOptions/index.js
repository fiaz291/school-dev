import React, { useCallback, useState } from "react";
import styles from "./styles";
import MultiRangeSlider from "../PriceRangeSlider";
import { AiOutlinePlus, AiOutlineRight } from "react-icons/ai";
import SizeOptions from "../Sizes";

export default function ShopOptions({
  title,
  categories,
  list1,
  list2,
  list3,
  list4,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const DropDownOptions = useCallback(() => {
    if (isOpen && title === "Price") {
      return <MultiRangeSlider />;
    }
    if (isOpen && title === "Sizes") {
      return <SizeOptions />;
    }
    if (isOpen && title === "Seasons") {
      return <SizeOptions seasons />;
    }
    if (isOpen && title === "Categories") {
      return (
        <>
          {categories?.map((item, index) => (
            <div className="product-option" key={index}>
              <p>{item.name}</p>
              <AiOutlineRight />
            </div>
          ))}
          <style jsx>{styles}</style>
        </>
      );
    }
    return (
      <div className="dropdown-content">
        <ul>
          <li>{list1}</li>
          <li>{list2}</li>
          <li>{list3}</li>
          <li>{list4}</li>
        </ul>
        <style jsx>{styles}</style>
      </div>
    );
  }, [title, isOpen]);

  return (
    <>
      <div className="dropdown-container">
        <div className="slide-dropdown" onClick={toggleDropdown}>
          <div className="heading">{title}</div>
          <AiOutlinePlus />
        </div>
        {isOpen && <div>{DropDownOptions()}</div>}
        <div className="hr-line" />
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
