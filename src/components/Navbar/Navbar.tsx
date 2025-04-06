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
<<<<<<< HEAD
    showPopup
=======
    togglePopup,
    triggerSwipeAnimation,
>>>>>>> 4ce6771 (Add: trigger swipe animation on Next joke button click)
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
<<<<<<< HEAD
    setCategoriesChanged(!areArraysEqual(tempSelectedCategories, selectedCategories));
=======
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
>>>>>>> 4ce6771 (Add: trigger swipe animation on Next joke button click)
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
<<<<<<< HEAD
      onClick: handleCategoryButtonClick,
      imgSrc: getCategoryIcon(),
=======
      onClick: restorePreviousJoke,
      imgSrc: LeftIcon,
    },

    {
      type: "button",
      onClick: () => {
        if (isCategorySelector) {
          if (categoriesChanged) {
            applyCategoryChanges();
            togglePopup();
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
        ? categoriesChanged
          ? CheckIcon
          : ExitIcon
        : BurgerIcon,
>>>>>>> 4ce6771 (Add: trigger swipe animation on Next joke button click)
    },

    {
      type: "button",
      onClick: () => {
        if (isCardExpanded) toggleCardExpand();
        triggerSwipeAnimation();
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
