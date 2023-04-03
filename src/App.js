import { useState } from 'react';
import dogs from './data.json';
import Dogcard from './components/Dogcard';

function App() {
  return (
    <div className="App">
      <h1>DOGS</h1>
      {/* <div className="filters">
        {dogs
          .filter((dog) => dog.size === 'small')
          .map((dogSize) => (
            <li>{dogSize.breed}</li>
          ))}
      </div> */}
      <div className="dogs">
        {dogs.map((dog) => (
          <Dogcard key={dog.id} {...dog} />
        ))}
      </div>
    </div>
  );
}

export default App;
