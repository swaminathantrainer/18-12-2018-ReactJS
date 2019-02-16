import React from 'react';
import { Carousel } from "react-responsive-carousel";

export default ({ imageData }) => {
  return (
    <Carousel autoPlay showThumbs={false} showStatus={false}>
      {
        imageData && imageData.map((image) => {
          return (
            <div>
              <img src={image.url} />
              <p className="legend">{image.title}</p>
            </div>
          );
        })
      }
    </Carousel>
  )
}
