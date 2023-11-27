import React, { useEffect, useState } from "react";
import styles from "./styles";
import classNames from "classnames";

const sizeOptions = [
  { id: 1, value: "Small" },
  { id: 2, value: "Medium" },
  { id: 3, value: "Large" },
  { id: 4, value: "XL" },
  { id: 5, value: "XXL" },
  { id: 6, value: "XXXL" },
  { id: 7, value: "Custom" },
  { id: 8, value: "Other" },
];

const seasonOptions = [
  { id: 1, value: "Summer" },
  { id: 2, value: "Spring" },
  { id: 3, value: "Fall" },
  { id: 4, value: "Winter" },
];

function SizeOptions({ seasons, onChange, type }) {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeChange = (id) => {
    if (selectedSizes.includes(id)) {
      const value = selectedSizes.filter((item) => item !== id)
      setSelectedSizes(value);
    } else {
      setSelectedSizes([...selectedSizes, id]);
    }
  };

  const options = seasons ? seasonOptions : sizeOptions;

  return (
    <div>
      <form
        className={classNames({
          "selected-options": !seasons,
        })}
      >
        {options?.map((option) => (
          <label key={option.id} className="check-box-container">
            {option.value}
            <input
              type="checkbox"
              name="size"
              value={option.value}
              checked={selectedSizes.includes(option.id)}
              onChange={() => handleSizeChange(option.id)}
            />
            <span className="checkmark"></span>
          </label>
        ))}
      </form>
      <style jsx>{styles}</style>
    </div>
  );
}

export default SizeOptions;
