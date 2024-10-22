import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BreedList({ setSelectedBreed }) {
  const [breeds, setBreeds] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const sortedBreeds = Object.keys(response.data.message).sort();
        setBreeds(sortedBreeds);
      })
      .catch(error => console.error('Erro ao buscar as raças:', error));
  }, []);

  return (
    <div className="breed-dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>
        Escolha uma raça
      </button>
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

