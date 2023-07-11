import React from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

class Searchbar extends React.Component {
  state = {
    searchTerm: '',
  };

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { searchTerm } = this.state;
    onSubmit(searchTerm);
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchTerm}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
