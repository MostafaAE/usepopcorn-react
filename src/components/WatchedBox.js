import { useState } from 'react';
import { tempWatchedData } from './App';
import WatchedMovieList from './WatchedMovieList';
import WatchSummary from './WatchSummary';

export default function WatchedBox() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen2(open => !open)}>
        {isOpen2 ? '–' : '+'}
      </button>
      {isOpen2 && (
        <>
          <WatchSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  );
}
