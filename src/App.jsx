import React, { useState } from 'react';
import './App.scss';
import MovieGrid from './components/movieGrid/MovieGrid';
import Movie from './components/movie/Movie';
import SelectedMovie from './components/selectedMovie/SelectedMovie';
import data from './moviedata.json';

const App = () => {
  const [chosenMovie, setChosenMovie] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        {chosenMovie ? (
          <SelectedMovie chosenMovie={chosenMovie} setChosenMovie={setChosenMovie} />
        ) : (
          <MovieGrid>
            {data.map((movie, idx) => (
              <Movie movie={movie} key={idx} setChosenMovie={setChosenMovie} />
            ))}
          </MovieGrid>
        )}
      </header>
    </div>
  );
};

export default App;
