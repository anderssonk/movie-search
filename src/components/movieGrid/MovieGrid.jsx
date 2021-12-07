// Project files
import Movie from '../movie/Movie';
import Styles from './MovieGrid.module.scss';

const MovieGrid = ({ movies, setMovieId }) => {
  // Components
  const Movies = movies.map((movie, index) => (
    <Movie key={index} movie={movie} setMovieId={setMovieId} />
  ));

  return <section className={Styles.movieGrid}>{Movies}</section>;
};

export default MovieGrid;
