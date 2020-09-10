import React from 'react'
import { Stage, Layer, Circle, Image } from "react-konva";
import useImage from "use-image";

export const Task1_2 = () => {

    let pos = {x:0,y:0,weightps:0}
    const [posi, setPosi] = React.useState([pos])
    const [posxString, setPosxString] = React.useState([])
    const [posyString, setPosyString] = React.useState([])
    const [weight, setWeight] = React.useState([])
    
    const RiceImage = () => {
        const [image] = useImage(
            "http://128.199.244.46:4000/getimage?image=inferNone94323.jpeg"
        );
        return (
          <Image
            width={360}
            height={438}
            image={image}
          />
        );
    };

    const randomXYW = () => {
        let posx = []; 
        const minx = 0;
        const maxx = 360;
        for (let index = 0; index < 50; index++) {
            let randx = Math.floor(minx + Math.random() * (maxx - minx));
            // console.log(index, randx);
            posx.push(randx)
        }
        setPosxString(posx);
        // console.log('x',posx.join())
        // console.log(posi.x,'x')
        //-------------------------
        let posy = [];
        const miny = 0;
        const maxy = 438;
        for (let index = 0; index < 50; index++) {
          let randy = Math.floor(miny + Math.random() * (maxy - miny));
          posy.push(randy);
        }
        setPosyString(posy);
        // console.log(posi.y, "y");
        //-------------------------
        let wg = [];
        const minWg = 0.0;
        const maxWg = 10.0;
        for (let index = 0; index < 50; index++) {
          let ranWg = (minWg + Math.random() * (maxWg - minWg)).toFixed(2);
          // console.log(index, ranWg,'iw');
          wg.push(ranWg);
        }
        setWeight(wg);
        // console.log(posi.weightps);
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
        // console.log(posi,'pos')
    }

    // const renderPos = (data) => {
    //   return data.map((item, i) => <li key={i}>{item}</li>);
    // };

    return (
      <div>
        <button onClick={randomXYW}>random xy </button>
        {/* <div style={{ display: "flex" }}>
          <ul> x {renderPos(posxString)}</ul>
          <ul> y {renderPos(posyString)}</ul>
          <ul> w {renderPos(weight)}</ul>
        </div> */}
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <RiceImage />
            {posi.map((item, i) => {
              console.log(item);
              return (
                <Circle
                  x={item.x}
                  y={item.y}
                  radius={25}
                  stroke="yellow"
                  key={i}
                />
              );
            })}
          </Layer>
        </Stage>
      </div>
    );
}

export default Task1_2;
