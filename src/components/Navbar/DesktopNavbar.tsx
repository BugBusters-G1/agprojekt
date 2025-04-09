import { FilterContainer } from "../CategorySelector/CategorySelector";
import smLogo from "../../assets/loga.png";
import lgLogo from "../../assets/LogoWithName.png";

import burger from "../../assets/BURGER.svg";
import { useAppContext } from "../../context/AppContext";
import { useEffect, useState } from "react";
import { useJokesContext } from "../../context/JokeContext";
import BurgerIcon from "../../assets/BURGER.svg";
import ExitIcon from "../../assets/EXIT_BIG.svg";
import CheckIcon from "../../assets/Checmark.svg";
import { NavItem } from "./NavItem";
export const DesktopNavbar = () => {
  const {
    toggleCategorySelector,
    isCategorySelector,
    isDesktopNavbarExpand,
    showPopup,
    toggleDesktopNavbarExpand,
  } = useAppContext();

  const {
    selectedCategories,
    tempSelectedCategories,
    applyCategoryChanges,
    discardCategoryChanges,
    initCategorySelection,
  } = useJokesContext();

  const [categoriesChanged, setCategoriesChanged] = useState(false);

  useEffect(() => {
    const areArraysEqual = (a: string[], b: string[]) => {
      if (a.length !== b.length) return false;
      const sortedA = [...a].sort();
      const sortedB = [...b].sort();
      return sortedA.every((val, i) => val === sortedB[i]);
    };

    const hasChanged = !areArraysEqual(
      tempSelectedCategories,
      selectedCategories
    );
    setCategoriesChanged(hasChanged);
  }, [tempSelectedCategories, selectedCategories]);

  const handleCategoryButtonClick = () => {
    if (!isCategorySelector) {
      initCategorySelection();
      toggleCategorySelector();
      return;
    }

    if (categoriesChanged) {
      applyCategoryChanges();
      showPopup("Ändringar sparade!");
      setCategoriesChanged(false);
    } else {
      discardCategoryChanges();
    }

    toggleCategorySelector();
  };

  const getCategoryIcon = () => (categoriesChanged ? CheckIcon : ExitIcon);

  return (
    <aside className="absolute top-0 h-screen z-[1000] bg-white flex flex-col gap-2 w-auto items-center p-4 shadow-lg shadow-gray-400/40">
      <div className={` ${isDesktopNavbarExpand ? "w-35" : "w-10"}`}>
        <img src={isDesktopNavbarExpand ? lgLogo : smLogo} />
      </div>

      <div className="border-t border-gray-300 w-full my-2" />

      {isDesktopNavbarExpand ? (
        <div
          className="flex flex-row p-3 w-80 bg-gray-100 rounded-xl items-center gap-4 cursor-pointer"
          onClick={toggleDesktopNavbarExpand}
        >
          <div className={`w-7 `}>
            <img src={burger} />
          </div>
          <p>Kategorier</p>
        </div>
      ) : (
        <div
          className="flex flex-row p-3 w-auto items-center gap-4 cursor-pointer"
          onClick={toggleDesktopNavbarExpand}
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
          <NavItem
            type="button"
            onClick={() => {
              handleCategoryButtonClick();
              toggleCategorySelector();
              toggleDesktopNavbarExpand();
            }}
            imgSrc={getCategoryIcon()}
          />
        </>
      )}
    </aside>
  );
};
