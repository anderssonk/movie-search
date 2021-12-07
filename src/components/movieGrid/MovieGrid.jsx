// Project files
import { useMovie } from 'state/MovieProvider';
import { useStatus } from 'state/StatusProvider';
import Movie from 'components/movie/Movie';
import Styles from './MovieGrid.module.scss';
import Spinner from 'components/spinner/Spinner';

export default function MovieGrid() {
  // Global state
  const { movies, setMovieId } = useMovie();
  const { status } = useStatus();

  // Components
  const Movies = movies.map((movie, index) => (
    <Movie key={index} movie={movie} setMovieId={setMovieId} />
  ));

  if (status === 0) return <Spinner />;

  return <section className={Styles.movieGrid}>{Movies}</section>;
}
