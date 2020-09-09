import React from 'react'
import { Stage, Layer, Circle, Image } from "react-konva";
import useImage from "use-image";

export const Task1_2 = () => {

    // const [ranpos, setRanPos] = React.useState([])
    // const pos = {x:'',y:''}
    // const [posi, setPosi] = React.useState(pos)
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

    // const RandomPos = () => {
    //     const minx = 0
    //     const miny = 0
    //     const maxx = 360
    //     const maxy = 438
    //     for (let index = 0; index < 50; index++) {
    //        var randx = Math.floor(minx + Math.random() * (maxx - minx));
    //        var randy = Math.floor(miny + Math.random() * (maxy - miny));
    //        console.log(index,randx,randy);
    //     }
    //     setRanPos(...ranpos, pos) 
    // };
    //// ดูตรง sortx นะ เพราะจะลองใส่แบบค่าเดียวก่อน
    const sortXY = () => {
        let posx = []; 
        const minx = 0;
        const maxx = 360;
        for (let index = 0; index < 50; index++) {
            let randx = Math.floor(minx + Math.random() * (maxx - minx));
            console.log(index, randx);
            posx.push(randx)
        }
        setPosxString(posx);
        console.log('x',posx.join())
        // console.log(typeof posx)
        console.log(posxString)
        //-------------------------
        let posy = [];
        const miny = 0;
        const maxy = 438;
        for (let index = 0; index < 50; index++) {
          let randy = Math.floor(miny + Math.random() * (maxy - miny));
          console.log(index, randy);
          posy.push(randy);
        }
        setPosyString(posy);
        console.log("y", posy.join());
        console.log(posyString);
    }

    const renderPosx = (data) => {
      return data.map((item, i) => <li key={i}>{item}</li>);
    };
    const renderPosy = (data) => {
      return data.map((item, i) => <li key={i}>{item}</li>);
    };
    // const renderPosxCirclle = (data) => {
    //   return data.map((item, i) => <Circle key={i} x={item} y={300} stroke="yellow"></Circle>);
    // };

    const randomWeight = () => {
      let wg = []
      const minWg = 0.00
      const maxWg = 10.00
      for (let index = 0; index < 50; index++) {
        let ranWg =(minWg + Math.random() * (maxWg - minWg)).toFixed(2);
        console.log(index, ranWg);
        wg.push(ranWg)
      }
      setWeight(wg)
      console.log(wg, 'kg')
    }

    return (
      <div>
        <button onClick={sortXY}>random xy </button>
        <button onClick={randomWeight}>Random Weight</button>
        <div style={{ display: "flex" }}>
          <ul> x {renderPosx(posxString)}</ul>
          <ul> y {renderPosy(posyString)}</ul>
        </div>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <RiceImage />
            <Circle x={200} y={100} radius={25} stroke="yellow" />
            {/* {renderPosxCirclle(posxString)} */}
          </Layer>
        </Stage>
      </div>
    );
}

export default Task1_2;
