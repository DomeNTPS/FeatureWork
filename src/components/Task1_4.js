import React from 'react'
import Task1 from "./Task1";
import Task2 from "./Task1_2";

function Task1_4() {

    const propHint = []
    const onHandleProp = () => {
        propHint.push();
        console.log(propHint,'hi')
    }
    const handleSubmit = () => {
      alert("set")
    };

    return (
      <div>
        <Task1 submit={onHandleProp} />
        <Task1 handleSubmit={handleSubmit} submit={onHandleProp} />
        {/* <Task1 handleSubmit2={handleProp} /> */}
        <Task2 />
      </div>
    );
}

export default Task1_4
