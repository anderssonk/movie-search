// NPM packages
import { useState } from 'react';

// Project files
import { useStatus } from '../../state/StatusProvider';
import SearchIcon from './search-icon.svg';
import Styles from './Search.module.scss';

export default function Search() {
  // Global state
  const { setStatus } = useStatus();
  const { setMovies } = useMovie();

  // Local state
  const [input, setInput] = useState('');

  // Properties
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  // Methods
  async function submitHandler(event) {
    event.preventDefault();
    const query = input.trim().toLowerCase();
    setStatus(0);

    const request = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const results = await request.json();
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
      />
      <button type="submit">
        <img src={SearchIcon} alt="search icon" />
      </button>
    </form>
  );
}
