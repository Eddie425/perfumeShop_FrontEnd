import React from 'react';

export default function DetailsThumb(data) {
    const images = data.images;
    const myRef = data.myRef;
    const tab = data.tab;

    return (
      <div className="thumb" ref={myRef}>
        {images.map((img, index) => (
          <img src={img} key={index} alt="" onClick={() => tab(index)} />
        ))}
      </div>
    );
}
