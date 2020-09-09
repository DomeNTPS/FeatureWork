import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

export const Task1 = () => {

    const [value1, setValue] = useState([0, 10]);
    const handleChange = (event, newValue) => {
      setValue(newValue);
      console.log(newValue)
    };

    return (
      <div>
        <Typography id="range-slider" gutterBottom>
          Slider range
        </Typography>
        <div style={{ width: 300, marginLeft: 50 }}>
          <Slider
            value={value1}
            onChange={handleChange}
            valueLabelDisplay="auto"
            track="normal"
            defaultValue={10}
            mix={0.0}
            max={10.0}
            step={0.01}
          />
        </div>
        {value1}
      </div>
    );
}

export default Task1;
