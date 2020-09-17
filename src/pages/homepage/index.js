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
        <RangeSlider onSlide={handleSlide} mmValue={value}/>
        {/* <img src="http://128.199.244.46:4000/getimage?image=inferNone94323.jpeg" style={{width:360, height:438, marginLeft:300}}/> */}
        <Task2 filterValue={value} />
      </div>
    );
}

export default Homepage
