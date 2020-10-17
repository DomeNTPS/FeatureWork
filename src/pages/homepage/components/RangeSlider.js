import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

export const RangeSlider = ({ onSlide, rangeValue }) => {

  // set value slider
  const handleChangeValue = (event, [min, max]) => {
    onSlide(min, max);
    // console.log(min, max);
  }; 

  return (
    <div style={{ marginLeft: 300 }}>
      <Typography id="range-slider" gutterBottom style={{ marginTop: 100 }}>
        Slider range
      </Typography>
      <div style={{ width: 300 }}>
        <Slider
          value={rangeValue}
          onChange={handleChangeValue}
          valueLabelDisplay="auto"
          track="normal"
          defaultValue={10}
          mix={0.0}
          max={10.0}
          step={0.01}
        />
        {rangeValue[0]} - {rangeValue[1]}
      </div>
      <br />
    </div>
  );
};

export default RangeSlider;
