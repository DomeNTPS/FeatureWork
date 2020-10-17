import React from 'react'
import RangeSlider from "./components/RangeSlider";
import Task2 from "../../components/Task1_2";

function Homepage() {

    const [value, setValue] = React.useState([0, 10]); 
    const handleSlide = (min,max) => {
      setValue([min,max])
    }

    return (
      <div>
        <div style ={{marginLeft:300, marginTop: 60}}>min {value[0]} - max {value[1]}</div>
        <RangeSlider onSlide={handleSlide} rangeValue={value}/>
        <Task2 filterValue={value} />
      </div>
    );
}

export default Homepage
