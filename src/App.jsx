// NPM packages
import { useState } from 'react';

// Project files
import Badge from 'components/badge/Badge';
import MovieGrid from 'components/movieGrid/MovieGrid';
import Search from 'components/search/Search';
import SelectedMovie from 'components/selectedMovie/SelectedMovie';
import { useMovie } from 'state/MovieProvider';
import './App.scss';

export default function App() {
  // Local state
  const [showBadge, setShowBadge] = useState(false);

  // Global state
  const { movieId } = useMovie();

  return (
    <div className="App">
      <Search />
      {movieId ? <SelectedMovie /> : <MovieGrid />}
      {showBadge && <Badge setShowBadge={setShowBadge} />}
    </div>
  );
}
