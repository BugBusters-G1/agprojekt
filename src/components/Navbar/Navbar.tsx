import { useAppContext } from "../../context/AppContext";
import { useJokesContext } from "../../context/JokeContext";
import { NavItem, NavItemProps } from "./NavItem";
import "./Navbar.css";

import BurgerIcon from "../../assets/BURGER.svg";
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
    selectedCategories,
    tempSelectedCategories,
    applyCategoryChanges,
    discardCategoryChanges,
    initCategorySelection,
  } = useJokesContext();

  const [categoriesChanged, setCategoriesChanged] = useState(false);

  const areArraysEqual = (a: string[], b: string[]) => {
    if (a.length !== b.length) return false;
    return [...a].sort().every((val, i) => val === [...b].sort()[i]);
  };
  
  useEffect(() => {
    setCategoriesChanged(!areArraysEqual(tempSelectedCategories, selectedCategories));
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
  
 
  const getCategoryIcon = () =>
    isCategorySelector
      ? categoriesChanged
        ? CheckIcon
        : ExitIcon
      : BurgerIcon;
  
  const navItems: NavItemProps[] = [
    {
      type: "button",
      onClick: handleCategoryButtonClick,
      imgSrc: getCategoryIcon(),
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
