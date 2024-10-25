import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BreedList({ setSelectedBreed }) {
  const [breeds, setBreeds] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Estado de carregamento

  useEffect(() => {
    const fetchBreeds = async () => {
      setLoading(true); // Inicia o carregamento
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/list/all');
        const sortedBreeds = Object.keys(response.data.message).sort();
        setBreeds(sortedBreeds);
      } catch (error) {
        console.error('Erro ao buscar as raças:', error);
        alert('Ocorreu um erro ao buscar as raças. Tente novamente mais tarde.');
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchBreeds();
  }, []);

  return (
    <div className="breed-dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>
        Escolha uma raça
      </button>
      {loading && <p>Carregando raças...</p>} {/* Mensagem de carregamento */}
      {isOpen && (
        <ul>
          {breeds.map(breed => (
            <li key={breed} onClick={() => {
              setSelectedBreed(breed);
              setIsOpen(false);
            }}>
              {breed}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BreedList;
