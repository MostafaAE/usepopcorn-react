import { useState } from 'react';
import { tempMovieData } from './App';
import Movie from './Movie';

export default function MovieList() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <ul className="list">
      {movies?.map(movie => (
        <Movie movie={movie} />
      ))}
    </ul>
  );
}
