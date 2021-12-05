import React from 'react';
import './SelectedMovie.scss';

const SelectedMovie = ({ chosenMovie, setChosenMovie }) => {
  const { Title, Year, Poster } = chosenMovie;

  return (
    <div className="container">
      <button className="close" onClick={() => setChosenMovie(null)}>
        Close
      </button>
      <h1>{Title}</h1>
      <div className="chosenMovie">
        <img src={Poster} alt={Title} />
        <div className="movieDetails">
          <p>Year: {Year}</p>
          {/* <p>Rating: {rating}</p>
          <p>
            {genres.length > 1 ? 'Genres:' : 'Genre:'} {genres.join(', ')}
          </p>
          <p>
            {directors.length > 1 ? 'Directors:' : 'Director:'} {directors.join(', ')}
          </p>
          <p>
            {actors.length > 1 ? 'Actors:' : 'Actor:'} {actors.join(', ')}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default SelectedMovie;
