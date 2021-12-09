// NPM packages
import { useState, useEffect } from 'react';

// Project files
import Spinner from 'components/spinner/Spinner';
import forceDelay from 'scripts/forceDelay';
import { useStatus } from 'state/StatusProvider';
import { useMovie } from 'state/MovieProvider';
import Styles from './SelectedMovie.module.scss';

export default function SelectedMovie() {
  // Global state
  const { status, setStatus, delayDetails } = useStatus();
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
      await forceDelay(delayDetails);

      setMovie(result);
      setStatus(1);
    };
    getData();
  }, [API_KEY, movieId, setStatus, delayDetails]);

  if (status === 0) return <Spinner />;

  return (
    <section className={Styles.selectedMovie}>
      <button onClick={() => setMovieId(null)}>Close</button>
      <h1>{movie.Title}</h1>
      <div className={Styles.container}>
        <img src={movie.Poster} alt={movie.Title} />
        <ul>
          <li>Year: {movie.Year}</li>
          <li>Rating: {movie.imdbRating}</li>
          <li>Genre: {movie.Genre}</li>
          {movie.Directors ?
          <li>Directors: {movie.Directors}</li> : <li>Director: {movie.Director}</li>}
          <li>Actors: {movie.Actors}</li>
          <li>Plot: {movie.Plot}</li>
        </ul>
      </div>
    </section>
  );
}
