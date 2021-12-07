// NPM packages
import { createContext, useContext, useState } from 'react';

// Properties
const StatusContext = createContext(null);

export function StatusProvider({ children }) {
  // Local state
  const [status, setStatus] = useState([]);
  const [delay, setDelay] = useState(null);

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
