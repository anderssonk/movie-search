// Project files
import { useMovie } from '../../state/MovieProvider';
import Movie from '../movie/Movie';
import Styles from './MovieGrid.module.scss';

export default function MovieGrid() {
  // Global state
  const { movies, setMovieId } = useMovie();

  // Components
  const Movies = movies.map((movie, index) => (
    <Movie key={index} movie={movie} setMovieId={setMovieId} />
  ));

  return <section className={Styles.movieGrid}>{Movies}</section>;
}
