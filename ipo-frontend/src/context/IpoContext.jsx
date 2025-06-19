import { createContext, useState } from "react";

export const IpoContext = createContext();

export const IpoProvider = ({ children }) => {
  const [ipoData, setIpoData] = useState([]);

  return (
    <IpoContext.Provider value={{ ipoData, setIpoData }}>
      {children}
    </IpoContext.Provider>
  );
};
