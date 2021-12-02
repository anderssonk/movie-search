import React, { useState, useEffect } from 'react';
import Styles from './Search.module.scss';

const Search = (props) => {
  const [input, setInput] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let inputCopy = input.trim().toLowerCase();

    if (inputCopy.length > 0) {
      setRedirect(true);
    } else {
      setInput('');
    }
  };

  useEffect(() => {
    return () => {
      setRedirect(false);
    };
  }, [redirect]);

  if (redirect) {
    // TODO: API request
  }

  console.log('input', input);
  console.log('redirect', redirect);

  return (
    <form className={Styles.search}>
      <input
        placeholder="Search"
        type="text"
        className={Styles.search_input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button type="button" className={Styles.search_btn} onClick={(e) => submitHandler(e)}>
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
