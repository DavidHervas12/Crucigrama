import React, { createContext, useState } from 'react';

const ScreensContext = createContext();

export const ScreensProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); 
  return (
    <ScreensContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
      {children}
    </ScreensContext.Provider>
  );
};

export default ScreensContext;
