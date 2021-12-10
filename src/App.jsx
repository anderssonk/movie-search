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

  // Properties
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  // Methods
  useEffect(() => {
    const URLParams = new URLSearchParams(document.location.search);
    const delaySearch = URLParams.get('a') || 0;
    const delayDetails = URLParams.get('b') || 0;
    const showBadge = URLParams.get('c') || 0;

    setDelaySearch(delaySearch);
    setDelayDetails(delayDetails);
    setShowBadge(showBadge);

    console.log('window.location', document.location);
    console.log('window.location.search', document.location.search);
    console.log('URLParams', URLParams);
    console.log("URLParams.get('c')", URLParams.get('c'));
    console.log('showBadge', showBadge);
  }, [setDelaySearch, setDelayDetails]);

  if (!API_KEY) return <div>🚨 Add the API key before opening the project</div>;

  return (
    <div className="App">
      <Search />
      {movieId ? <SelectedMovie /> : <MovieGrid />}
      {showBadge === '1' && <Badge setShowBadge={setShowBadge} />}
    </div>
  );
}
