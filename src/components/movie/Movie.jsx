import React from 'react';
import Styles from './Movie.module.scss';

const Movie = ({ movie }) => {
  const {
    title,
    info: { image_url, rating },
  } = movie;

  return (
    <div className={Styles.movie}>
      <img src={image_url} alt={title}></img>
      <div className={Styles.info}>
        <h2 className={Styles.title}>{title}</h2>
        <h4 className={Styles.rating}>{rating}</h4>
      </div>
    </div>
  );
};

export default Movie;
