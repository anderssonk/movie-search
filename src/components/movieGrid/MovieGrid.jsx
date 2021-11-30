import React from 'react';
import Styles from './MovieGrid.module.scss';

const MovieGrid = ({ children }) => {
  return <section className={Styles.movieGrid}>{children}</section>;
};

export default MovieGrid;
