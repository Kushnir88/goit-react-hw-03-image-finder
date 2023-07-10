import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { ThreeDots } from 'react-loader-spinner';
import Modal from './Modal';
import Button from './Button';
import './App.module.css';

const API_KEY = '36866998-5308da28c55e509481910204f';
const API_URL = 'https://pixabay.com/api/';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      return;
    }

    const fetchImages = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(API_URL, {
          params: {
            key: API_KEY,
            q: searchTerm,
            page,
            per_page: 12,
            image_type: 'photo',
            orientation: 'horizontal',
          },
        });

        const newImages = response.data.hits.map((image) => ({
          id: image.id,
          webformatURL: image.webformatURL,
          largeImageURL: image.largeImageURL,
        }));

        setImages((prevImages) => [...prevImages, ...newImages]);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [searchTerm, page]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setImages([]);
    setPage(1);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageId) => {
    const selectedImage = images.find((image) => image.id === imageId);
    setSelectedImage(selectedImage);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && (
        <div className="loader-container">
          <ThreeDots color="#00BFFF" height={80} width={80} />
        </div>
      )}
      {!isLoading && images.length > 0 && (
        <Button onClick={loadMoreImages}>Load More</Button>
      )}
      {selectedImage && (
        <Modal imageUrl={selectedImage.largeImageURL} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
