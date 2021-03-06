// NPM packages
import { useState } from 'react';

// Project files
import forceDelay from 'scripts/forceDelay';
import { useStatus } from 'state/StatusProvider';
import { useMovie } from 'state/MovieProvider';
import SearchIcon from './search-icon.svg';
import Styles from './Search.module.scss';

export default function Search() {
  // Global state
  const { setMovies } = useMovie();
  const { setStatus, delaySearch } = useStatus();

  // Local state
  const [input, setInput] = useState('');

  // Properties
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  // Methods
  async function submitHandler(event) {
    event.preventDefault();
    const query = input.trim().toLowerCase();
    setStatus(0);
    setInput('');

    const request = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const result = await request.json();
    const onlyMovies = result.Search
      ? result.Search.filter((item) => item.Type === 'movie')
      : result.Search; // remove videogames from the search results
    await forceDelay(delaySearch);

    result.Response === 'True' ? onSucess(onlyMovies) : onFailure();
  }

  function onSucess(result) {
    setMovies(result);
    setStatus(1);
  }

  function onFailure() {
    setStatus(2);
  }

  return (
    <form className={Styles.search} onSubmit={(event) => submitHandler(event)}>
      <input
        placeholder="Search"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        required
        autoFocus
      />
      <button type="submit">
        <img src={SearchIcon} alt="search icon" />
      </button>
    </form>
  );
}
