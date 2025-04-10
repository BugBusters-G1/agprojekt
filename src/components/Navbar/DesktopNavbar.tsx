import { FilterContainer } from "../CategorySelector/CategorySelector";
import smLogo from "../../assets/loga.png";
import lgLogo from "../../assets/LogoWithName.png";

import burger from "../../assets/BURGER.svg";
import { useAppContext } from "../../context/AppContext";
import { Navbar } from "./Navbar";
export const DesktopNavbar = () => {
  const {
    toggleCategorySelector,
    isDesktopNavbarExpand,
    toggleDesktopNavbarExpand,
  } = useAppContext();

  return (
    <aside
      className="fixed top-0 h-screen z-[1000] overflow-hidden bg-white flex flex-col gap-2 items-center p-4 shadow-lg shadow-gray-400/40"
      style={{
        width: isDesktopNavbarExpand ? "30%" : "7%",
        transition: "all 300ms ease-in-out",
      }}
    >
      <div className={`${isDesktopNavbarExpand ? "w-35" : "w-15"}`}>
        <img src={isDesktopNavbarExpand ? lgLogo : smLogo} />
      </div>

      <div className="border-t border-gray-300 w-full my-2" />

      {isDesktopNavbarExpand ? (
        <div
          className="flex flex-row p-3 w-80 bg-gray-100 rounded-xl items-center gap-4 cursor-pointer"
          onClick={() => {
            toggleDesktopNavbarExpand();
            toggleCategorySelector();
          }}
        >
          <div className={`w-9`}>
            <img src={burger} />
          </div>
          <p className="text-2xl">Kategorier</p>
        </div>
      ) : (
        <div
          className="flex flex-row p-3 w-auto items-center gap-4 cursor-pointer"
          onClick={() => {
            toggleDesktopNavbarExpand();
            toggleCategorySelector();
          }}
        >
          <div className="w-9">
            <img src={burger} />
          </div>
        </div>
      )}

      {isDesktopNavbarExpand && (
        <>
          <div
            className="transition-opacity duration-500 ease-in-out opacity-100"
            style={{
              opacity: isDesktopNavbarExpand ? 1 : 0,
              visibility: isDesktopNavbarExpand ? "visible" : "hidden",
            }}
          >
            <FilterContainer toggleFilter={toggleCategorySelector} />
            <Navbar expanded={isDesktopNavbarExpand} />
          </div>
        </>
      )}
    </aside>
  );
};
