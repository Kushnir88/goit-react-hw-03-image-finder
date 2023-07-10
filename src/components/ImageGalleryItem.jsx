import React from 'react';

const ImageGalleryItem = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image.id);
  };

  return (
    <li className="gallery-item">
      <img
        className="gallery-image"
        src={image.webformatURL}
        alt=""
        onClick={handleClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
