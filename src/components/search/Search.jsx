// NPM packages
import { useState } from 'react';

// Project files
import forceDelay from 'scripts/forceDelay';
import { useStatus } from 'state/StatusProvider';
import { useMovie } from 'state/MovieProvider';
import { ReactComponent as SearchIcon } from './search-solid.svg';
import Styles from './Search.module.scss';

export default function Search() {
  // Global state
  const { setMovies } = useMovie();
  const { setStatus, delaySearch } = useStatus();

  // Local state
  const [input, setInput] = useState(''); // Refactor: remove after testing

  // Properties
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  // Methods
  async function submitHandler(event) {
    event.preventDefault();
    const query = input.trim().toLowerCase();
    setStatus(0);
    setInput('');

    const request = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const result = await request.json();
    await forceDelay(delaySearch);
    console.log(result);

    result.Response === 'True' ? onSucess(result.Search) : onFailure();
  }

  function onSucess(result) {
    setMovies(result);
    setStatus(1);
  }

  function onFailure() {
    setStatus(2);
  }

  return (
    <section className={Styles.search}>
      <header>
        <h2>M🔍vies</h2>
        <p>Search information about your favorite movies.</p>
      </header>
      <form onSubmit={(event) => submitHandler(event)}>
        <input
          placeholder="Ex: Batman"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          required
          autoFocus
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </section>
  );
}
