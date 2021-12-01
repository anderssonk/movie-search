import React from 'react';
import './SelectedMovie.scss';

const SelectedMovie = ({ chosenMovie, setChosenMovie }) => {
  const {
    title,
    year,
    info: { image_url, rating, genres, directors, actors },
  } = chosenMovie;

  return (
    <div className="container">
      <div className="close" onClick={() => setChosenMovie()}>
        Close
      </div>
      <h1>{chosenMovie.title}</h1>
      <div className="chosenMovie">
        <img src={image_url} alt={title} />
        <div className="movieDetails">
          <p>Year: {year}</p>
          <p>Rating: {rating}</p>
          <p>
            {genres.length > 1 ? 'Genres:' : 'Genre:'} {genres.join(', ')}
          </p>
          <p>
            {directors.length > 1 ? 'Directors:' : 'Director:'} {directors.join(', ')}
          </p>
          <p>
            {actors.length > 1 ? 'Actors:' : 'Actor:'} {actors.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectedMovie;
