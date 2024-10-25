import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageGallery({ breed }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false); // Estado de carregamento

  useEffect(() => {
    const fetchImages = async () => {
      if (breed) {
        setLoading(true); // Inicia o carregamento
        try {
          const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/4`);
          setImages(response.data.message);
        } catch (error) {
          console.error('Erro ao buscar as imagens:', error);
          alert('Ocorreu um erro ao buscar as imagens. Tente novamente mais tarde.');
        } finally {
          setLoading(false); // Finaliza o carregamento
        }
      }
    };

    fetchImages();
  }, [breed]);

  return (
    <div className="images">
      {loading && <p>Carregando imagens...</p>} {/* Mensagem de carregamento */}
      {images.map((image, index) => (
        <img key={index} src={image} alt={breed} />
      ))}
    </div>
  );
}

export default ImageGallery;

