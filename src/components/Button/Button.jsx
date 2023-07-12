import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

class Button extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className={styles.ButtonContainer}>
        <button type="button" className={styles.Button} onClick={onClick}>
          Load more
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
