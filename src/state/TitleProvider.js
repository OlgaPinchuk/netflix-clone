// NPM packages
import { useContext, createContext, useReducer } from "react";

//Project files
import titleReducer from "./titleReducer";

// Properties
const TitleContext = createContext(null);

export function TitleProvider({ children }) {
  // Local state
  const [titles, titleDispatch] = useReducer(titleReducer, []);

  return (
    <TitleContext.Provider value={{ titles, titleDispatch}}>
      {children}
    </TitleContext.Provider>
  );
}

export function useTitle() {
  const context = useContext(TitleContext);

  return context;
}
