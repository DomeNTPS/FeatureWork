import React from 'react'
import { Stage, Layer, Circle, Image } from "react-konva";

export const Task1_2 = ({ filterValue }) => {
  let pos = { x: 0, y: 0, weight: 0 };
  const [position, setPosition] = React.useState([pos]);
  const isFirstTime = React.useRef()
  const srcImage = React.useRef()

  class URLImage extends React.Component {
    state = {
      image: null,
      url : '',
      // isFirstTime : true ,
    }
    componentDidMount() {
      if(this.props.isFirstTime?.current !== false){
        this.loadImage()
      }
    }
    componentDidUpdate(oldProps) {
      this.props.isFirstTime.current = false
      // console.log(oldProps.src,this.props.src)
      if (oldProps.src !== this.props.src) {
        console.log('load new image')
        this.loadImage();
      }
    }
    // componentWillUnmount() {
    //   this.image.removeEventListener("load", this.handleLoad);
    // }
    loadImage() {
      // save to "this" to remove "load" handler on unmount
      this.image = new window.Image();
      this.image.src = this.props.src;
      this.image.addEventListener("load", this.handleLoad);
    }
    handleLoad = () => {
      // after setState react-konva will update canvas and redraw the layer
      // because "image" property is changed
      this.props.srcImage.current = this.image
      this.setState({
        ...this.state,
        image: this.image,
        // isFirstTime : false
      },()=>{
        // console.log('complete')
      });
      // this.imageNode.getLayer().batchDraw()

      // if you keep same image object during source updates
      // you will have to update layer manually:
      // this.imageNode.getLayer().batchDraw();
    };
    render() {
      return (
        <Image
          x={this.props.x}
          y={this.props.y}
          image={this.state.image || this.props.srcImage.current}
          ref={(node) => {
            console.log(node)
            this.imageNode = node;

          }}
          width={360}
          height={438}
        />
      );
    }
  }
  React.useEffect(()=>{
    console.log('rerender')
  },[])

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
  const renderImage = (isFirstTime)=>{
      return ( <URLImage
        isFirstTime = {isFirstTime}
        srcImage = {srcImage}
        src="http://128.199.244.46:4000/getimage?image=inferNone94323.jpeg"
        x={300}
      />)
  }
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
          {renderImage(isFirstTime, srcImage)}
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

export default Task1_2;

