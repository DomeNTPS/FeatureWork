import React from 'react'
import { Stage, Layer, Circle } from "react-konva";
import ImageRice from "./ImageRice"

export const RandomPosition = ({ filterValue }) => {
  let pos = { x: 0, y: 0, weight: 0 };
  const [position, setPosition] = React.useState([pos]);

  // get random position and weight

  const randomPositionandWeight = () => {
    let positionX = []; // x position
    const min = 0;
    const max = 360;
    for (let index = 0; index < 50; index++) {
      let randx = Math.floor(min + Math.random() * (max - min));
      positionX.push(randx);
    }

    //-------------------------
    let postionY = []; // y position
    const miny = 0;
    const maxy = 438;
    for (let index = 0; index < 50; index++) {
      let randy = Math.floor(miny + Math.random() * (maxy - miny));
      postionY.push(randy);
    }

    //-------------------------
    let weightRandom = []; // weight
    const minWieght = 0.0;
    const maxWeight = 10.0;
    for (let index = 0; index < 50; index++) {
      let ranWg = (minWieght + Math.random() * (maxWeight - minWieght)).toFixed(
        2
      );
      weightRandom.push(ranWg);
    }

    //-------------------------
    let tempPosition = []; // record position and merge in one array
    positionX.map((posXData, idx) => {
      tempPosition.push({
        x: posXData,
        y: postionY[idx],
        weight: weightRandom[idx],
      });
    });
    setPosition(tempPosition);
  };
  return (
    <div>
      <button
        onClick={randomPositionandWeight}
        style={{ marginLeft: 300, marginBottom: 50, marginTop: 70 }}
      >
        random position
      </button>
      <div style={{ marginLeft: 300, marginBottom: 50 }}>
        minvalue : {filterValue[0]} <br />
        maxvalue : {filterValue[1]}
      </div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <ImageRice/>
          {position
            .filter(
              (item) =>
                item.weight < filterValue[1] && item.weight > filterValue[0]
            )
            .map((item, i) => {
              // console.log(item);
              return (
                <Circle
                  x={item.x + 300}
                  y={item.y}
                  radius={5}
                  stroke="yellow"
                  key={i}
                />
              );
            })}
        </Layer>
      </Stage>
    </div>
  );
};

export default RandomPosition;

