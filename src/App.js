import React, { useState } from 'react';
import './App.css';
import BreedList from './components/BreedList';
import ImageGallery from './components/ImageGallery';

function App() {
  const [selectedBreed, setSelectedBreed] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Galeria de Raças de Cachorros</h1>
      </header>
      <BreedList setSelectedBreed={setSelectedBreed} />
      <ImageGallery breed={selectedBreed} />
      <footer>
        <p>© 2024 Galeria de Raças de Cachorros. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
