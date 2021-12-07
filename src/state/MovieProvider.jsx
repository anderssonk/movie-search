// NPM packages
import { createContext, useContext, useState } from 'react';

// Properties
const MovieContext = createContext(null);

export function MovieProvider({ children }) {
  // Local state
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState(null);

  return (
    <MovieContext.Provider value={{ movies, setMovies, movieId, setMovieId }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovie() {
  const context = useContext(ModalContext);

  return context;
}
