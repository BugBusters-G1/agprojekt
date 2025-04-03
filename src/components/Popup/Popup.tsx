import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";

const Popup = () => {
  const { isPopupVisible, togglePopup } = useAppContext();

  useEffect(() => {
    if (isPopupVisible) {
      const timer = setTimeout(() => {
        togglePopup();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isPopupVisible, togglePopup]);

  return (
    isPopupVisible && (
      <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-[1000] w-11/12 max-w-md bg-gray-700 text-white rounded-lg shadow-lg p-4">
        <div className="popup-content">
          <p className="text-center">Ändringar sparades!</p>
        </div>
      </div>
    )
  );
};

export default Popup;
