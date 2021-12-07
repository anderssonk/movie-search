// NPM packages
import { createContext, useContext, useState } from 'react';

// Properties
const StatusContext = createContext(null);

export function StatusProvider({ children }) {
  // Local state
  const [status, setStatus] = useState(1); // 0 = loading, 1 = ready, 2 = error
  const [delay, setDelay] = useState(0);

  return (
    <StatusContext.Provider value={{ status, setStatus, delay, setDelay }}>
      {children}
    </StatusContext.Provider>
  );
}

export function useStatus() {
  const context = useContext(StatusContext);

  return context;
}
