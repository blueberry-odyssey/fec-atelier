import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ImageThumbnailSlider = function (props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={false}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="image-thumbnail-slider-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="image-thumbnail-slider-container-item"
    >

      {props.images.map((image, index) => {
        return (
          <div key={index}>
            <img
              src={image.url}
              alt='image'
              className={index === props.currentIndex ? 'active-thumbnail-carousel-img' : 'thumbnail-carousel-img'}
              key={index}
              onClick={() => {
                props.showImageAtIndex(index);
              }}
            ></img>
          </div>
        )
      })}
    </Carousel>
  )
}

export default ImageThumbnailSlider;