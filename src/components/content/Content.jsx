// Project files
import { useMovie } from 'state/MovieProvider';
import MovieGrid from 'components/movieGrid/MovieGrid';
import SelectedMovie from 'components/selectedMovie/SelectedMovie';

export default function Content() {
  // Global state
  const { movieId } = useMovie();

  return movieId ? <SelectedMovie /> : <MovieGrid />;
}

// Refactor: This component may die as SelectedMovie and MovieGrid can be on App
