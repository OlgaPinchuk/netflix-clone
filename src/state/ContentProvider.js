// NPM packages
import { useContext, createContext, useReducer } from "react";

//Project files
import categoryReducer from "./categoryReducer";
import titleReducer from "./titleReducer";

// Properties
const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  // Local state
  const [categories, categoryDispatch] = useReducer(categoryReducer, []);
  const [titles, titleDispatch] = useReducer(titleReducer, []);

  return (
    <ContentContext.Provider
      value={{ categories, categoryDispatch, titles, titleDispatch }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);

  return context;
}
