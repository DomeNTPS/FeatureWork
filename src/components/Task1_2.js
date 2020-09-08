import React from 'react'
import { Stage, Layer, Circle, Image, Ellipse } from "react-konva";
import useImage from "use-image";

export const Task1_2 = () => {

    const [ranpos, setRanPos] = React.useState([])
    const pos = {x:"",y:""}
    const [posi, setPosi] = React.useState(pos)
    const [posx, setPosx] = React.useState([])

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
    const RandomPos = () => {
        const minx = 0
        const miny = 0
        const maxx = 360
        const maxy = 438
        for (let index = 0; index < 50; index++) {
           var randx = Math.floor(minx + Math.random() * (maxx - minx));
           var randy = Math.floor(miny + Math.random() * (maxy - miny));
           console.log(index,randx,randy);
        }
        setRanPos(...ranpos, pos) 
    };

    const sort = () => {
        const minx = 0;
        const maxx = 360;
        for (let index = 0; index < 10; index++) {
            var randx = Math.floor(minx + Math.random() * (maxx - minx));
            console.log(index, randx);
            setPosx(...posx, randx)
        }
        console.log(posx)
    }

    return (
      <div>
        <button onClick={sort}>random</button>
        {[posx]}
        {/* <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <RiceImage />
          </Layer>
        </Stage> */}
      </div>
    );
}

export default Task1_2;
