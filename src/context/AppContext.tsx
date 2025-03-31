import { createContext, ReactNode, useContext, useState } from "react";

interface TAppContext {
  isFilterOpen: boolean;
  toggleFilter: () => void;
  isCardExpanded: boolean;
  toggleCardExpand: () => void;
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
}

const AppContext = createContext<TAppContext | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCardExpanded, setCardExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);
  
  const toggleCardExpand = () => {
    setCardExpanded(!isCardExpanded);
  };

  return (
    <AppContext.Provider
      value={{
        isFilterOpen,
        toggleFilter,
        isCardExpanded,
        toggleCardExpand,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
