import { createContext, ReactNode, useContext, useState } from "react";

interface TAppContext {
  isCategorySelector: boolean;
  toggleCategorySelector: () => void;
  isCardExpanded: boolean;
  toggleCardExpand: () => void;
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  isPopupVisible: boolean;
  togglePopup: () => void;
  popupMessage: string; 
  showPopup: (message: string) => void; 
}

const AppContext = createContext<TAppContext | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isCategorySelector, setCategorySelector] = useState(false);
  const [isCardExpanded, setCardExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false); // State for popup visibility
  const [popupMessage, setPopupMessage] = useState<string>("");

  const toggleCategorySelector = () => setCategorySelector(!isCategorySelector);
  const toggleCardExpand = () => setCardExpanded(!isCardExpanded);
  const togglePopup = () => setPopupVisible((prev) => !prev);

  const showPopup = (message: string) => {
    setPopupMessage(message)
    setPopupVisible(true)
  }

  return (
    <AppContext.Provider
      value={{
        isCategorySelector,
        toggleCategorySelector,
        isCardExpanded,
        toggleCardExpand,
        isLoading,
        setIsLoading,
        isPopupVisible,
        togglePopup,
        popupMessage,
        showPopup
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
