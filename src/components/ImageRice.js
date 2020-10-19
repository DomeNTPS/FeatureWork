import React from 'react'
import { Stage, Layer, Circle, Image } from "react-konva";

function ImageRice() {
    const isFirstTime = React.useRef();
    const srcImage = React.useRef();

    class URLImage extends React.Component {
      state = {
        image: null,
        url: "",
        // isFirstTime : true ,
      };
      componentDidMount() {
        if (this.props.isFirstTime?.current !== false) {
          this.loadImage();
        }
      }
      componentDidUpdate(oldProps) {
        this.props.isFirstTime.current = false;
        // console.log(oldProps.src,this.props.src)
        if (oldProps.src !== this.props.src) {
          console.log("load new image");
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
        this.props.srcImage.current = this.image;
        this.setState(
          {
            ...this.state,
            image: this.image,
            // isFirstTime : false
          },
          () => {
            // console.log('complete')
          }
        );
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
              console.log(node);
              this.imageNode = node;
            }}
            width={360}
            height={438}
          />
        );
      }
    }
    React.useEffect(() => {
      console.log("rerender");
    }, []);

      const renderImage = (isFirstTime) => {
        return (
          <URLImage
            isFirstTime={isFirstTime}
            srcImage={srcImage}
            src="http://128.199.244.46:4000/getimage?image=inferNone94323.jpeg"
            x={300}
          />
        );
      };
    return (
      <>
          {renderImage(isFirstTime, srcImage)}
      </>
    );
}

export default ImageRice
