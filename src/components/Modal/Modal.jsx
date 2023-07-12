import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import styles from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    this.lightbox = new SimpleLightbox('.Overlay', {
      captionsData: 'alt',
    });
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    this.lightbox.destroy();
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>
          <img src={image.largeImageURL} alt={image.tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
