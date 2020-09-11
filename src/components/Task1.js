import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { useHistory } from "react-router";

export const Task1 = () => {

    const { push } = useHistory();
    const [value1, setValue] = useState([0, 10]);
    const handleChange = (event, newValue) => {
      setValue(newValue);
      console.log(newValue)
    };
    const changePage = () => {
      push("/Task2")
    } 

    return (
      <div style={{ marginLeft: 300 }}>
        {/* <button onClick={changePage}> Task 2 </button> */}
        <Typography
          id="range-slider"
          gutterBottom
          style={{  marginTop: 100 }}
        >
          Slider range
        </Typography>
        <div style={{ width: 300 }}>
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
          {value1[0]} - {value1[1]} 
        </div>
      </div>
    );
}

export default Task1;
