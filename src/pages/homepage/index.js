import React from 'react'
import RangeSlider from "./components/RangeSlider";
import RandomPosition from "../../components/RandomPosition";

function Homepage() {

    const [value, setValue] = React.useState([0, 10]); 
    const handleSlide = (min,max) => {
      setValue([min,max])
    }

    return (
      <div>
        <div style ={{marginLeft:300, marginTop: 60}}>min {value[0]} - max {value[1]}</div>
        <RangeSlider onSlide={handleSlide} rangeValue={value}/>
        <RandomPosition filterValue={value} />
      </div>
    );
}

export default Homepage
