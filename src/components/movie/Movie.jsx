// Project files
import ImageBackup from 'assets/no-movie.png';
import { useMovie } from 'state/MovieProvider';
import { useStatus } from 'state/StatusProvider';
import Styles from './Movie.module.scss';

export default function Movie({ movie }) {
  const { imdbID, Title, Poster } = movie;

  // Global state
  const { setMovieId } = useMovie();
  const { setStatus } = useStatus();

  // Properties
  const Image = movie.Poster !== 'N/A' ? movie.Poster : ImageBackup;

  // Methods
  function clickHanlder(id) {
    setStatus(0); // Refactor: i don't feel confortable with this hook here
    setMovieId(id);
  }

  return (
    <article className={Styles.movie} onClick={() => clickHanlder(imdbID)}>
      <img src={Image} alt={Title} />
      <h2>{Title}</h2>
    </article>
  );
}
