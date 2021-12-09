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
    const close = (e) => {
      const card = document.getElementById('movie-card');
      const container = document.getElementById('movie-container');

      if (!(card === e.target) && e.target === container) {
        setMovieId(null);
      }
    };
    window.addEventListener('click', close);
    return () => {
      window.removeEventListener('click', close);
    };
  }, []);

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

  return (
    <div className={Styles.movieContainer} id="movie-container">
      <section className={Styles.movieCard} id="movie-card">
        <button className={Styles.closeButton} onClick={() => setMovieId(null)} title="Close">
          &#10005;
        </button>
        {status === 0 ? (
          <div className={Styles.loading}>
            <Spinner />
          </div>
        ) : (
          <>
            <img src={movie.Poster} alt={movie.Title} />
            <div className={Styles.movieInfo}>
              <div>
                <h1>{movie.Title}</h1>
                <p>Year: {movie.Year}</p>
                <p>Rating: {movie.imdbRating}</p>
                <p>Genre: {movie.Genre}</p>
                {movie.Directors ? (
                  <p>Directors: {movie.Directors}</p>
                ) : (
                  <p>Director: {movie.Director}</p>
                )}
                <p>Actors: {movie.Actors}</p>
                <p>Plot: {movie.Plot}</p>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
