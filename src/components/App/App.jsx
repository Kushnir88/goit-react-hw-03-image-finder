import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import './App.module.css';

const API_KEY = '36866998-5308da28c55e509481910204f';
const BASE_URL = 'https://pixabay.com/api/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      images: [],
      page: 1,
      isLoading: false,
      selectedImage: null,
    };
  }

  handleSearchSubmit = (query) => {
    this.setState(
      {
        searchTerm: query,
        images: [],
        page: 1,
      },
      () => {
        this.fetchImages(query, 1);
      }
    );
  };

  handleLoadMore = () => {
    const { searchTerm, page } = this.state;
    const nextPage = page + 1;
    this.fetchImages(searchTerm, nextPage);
    this.setState({
      page: nextPage,
    });
  };

  fetchImages = (query, page) => {
    this.setState({
      isLoading: true,
    });

    axios
      .get(
        `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((response) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
        }));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  handleImageClick = (image) => {
    this.setState({
      selectedImage: image,
    });
  };

  handleCloseModal = () => {
    this.setState({
      selectedImage: null,
    });
  };

  render() {
    const { images, isLoading, selectedImage } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && <Button onClick={this.handleLoadMore} />}
        {selectedImage && <Modal image={selectedImage} onClose={this.handleCloseModal} />}
      </div>
    );
  }
}

export default App;
