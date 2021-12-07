// Project files
import { useState, useEffect } from 'react';
import Styles from './SelectedMovie.module.scss';

export default function SelectedMovie({ chosenMovie, setChosenMovie }) {
  // Local state
  const [status, setStatus] = useState(0); // 0 = loading, 1 = ready, 2 = error
  const [movie, setMovie] = useState();

  // Properties
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  // Methods
  useEffect(() => {
    const getData = async () => {
      const request = await fetch(`http://www.omdbapi.com/?i=${chosenMovie}&apikey=${API_KEY}`);
      const result = await request.json();

      setMovie(result);
      setStatus(1);
    };
    getData();
  }, [API_KEY, chosenMovie]);

  if (status === 0) return <p>Loading movie details</p>;

  return (
    <section className={Styles.container}>
      <button className="close" onClick={() => setChosenMovie(null)}>
        Close
      </button>
      <h1>{movie.Title}</h1>
      <div className="chosenMovie">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="movieDetails">
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
