// NPM packages
import { useState, useEffect } from 'react';

// Project files
import { useStatus } from '../../state/StatusProvider';
import { useMovie } from '../../state/MovieProvider';
import Styles from './SelectedMovie.module.scss';

export default function SelectedMovie() {
  // Global state
  const { status, setStatus } = useStatus();
  const { movieId, setMovieId } = useMovie();

  // Local state
  const [movie, setMovie] = useState();

  // Properties
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  // Methods
  useEffect(() => {
    const getData = async () => {
      const request = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`);
      const result = await request.json();

      setMovie(result);
      setStatus(1);
    };
    getData();
  }, [API_KEY, movieId, setStatus]);

  if (status === 0) return <p>Loading movie details</p>;

  return (
    <section className={Styles.selectedMovie}>
      <button onClick={() => setMovieId(null)}>Close</button>
      <h1>{movie.Title}</h1>
      <div className={Styles.chosenMovie}>
        <img src={movie.Poster} alt={movie.Title} />
        <div className={Styles.movieDetails}>
          <p>Year: {movie.Year}</p>
          <p>Rating: {movie.imdbRating}</p>
          <p>Genre: {movie.Genre}</p>
          <p>Director: {movie.Directors}</p>
          <p>Actors: {movie.Actors}</p>
          <p>Plot: {movie.Plot}</p>
        </div>
      </div>
    </section>
  );
}
