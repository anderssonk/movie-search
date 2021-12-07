// Project files
import MovieGrid from '../movieGrid/MovieGrid';
import SelectedMovie from '../selectedMovie/SelectedMovie';

export default function Content({ movieId, setMovieId, movies }) {
  // Components
  const MovieDetails = <SelectedMovie movieId={movieId} setMovieId={setMovieId} />;
  const MovieList = <MovieGrid movies={movies} setMovieId={setMovieId}></MovieGrid>;

  return movieId ? MovieDetails : MovieList;
}
