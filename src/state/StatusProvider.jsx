// NPM packages
import { createContext, useContext, useState } from 'react';

// Properties
const StatusContext = createContext(null);

export function StatusProvider({ children }) {
  // Local state
  const [status, setStatus] = useState(1); // 0 = loading, 1 = ready, 2 = error
  const [delaySearch, setDelaySearch] = useState(0);
  const [delayDetails, setDelayDetails] = useState(0);

  return (
    <StatusContext.Provider
      value={{ status, setStatus, delaySearch, setDelaySearch, delayDetails, setDelayDetails }}
    >
      {children}
    </StatusContext.Provider>
  );
}

export function useStatus() {
  const context = useContext(StatusContext);

  return context;
}
