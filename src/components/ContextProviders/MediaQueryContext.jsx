import { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

//Create context
export const MediaQueryContext = createContext();

/**
 * Provides a context for media query evaluation within the component tree.
 * 
 * This provider uses the `useMediaQuery` hook to determine if a given media query matches.
 * It exposes a single function, `GetScreenSize`, that accepts a media query string and returns a boolean
 * indicating whether the query matches the current screen size. 
 * 
 * @param {object} props - The component props.
 * @param {ReactNode} props.children - The children components to be wrapped by the provider.
 */

function MediaQueryContextProvider({ children }) {
  const GetScreenSize = (mediaQuery) => {
    return useMediaQuery({ query: mediaQuery });
  };

  const ctxProvider = { GetScreenSize };

  return (
    <MediaQueryContext.Provider value={ctxProvider}>
      {children}
    </MediaQueryContext.Provider>
  );
}

const useMediaQueryContext = () => {
  return useContext(MediaQueryContext);
};

export { MediaQueryContextProvider, useMediaQueryContext };
