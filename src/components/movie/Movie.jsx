import Styles from './Movie.module.scss';

const Movie = ({ movie, setChosenMovie }) => {
  const { Title, Poster } = movie;

  return (
    <article className={Styles.movie} onClick={() => setChosenMovie(movie)}>
      <img src={Poster} alt={Title} />
      <div className={Styles.info}>
        <h2 className={Styles.title}>{Title}</h2>
      </div>
    </article>
  );
};

export default Movie;
