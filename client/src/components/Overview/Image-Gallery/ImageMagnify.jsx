import React from 'react';
import { useState } from 'react';

const ImageMagnify = function (props) {
  let magnifieHeight = 300;
  let magnifieWidth = 300;
  let zoom = 2.5;
  let [[x, y], setPosition] = useState([0, 0]);
  let [[width, height], setSize] = useState([0, 0]);
  let [magnifier, setMagnifier] = useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <img
        src={props.src}
        alt='image'
        className='zoom-image'
        onClick={props.toggleZoomView}
        onMouseEnter={(event) => {
          let el = event.currentTarget;
          let { width, height } = el.getBoundingClientRect();
          setSize([width, height]);
          setMagnifier(true);
        }}
        onMouseMove={(event) => {
          let el = event.currentTarget;
          let { top, left } = el.getBoundingClientRect();
          //cursor position on the image based on the top & left coordinates on the image
          let x = event.pageX - left - window.pageXOffset;
          let y = event.pageY - top - window.pageYOffset;
          setPosition([x, y]);
        }}
        onMouseLeave={() => {
          setMagnifier(false);
        }}
      ></img>

      <div
        className='magnifier-lens'
        style={{
          //this is for the magnify lens, set the backgroundimage, and background size with css
          display: magnifier ? '' : 'none',
          //lens size
          height: `${magnifieHeight}px`,
          width: `${magnifieWidth}px`,
          //for movement
          top: `${y - magnifieHeight / 2}px`,
          left: `${x - magnifieWidth / 2}px`,
          //zoomed image
          backgroundImage: `url('${props.src}')`,
          backgroundSize: `${width * zoom}px ${height * zoom}px`,
          backgroundPositionX: `${-x * zoom + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoom + magnifieHeight / 2}px`
        }}
      ></div>
    </div >
  );
}

export default ImageMagnify;