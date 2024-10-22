import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageGallery({ breed }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (breed) {
      axios.get(`https://dog.ceo/api/breed/${breed}/images/random/4`)
        .then(response => {
          setImages(response.data.message);
        })
        .catch(error => console.error('Erro ao buscar as imagens:', error));
    }
  }, [breed]);

  return (
    <div className="images">
      {images.map((image, index) => (
        <img key={index} src={image} alt={breed} />
      ))}
    </div>
  );
}

export default ImageGallery;

