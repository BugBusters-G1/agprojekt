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
    <aside className="fixed top-0 h-screen z-[1000] bg-white flex flex-col gap-2 w-auto items-center p-4 shadow-lg shadow-gray-400/40">
      <div className={` ${isDesktopNavbarExpand ? "w-35" : "w-10"}`}>
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
          <div className={`w-7 `}>
            <img src={burger} />
          </div>
          <p>Kategorier</p>
        </div>
      ) : (
        <div
          className="flex flex-row p-3 w-auto items-center gap-4 cursor-pointer"
          onClick={() => {
            toggleDesktopNavbarExpand();
            toggleCategorySelector();
          }}
        >
          <div className="w-7">
            <img src={burger} />
          </div>
        </div>
      )}
      {isDesktopNavbarExpand && (
        <>
          {" "}
          <FilterContainer toggleFilter={toggleCategorySelector} />
          <Navbar expanded={isDesktopNavbarExpand} />
        </>
      )}
    </aside>
  );
};
