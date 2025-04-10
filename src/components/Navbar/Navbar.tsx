import { useAppContext } from "../../context/AppContext";
import { useJokesContext } from "../../context/JokeContext";
import { NavItem } from "./NavItem";
import "./Navbar.css";
import BurgerIcon from "../../assets/BURGER.svg";
import RightIcon from "../../assets/ARROW_RIGHT.svg";
import ExitIcon from "../../assets/EXIT_BIG.svg";
import CheckIcon from "../../assets/Checmark.svg";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

type NavbarProps = {
  expanded?: boolean;
};

export const Navbar = ({ expanded }: NavbarProps) => {
  const {
    toggleCardExpand,
    toggleCategorySelector,
    isCategorySelector,
    isCardExpanded,
    triggerSwipeAnimation,
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
  const isDesktop = useMediaQuery({ minWidth: 1024 });

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

    toggleDesktopNavbarExpand();
    toggleCategorySelector();
  };

  const getCategoryIcon = () =>
    isCategorySelector
      ? categoriesChanged
        ? CheckIcon
        : ExitIcon
      : BurgerIcon;

  return (
    <nav>
      {/* Hamburgermeny för desktop när navbar är expanded */}
      {/* Hamburgermeny för både telefon och desktop när navbar är expanded */}
      {(isDesktop && expanded) || !isDesktop ? (
        <NavItem
          type="button"
          onClick={() => {
            handleCategoryButtonClick();
            toggleCategorySelector();
          }}
          imgSrc={
            isDesktop
              ? categoriesChanged
                ? CheckIcon
                : ExitIcon
              : getCategoryIcon()
          }
        />
      ) : null}

      {/* Högerikon ska alltid vara synlig på telefon */}
      {!isDesktop && !isCategorySelector && (
        <NavItem
          type="button"
          onClick={() => {
            if (isCardExpanded) toggleCardExpand();
            triggerSwipeAnimation();
          }}
          imgSrc={RightIcon}
        />
      )}

      {/* Högerikon för desktop när navbar inte är expanded */}
      {isDesktop && !expanded && (
        <NavItem
          type="button"
          onClick={() => {
            if (isCardExpanded) toggleCardExpand();
            triggerSwipeAnimation();
          }}
          imgSrc={RightIcon}
        />
      )}
    </nav>
  );
};
