import React, { useState, useEffect } from 'react';
import './App.scss';
import MovieGrid from './components/movieGrid/MovieGrid';
import Movie from './components/movie/Movie';
import SelectedMovie from './components/selectedMovie/SelectedMovie';
import Search from './components/search/Search';
import data from './moviedata.json';
import Spinner from './components/spinner/Spinner';
import Badge from './components/badge/Badge';

const App = () => {
  // Properties
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [chosenMovie, setChosenMovie] = useState(null);

  // Methods
  /**
   * Note:
   * This needs to be inside <Search/> because is part of the fetching code.
   */
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

  // Components
  const Content = chosenMovie ? (
    <SelectedMovie chosenMovie={chosenMovie} setChosenMovie={setChosenMovie} />
  ) : (
    <MovieGrid>
      {data.map((movie, idx) => (
        <Movie movie={movie} key={idx} setChosenMovie={setChosenMovie} />
      ))}
    </MovieGrid>
  );

  return (
    <div className="App">
      <header className="App-header">
        <Search />
        {!isLoaded ? <Spinner /> : Content}
        {showBadge && <Badge setShowBadge={setShowBadge} />}
      </header>
    </div>
  );
};

export default App;
