import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './styles'

const MultiRangeSlider = ({onChange}) => {
  const [range, setRange] = useState([20, 80]); // Initial min and max values
  const handleRangeChange = (newRange) => {
    // console.log({range})
    onChange(newRange[0], 'priceMin');
    onChange(newRange[1], 'priceMax');
    setRange(newRange);
  };

  return (
    <div className='slider-container'>
      <Slider
        range
        min={0}
        max={100}
        value={range}
        onChange={handleRangeChange}
      />
         <div className="range-inputs">
        <div className="range">
          ${range[0]}
        </div>
        <div className="range">
        ${range[1]}
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default MultiRangeSlider;
