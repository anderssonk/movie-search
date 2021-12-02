import './App.scss';
import MovieGrid from './components/movieGrid/MovieGrid';
import Movie from './components/movie/Movie';
import Search from './components/search/Search';
import data from './moviedata.json';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Search/>
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
