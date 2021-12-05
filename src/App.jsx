import { useState, useEffect } from 'react';
import Badge from './components/badge/Badge';
import Movie from './components/movie/Movie';
import MovieGrid from './components/movieGrid/MovieGrid';
import Search from './components/search/Search';
import SelectedMovie from './components/selectedMovie/SelectedMovie';
import Spinner from './components/spinner/Spinner';
import './App.scss';

const App = () => {
  // Properties
  const [chosenMovie, setChosenMovie] = useState(null);
  const [status, setStatus] = useState(0); // 0 = loading, 1 = ready, 2 = error
  const [showBadge, setShowBadge] = useState(false);

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

    setTimeout(() => setStatus(1), delay);
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
        {status === 0 && <Spinner />}
        {status === 1 && Content}
        {status === 2 && <p>🚨 an error ocurred while searching for results</p>}
        {showBadge && <Badge setShowBadge={setShowBadge} />}
      </header>
    </div>
  );
};

export default App;
