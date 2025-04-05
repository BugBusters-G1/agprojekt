import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";

const Popup = () => {
  const { isPopupVisible, togglePopup } = useAppContext();

  useEffect(() => {
    const timeVisible = 1200;
    if (isPopupVisible) {
      const timer = setTimeout(() => {
        togglePopup();
      }, timeVisible);
      return () => clearTimeout(timer);
    }
  }, [isPopupVisible, togglePopup]);

  const gradient = `linear-gradient(72deg, rgba(255,225,76,1) 0%, rgba(255,107,0,1) 83%)`;

  return (
    isPopupVisible && (
      <div className="fixed top-10 left-1/2 overflow-hidden transform -translate-x-1/2 z-[1000] w-11/12 max-w-sm bg-white/95 text-black rounded-lg shadow-lg p-4">
        <div className="popup-content">
          <p className="text-center">Ändringar sparades!</p>
        </div>

        <span
          className="absolute bottom-0 left-0 h-1 w-full bg-blue-500 shrink-bar"
          style={{ background: gradient }}
        ></span>
      </div>
    )
  );
};

export default Popup;
