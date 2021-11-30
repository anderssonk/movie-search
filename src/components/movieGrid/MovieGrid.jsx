import React from 'react';
import Styles from './MovieGrid.module.scss';

const MovieGrid = ({ children }) => {
  return <div className={Styles.movieGrid}>{children}</div>;
};

export default MovieGrid;
