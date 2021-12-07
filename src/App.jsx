// NPM packages
import { useEffect, useState } from 'react';

// Project files
import Badge from 'components/badge/Badge';
import MovieGrid from 'components/movieGrid/MovieGrid';
import Search from 'components/search/Search';
import SelectedMovie from 'components/selectedMovie/SelectedMovie';
import { useMovie } from 'state/MovieProvider';
import './App.scss';
import { useStatus } from 'state/StatusProvider';

export default function App() {
  // Local state
  const [showBadge, setShowBadge] = useState(false);

  // Global state
  const { movieId } = useMovie();
  const { setDelaySearch, setDelayDetails } = useStatus();

  // Methods
  useEffect(() => {
    const URLParams = new URLSearchParams(window.location.search);
    const delaySearch = URLParams.get('a') || 0;
    const delayDetails = URLParams.get('b') || 0;
    const showBadge = URLParams.get('c') || false;

    setDelaySearch(delaySearch);
    setDelayDetails(delayDetails);
    setShowBadge(showBadge);
  }, [setDelaySearch, setDelayDetails]);

  return (
    <div className="App">
      <Search />
      {movieId ? <SelectedMovie /> : <MovieGrid />}
      {showBadge && <Badge setShowBadge={setShowBadge} />}
    </div>
  );
}
