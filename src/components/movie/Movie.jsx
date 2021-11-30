import React from 'react';
import Styles from './Movie.module.scss';

const Movie = ({ movie }) => {
  const {
    title,
    info: { image_url, rating },
  } = movie;

  return (
    <article className={Styles.movie}>
      <img src={image_url} alt={title} />
      <div className={Styles.info}>
        <h2 className={Styles.title}>{title}</h2>
        <p className={Styles.rating}>{rating}</p>
      </div>
    </article>
  );
};

export default Movie;
