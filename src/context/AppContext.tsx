import { createContext, ReactNode, useContext, useRef, useState } from "react";

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
  resetUI: () => void;
  triggerSwipeAnimation: () => void;
  registerSwipeAnimation: (fn: () => void) => void;
  isDesktopNavbarExpand: boolean;
  toggleDesktopNavbarExpand: () => void;
}

const AppContext = createContext<TAppContext | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isCategorySelector, setCategorySelector] = useState(false);
  const [isCardExpanded, setCardExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string>("");

  const [isDesktopNavbarExpand, setDesktopNavbarExpand] =
    useState<boolean>(false);

  const toggleCategorySelector = () => setCategorySelector(!isCategorySelector);
  const toggleDesktopNavbarExpand = () =>
    setDesktopNavbarExpand(!isDesktopNavbarExpand);
  const toggleCardExpand = () => setCardExpanded(!isCardExpanded);
  const togglePopup = () => setPopupVisible((prev) => !prev);

  const showPopup = (message: string) => {
    setPopupMessage(message);
    setPopupVisible(true);
  };

  const resetUI = () => {
    setCategorySelector(false);
    setCardExpanded(false);
    setPopupVisible(false);
    setPopupMessage("");
  };
  const swipeAnimationRef = useRef<() => void>(() => {});

  const registerSwipeAnimation = (fn: () => void) => {
    swipeAnimationRef.current = fn;
  };

  const triggerSwipeAnimation = () => {
    swipeAnimationRef.current?.();
  };

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
        showPopup,
        resetUI,
        registerSwipeAnimation,
        triggerSwipeAnimation,
        isDesktopNavbarExpand,
        toggleDesktopNavbarExpand,
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
