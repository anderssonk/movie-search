import React, { useState, useEffect } from 'react';
import './SelectedMovie.scss';

const SelectedMovie = ({ chosenMovie, setChosenMovie }) => {
  const [status, setStatus] = useState(0); // 0 = loading, 1 = ready, 2 = error
  const [movie, setMovie] = useState();
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  useEffect(() => {
    const getData = async () => {
      const request = await fetch(`http://www.omdbapi.com/?i=${chosenMovie}&apikey=${API_KEY}`);
      const result = await request.json();

      setMovie(result);
      setStatus(1);
    };
    getData();
  }, [chosenMovie]);

  if (status === 0) return <p>Loading movie details</p>;

  return (
    <div className="container">
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
    </div>
  );
};

/**
 * Note:
 * This API does not return actors, directors and genre as arrays but strings.
 *
 * So for the plural titles like Actor vs. Actors,
 * we would need to convert the strings into array before asking if there are 1
 * or multiple items.
 */

export default SelectedMovie;
