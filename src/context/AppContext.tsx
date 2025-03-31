import { createContext, ReactNode, useContext, useState } from "react";

interface TAppContext {
  isCategorySelector: boolean;
  toggleCategorySelector: () => void;
  isCardExpanded: boolean;
  toggleCardExpand: () => void;
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
}

const AppContext = createContext<TAppContext | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isCategorySelector, setCategorySelector] = useState(false);
  const [isCardExpanded, setCardExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleCategorySelector = () => setCategorySelector(!isCategorySelector);
  const toggleCardExpand = () => setCardExpanded(!isCardExpanded);

  return (
    <AppContext.Provider
      value={{
        isCategorySelector,
        toggleCategorySelector,
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
