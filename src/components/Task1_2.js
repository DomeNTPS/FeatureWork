import React from 'react'
import { Stage, Layer, Circle, Image } from "react-konva";
import useImage from "use-image";

export const Task1_2 = () => {

    // const [ranpos, setRanPos] = React.useState([])
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
            console.log(index, randx);
            posx.push(randx)
        }
        setPosxString(posx);
        setPosi(posi.x = posxString)
        console.log('x',posx.join())
        console.log(posi.x,'x')
        // console.log(posxString)
        //-------------------------
        let posy = [];
        const miny = 0;
        const maxy = 438;
        for (let index = 0; index < 50; index++) {
          let randy = Math.floor(miny + Math.random() * (maxy - miny));
          // console.log(index, randy);
          posy.push(randy);
        }
        setPosyString(posy);
        setPosi(posi.y = posyString);
        console.log(posi.y, "y");
        // console.log("y", posy.join());
        // console.log(posyString);
        //-------------------------
        let wg = [];
        const minWg = 0.0;
        const maxWg = 10.0;
        for (let index = 0; index < 50; index++) {
          let ranWg = (minWg + Math.random() * (maxWg - minWg)).toFixed(2);
          console.log(index, ranWg);
          wg.push(ranWg);
        }
        setWeight(wg);
        setPosi((posi.weightps = weight));
        // console.log(weight)
        // console.log(wg, 'kg')
        console.log(posi.weightps);
        //-------------------------
        console.log(posi)
    }

    const renderPos = (data) => {
      return data.map((item, i) => <li key={i}>{item}</li>);
    };
    const renderCircle = (data) => {
      return data.map((item, i) => (
        <Circle x={item} y={item} radius={25} stroke="yellow" key={i}/>
      ));
    };
    

    return (
      <div>
        <button onClick={randomXYW}>random xy </button>
        <div style={{ display: "flex" }}>
          <ul> x {renderPos(posxString)}</ul>
          <ul> y {renderPos(posyString)}</ul>
          <ul> w {renderPos(weight)}</ul>
        </div>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <RiceImage />
            {renderCircle(posxString)}
            {/* problem -------------------------------
            {posi.map((item, i) => (
              <Circle
                x={item.x}
                y={300}
                radius={25}
                stroke="yellow"
                key={i}
              />
            ))}
            -------------------------------------------------- */}
          </Layer>
        </Stage>
      </div>
    );
}

export default Task1_2;
