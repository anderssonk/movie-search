// NPM packages
import { useState, useEffect } from 'react';

// Project files
import Badge from 'components/badge/Badge';
import MovieGrid from 'components/movieGrid/MovieGrid';
import Search from 'components/search/Search';
import SelectedMovie from 'components/selectedMovie/SelectedMovie';
import { useMovie } from 'state/MovieProvider';
import { useStatus } from 'state/StatusProvider';
import './App.scss';

export default function App() {
  // Local state
  const [showBadge, setShowBadge] = useState(false);

  // Global state
  const { movieId } = useMovie();
  const { setStatus } = useStatus();

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
  }, [setStatus]);

  return (
    <div className="App">
      <Search />
      {movieId ? <SelectedMovie /> : <MovieGrid />}
      {showBadge && <Badge setShowBadge={setShowBadge} />}
    </div>
  );
}
