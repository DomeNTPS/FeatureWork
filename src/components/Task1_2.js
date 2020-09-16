import React from 'react'
import { Stage, Layer, Circle, Image } from "react-konva";
import useImage from "use-image";

export const Task1_2 = ({ filterValue  }) => {
  let pos = { x: 0, y: 0, weightps: 0 };
  const [posi, setPosi] = React.useState([pos]);

  const RiceImage = () => {
    const [image] = useImage(
      "http://128.199.244.46:4000/getimage?image=inferNone94323.jpeg"
    );
    return <Image width={360} height={438} image={image} x={300} />;
  };

  const randomXYW = () => {
    let posx = [];
    const minx = 0;
    const maxx = 360;
    for (let index = 0; index < 50; index++) {
      let randx = Math.floor(minx + Math.random() * (maxx - minx));
      posx.push(randx);
    }

    //-------------------------
    let posy = [];
    const miny = 0;
    const maxy = 438;
    for (let index = 0; index < 50; index++) {
      let randy = Math.floor(miny + Math.random() * (maxy - miny));
      posy.push(randy);
    }

    //-------------------------
    let wg = [];
    const minWg = 0.0;
    const maxWg = 10.0;
    for (let index = 0; index < 50; index++) {
      let ranWg = (minWg + Math.random() * (maxWg - minWg)).toFixed(2);
      wg.push(ranWg);
    }

    //-------------------------
    let tempPosition = [];
    posx.map((posXData, idx) => {
      tempPosition.push({
        x: posXData,
        y: posy[idx],
        weight: wg[idx],
      });
    });
    setPosi(tempPosition);
  };

  return (
    <div>
      <button
        onClick={randomXYW}
        style={{ marginLeft: 300, marginBottom: 50, marginTop: 70 }}
      >
        random xy
      </button>
      {console.log(posi)}
      <div style={{ marginLeft: 300, marginBottom: 50 }}>
        min : {filterValue[0]} <br />
        max : {filterValue[1]}
      </div>
      {/* {console.log(filterValue[0])} */}
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <RiceImage />
          {posi
            .filter(
              (item) =>
                 item.weightps < 10 
            )
            .map((item, i) => {
              // console.log(item);
              return (
                <Circle
                  x={item.x + 300}
                  y={item.y}
                  radius={5}
                  stroke="red"
                  key={i}
                />
              );
            })}
        </Layer>
      </Stage>
    </div>
  );
};

export default Task1_2;
