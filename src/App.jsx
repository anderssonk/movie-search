import { useEffect, useState } from 'react';
import MovieGrid from './components/movieGrid/MovieGrid';
import Movie from './components/movie/Movie';
import Spinner from './components/spinner/Spinner';
import data from './moviedata.json';
import './App.scss';

const App = () => {
  // Properties
  const [isLoaded, setIsLoaded] = useState(false);

  // Methods
  /**
   * I can refactor the hash and delay variables to a separate js file to keep this file clean.
   * But i want to know more about the different versions before adding more code...
   */
  useEffect(() => {
    const hash = window.location.hash;
    let delay = 0;

    if (hash === '#alpha') delay = 0;
    if (hash === '#beta') delay = 1000;
    if (hash === '#charlie') delay = 5000;

    setTimeout(() => setIsLoaded(true), delay);
  }, []);

  // Safeguard (wait until the delay has completed)
  if (!isLoaded) return <Spinner />;

  return (
    <div className="App">
      <header className="App-header">
        <MovieGrid>
          {data.map((movie, idx) => (
            <Movie movie={movie} key={idx} />
          ))}
        </MovieGrid>
      </header>
    </div>
  );
};

export default App;
