import React from 'react';
import { GlobalContext } from './GlobalContext';


const GlobalProvider = ({ children }) => {
    // Accessing the API URL from environment variables
    const API_URL = process.env.REACT_APP_API_URL;
	const contextValue = { API_URL };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
