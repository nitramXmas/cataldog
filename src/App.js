import dogs from './Data';
import Dogcard from './components/Dogcard';
import FilterSize from './components/FilterSize';
import { useState } from 'react';

function App() {
  /**
   * Utilisation d'un ensemble pour ne conserver
   * que des valeures uniques sur les noms de fitlres
   *
   */
  const allSizes = dogs.map((dog) => dog.size);
  const filteredSizes = new Set(allSizes);
  const uniqueSizes = [];
  filteredSizes.forEach((el) => uniqueSizes.push(el));
  /******************************************************************/

  const [size, setSize] = useState('All'); //Initialisation du state sur toutes les tailles

  /**
   * Fonction de reinitialisation du filtre sur les tailles
   *
   */
  const handleResetSize = () => setSize('All');
  /******************************************************************/

  //Si la taille est 'All', on retourne toutes les cards, sinon on filtre sur la taille
  return (
    <div className="App">
      <h1>DOGS</h1>
      {size === 'All' ? (
        <div className="dogs">
          {dogs.map((dog) => (
            <Dogcard key={dog.id} {...dog} />
          ))}
        </div>
      ) : (
        <div className="dogs">
          {dogs
            .filter((dog) => dog.size === size)
            .map((dog) => (
              <Dogcard key={dog.id} {...dog} />
            ))}
        </div>
      )}
      <div className="filter-size">
        {/*  Bouton de reinitialisation */}
        <button onClick={handleResetSize}>All</button>
        {/*  Appel du filtre sur la taille */}
        {uniqueSizes.map((el) => (
          <FilterSize key={el} setSize={setSize} dogSize={el} />
        ))}
      </div>
    </div>
  );
}

export default App;
