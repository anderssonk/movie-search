// Project files
import { useMovie } from '../../state/MovieProvider';
import MovieGrid from '../movieGrid/MovieGrid';
import SelectedMovie from '../selectedMovie/SelectedMovie';

export default function Content() {
  // Global state
  const { movieId } = useMovie();

  return movieId ? <SelectedMovie /> : <MovieGrid />;
}
