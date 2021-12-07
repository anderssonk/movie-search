// Project files
import Styles from './Movie.module.scss';

export default function Movie({ movie, setMovieId }) {
  const { imdbID, Title, Poster } = movie;

  return (
    <article className={Styles.movie} onClick={() => setMovieId(imdbID)}>
      <img src={Poster} alt={Title} />
      <h2>{Title}</h2>
    </article>
  );
}
