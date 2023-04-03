import { useState } from 'react';
import './App.css';
import dogs from './data.json';
import Dogcard from './components/Dogcard';

function App() {
  return (
    <div className="App">
      <h1>DOGS</h1>
      <div className="dogs">
        {dogs.map((dog) => (
          <Dogcard key={dog.id} {...dog} />
        ))}
      </div>
    </div>
  );
}

export default App;
