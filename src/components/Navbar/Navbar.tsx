import { useAppContext } from "../../context/AppContext";
import { useJokesContext } from "../../context/JokeContext";
import { NavItem, NavItemProps } from "./NavItem";
import "./Navbar.css";
import BurgerIcon from "../../assets/BURGER.svg";
import LeftIcon from "../../assets/ARROW_LEFT.svg";
import RightIcon from "../../assets/ARROW_RIGHT.svg";
import ExitIcon from "../../assets/EXIT_BIG.svg";
import CheckIcon from "../../assets/Checmark.svg";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const {
    toggleCardExpand,
    toggleCategorySelector,
    isCategorySelector,
    isCardExpanded,
    showPopup
  } = useAppContext();

  const {
    removeTopJoke,
    restorePreviousJoke,
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

    const hasChanged = !areArraysEqual(tempSelectedCategories, selectedCategories);
    setCategoriesChanged(hasChanged);
  }, [tempSelectedCategories, selectedCategories]);

  const navItems: NavItemProps[] = [
    {
      type: "button",
      onClick: restorePreviousJoke,
      imgSrc: LeftIcon,
    },

    {
      type: "button",
      onClick: () => {
        if (isCategorySelector) {
          if (categoriesChanged) {
            applyCategoryChanges();      
            showPopup("Ändringar sparade!");             
            setCategoriesChanged(false);
          } else {
            discardCategoryChanges();   
          }
        } else {
          initCategorySelection();       
        }

        toggleCategorySelector();        
      },
      imgSrc: isCategorySelector
        ? (categoriesChanged ? CheckIcon : ExitIcon)
        : BurgerIcon,
    },

    {
      type: "button",
      onClick: () => {
        if (isCardExpanded) toggleCardExpand();
        removeTopJoke();
      },
      imgSrc: RightIcon,
    },
  ];

  return (
    <nav>
      {navItems.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </nav>
  );
};
