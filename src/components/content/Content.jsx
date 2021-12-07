import Movie from './movie/Movie';
import MovieGrid from './movieGrid/MovieGrid';
import SelectedMovie from './selectedMovie/SelectedMovie';

const Content = ({ chosenMovie, setChosenMovie, movies }) => {
  // Components
  const MovieDetails = <SelectedMovie chosenMovie={chosenMovie} setChosenMovie={setChosenMovie} />;
  const MovieList = (
    <MovieGrid>
      {movies.map((movie, idx) => (
        <Movie movie={movie} key={idx} setChosenMovie={setChosenMovie} />
      ))}
    </MovieGrid>
  );

  return chosenMovie ? MovieDetails : MovieList;
};
