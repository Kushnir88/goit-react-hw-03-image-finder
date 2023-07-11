import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends React.Component {
  handleClick = () => {
    const { image, onClick } = this.props;
    onClick(image);
  };

  render() {
    const { image } = this.props;
    return (
      <li className={styles.ImageGalleryItem} onClick={this.handleClick}>
        <img src={image.webformatURL} alt={image.tags} className={styles.ImageGalleryItemImage} />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
