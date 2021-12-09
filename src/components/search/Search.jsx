import { useState } from 'react';
import Styles from './Search.module.scss';

const Search = ({ setStatus, setMovies, setChosenMovie }) => {
  const [input, setInput] = useState('');
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  const submitHandler = async (e) => {
    setChosenMovie(null);
    e.preventDefault();

    const inputCopy = input.trim().toLowerCase();

    if (inputCopy.length > 0) {
      setStatus(0);

      const request = await fetch(`http://www.omdbapi.com/?s=${inputCopy}&apikey=${API_KEY}`);
      const results = await request.json();
      setMovies(results.Search);
      setStatus(1);
    } else {
      setInput('');
    }
  };

  return (
    <form className={Styles.search} onSubmit={(e) => submitHandler(e)}>
      <input
        placeholder="Search"
        type="text"
        className={Styles.search_input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button type="submit" className={Styles.search_btn}>
        <svg className={Styles.svg_btn} viewBox="0 0 24 24">
          <path
            fill="#666666"
            d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
          />
        </svg>
      </button>
    </form>
  );
};

export default Search;
