import React, { useState, useEffect } from 'react';
import './App.scss';
import MovieGrid from './components/movieGrid/MovieGrid';
import Movie from './components/movie/Movie';
import data from './moviedata.json';
import Spinner from './components/spinner/Spinner';
import Badge from './components/badge/Badge';

const App = () => {
  // Properties
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBadge, setShowBadge] = useState(false);

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

    setTimeout(() => setIsLoaded(true), delay);
  }, []);

  if (!isLoaded) return <Spinner />;

  return (
    <div className="App">
      <header className="App-header">
        <MovieGrid>
          {data.map((movie, idx) => (
            <Movie movie={movie} key={idx} />
          ))}
        </MovieGrid>
        {showBadge && <Badge setShowBadge={setShowBadge} />}
      </header>
    </div>
  );
};

export default App;
