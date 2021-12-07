// NPM packages
import { useState, useEffect } from 'react';

// Project files
import Badge from './components/badge/Badge';
import Search from './components/search/Search';
import Content from './components/content/Content';
import Spinner from './components/spinner/Spinner';
import { useStatus } from './state/StatusProvider';
import './App.scss';

export default function App() {
  // Local state
  const [showBadge, setShowBadge] = useState(false);

  // Global state
  const { status, setStatus } = useStatus();

  // Methods
  useEffect(() => {
    const hash = window.location.hash;
    let delay = 0;

    if (hash === '#alpha') delay = 0;
    if (hash === '#beta') delay = 1000;
    if (hash === '#charlie') {
      delay = 5000;
      setShowBadge(true);
    }

    setTimeout(() => setStatus(1), delay);
  }, []);

  return (
    <div className="App">
      <Search />
      {status === 0 && <Spinner />}
      {status === 1 && <Content />}
      {showBadge && <Badge setShowBadge={setShowBadge} />}
    </div>
  );
}
