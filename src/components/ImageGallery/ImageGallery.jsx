import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'; // Оновлено шлях
import styles from './ImageGallery.module.css';

class ImageGallery extends React.Component {
  render() {
    const { images, onImageClick } = this.props;
    return (
      <ul className={styles.ImageGallery}>
        {images.map((image) => (
          <ImageGalleryItem key={image.id} image={image} onClick={onImageClick} />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
