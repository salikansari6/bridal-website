import React, { useState, useEffect } from "react";
import "../styles/ImageGallery.scss";
const ImageGallery = ({ images, triggerAnimation }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const [fadeAnimation, setFadeAnimation] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setFadeAnimation(false);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentImage]);

  useEffect(() => {
    setCurrentImage(images[0]);
  }, [images]);

  return (
    <div className="image-gallery">
      <div className="image-gallery__list">
        {images.map((image, index) => {
          return (
            <div
              className={`image-gallery__list__item  ${
                images[index] === currentImage ? "active" : ""
              }`}
              style={{ background: `url(${image})` }}
              onClick={() => {
                setCurrentImage(images[index]);
                setFadeAnimation(true);
              }}
            ></div>
          );
        })}
      </div>
      <div
        className={`image-gallery__current-image 
            ${fadeAnimation ? "animation" : ""}
            ${triggerAnimation ? "add-to-cart-animation" : ""}`}
        style={{ background: `url(${currentImage})` }}
      ></div>
    </div>
  );
};

export default ImageGallery;
