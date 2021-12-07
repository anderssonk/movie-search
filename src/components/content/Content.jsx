// Project files
import Movie from '../movie/Movie';
import MovieGrid from '../movieGrid/MovieGrid';
import SelectedMovie from '../selectedMovie/SelectedMovie';

export default function Content({ movieId, setMovieId, movies }) {
  // Components
  const MovieDetails = <SelectedMovie movieId={movieId} setMovieId={setMovieId} />;
  const MovieList = (
    <MovieGrid>
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} setMovieId={setMovieId} />
      ))}
    </MovieGrid>
  );

  return chosenMovie ? MovieDetails : MovieList;
}
