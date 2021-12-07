import { useState, useEffect } from 'react';
import Badge from './components/badge/Badge';
import Search from './components/search/Search';
import Content from './components/content/Content';
import Spinner from './components/spinner/Spinner';
import './App.scss';

const App = () => {
  // Properties
  const [chosenMovie, setChosenMovie] = useState(null);
  const [status, setStatus] = useState(0); // 0 = loading, 1 = ready, 2 = error
  const [showBadge, setShowBadge] = useState(false);
  const [movies, setMovies] = useState([]);

  // Methods
  useEffect(() => {
    const hash = window.location.hash;
    let delay = 0;

    if (hash === '#alpha') delay = 0;
    if (hash === '#beta') delay = 1000;
    if (hash === '#charlie') {
      delay = 5000;
      setShowBadge(true);
    }

    setTimeout(() => setStatus(1), delay);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Search setMovies={setMovies} status={status} setStatus={setStatus} />
        {status === 0 && <Spinner />}
        {status === 1 && (
          <Content chosenMovie={chosenMovie} setChosenMovie={setChosenMovie} movies={movies} />
        )}
        {status === 2 && <p>🚨 an error ocurred while searching for results</p>}
        {showBadge && <Badge setShowBadge={setShowBadge} />}
      </header>
    </div>
  );
};

export default App;
