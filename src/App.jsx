import './App.scss';
import MovieGrid from './components/movieGrid/MovieGrid';
import Movie from './components/movie/Movie';
import data from './moviedata.json';

function App() {
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
}

export default App;
