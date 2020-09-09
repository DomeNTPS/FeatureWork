import React from 'react'
import { Stage, Layer, Circle, Image } from "react-konva";
import useImage from "use-image";

export const Task1_2 = () => {

    // const [ranpos, setRanPos] = React.useState([])
    // const pos = {x:'',y:''}
    // const [posi, setPosi] = React.useState(pos)
    const [posxString, setPosxString] = React.useState([])
    // const [posyString, setPosyString] = React.useState(['']);
    // const posy = [];

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

    // ดูตรง sortx นะ เพราะจะลองใส่แบบค่าเดียวก่อน

    const sortx = () => {
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
        console.log(typeof posx)
        console.log(posxString)

    }

    // const sorty = () => {
    //     const miny = 0;
    //     const maxy = 438;
    //     for (let index = 0; index < 10; index++) {
    //       let randy = Math.floor(miny + Math.random() * (maxy - miny));
    //       console.log(index, randy);
    //       posy.push(randy);
    //     }
    //     setPosyString(posy);
    //     console.log("y", posy.join());
    //     console.log(posyString);
    // };

    return (
      <div>
        <button onClick={sortx}>random x </button>
        {/* <button onClick={sorty}>random y </button> */}
        <div>{posxString}</div>
        {/* <div>{posyString}</div> */}
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <RiceImage />

            <Circle x={226} y={100} radius={25} stroke="yellow" />
          </Layer>
        </Stage>
        {/* map here  */}
        <ul>
          {posxString.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
}

export default Task1_2;
