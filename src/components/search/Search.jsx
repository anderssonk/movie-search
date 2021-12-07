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
  const [input, setInput] = useState('batman'); // Refactor: remove after testing

  // Properties
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  // Methods
  async function submitHandler(event) {
    event.preventDefault();
    const query = input.trim().toLowerCase();
    setStatus(0);

    const request = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const results = await request.json();

    await forceDelay(delaySearch);
    setMovies(results.Search);
    setStatus(1);
    setInput('');
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
