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

  // TODO: make separate component
  const Placeholders = [...Array(10)].map((_, index) => (
    <div key={index} className={Styles.placeholder}>
      <Spinner />
    </div>
  ));

  if (status === 2)
    return (
      <div className={Styles.noMovies}>
        <p>🚨 No movies found. Please try again.</p>
      </div>
    );

  return (
    <section className={Styles.movieGrid}>
      {status === 0 && Placeholders}
      {status === 1 && Movies}
    </section>
  );
}
