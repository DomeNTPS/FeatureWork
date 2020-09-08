import React from 'react'
import { Stage, Layer, Circle, Image, Ellipse } from "react-konva";
import useImage from "use-image";

export const Task1_2 = () => {

    // const [ranpos, setRanPos] = React.useState([])
    // const pos = {x:"",y:""}
    // const [posi, setPosi] = React.useState(pos)
    const [posxString, setPosxString] = React.useState('')
    const posx = []
    const [posyString, setPosyString] = React.useState('');
    const posy = [];

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

    const sortx = () => {
        const minx = 0;
        const maxx = 360;
        for (let index = 0; index < 10; index++) {
            let randx = Math.floor(minx + Math.random() * (maxx - minx));
            console.log(index, randx);
            posx.push(randx)
        }
        setPosxString(posx.join())
        console.log('x',posx.join())
        console.log(posxString)

    }

    const sorty = () => {
        const miny = 0;
        const maxy = 438;
        for (let index = 0; index < 10; index++) {
          let randy = Math.floor(miny + Math.random() * (maxy - miny));
          console.log(index, randy);
          posy.push(randy);
        }
        setPosyString(posy.join());
        console.log("y", posy.join());
        console.log(posyString);
    };

    return (
      <div>
        <button onClick={sortx}>random x </button>
        <button onClick={sorty}>random y </button>
        <p>#Debug {JSON.stringify({ posx })}</p>
        <div>{posxString}</div>
        <div>{posyString}</div>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <RiceImage />
            <Circle x={226} y={100} radius={25} stroke="yellow" />
          </Layer>
        </Stage>
      </div>
    );
}

export default Task1_2;
