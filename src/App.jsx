// NPM packages
import { useEffect, useState } from 'react';

// Project files
import Badge from 'components/badge/Badge';
import Logo from './components/logo/Logo';
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
  const { movieId, movies } = useMovie();
  const { status } = useStatus();

  const { setDelaySearch, setDelayDetails } = useStatus();

  // Properties
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

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

  if (!API_KEY) return <div>🚨 Add the API key before opening the project</div>;

  return (
    <div className="App">
      {showBadge && <Badge />}
      <header className="App-header">
        <div className="App-searchbar">
          <Logo />
          <Search />
          {!movies.length && status === 1 && (
            <p>We've got information about your favourite movies!</p>
          )}
        </div>
        <MovieGrid />
        {movieId && <SelectedMovie />}
      </header>
    </div>
  );
}
