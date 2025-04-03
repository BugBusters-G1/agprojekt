import { useAppContext } from "../../context/AppContext";
import { useJokesContext } from "../../context/JokeContext";
import { NavItem, NavItemProps } from "./NavItem";
import "./Navbar.css";
import BurgerIcon from "../../assets/BURGER.svg";
import LeftIcon from "../../assets/ARROW_LEFT.svg";
import RightIcon from "../../assets/ARROW_RIGHT.svg";
import ExitIcon from "../../assets/EXIT_BIG.svg";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const {
    toggleCardExpand,
    toggleCategorySelector,
    isCategorySelector,
    isCardExpanded,
    togglePopup,
  } = useAppContext();

  const { removeTopJoke, restorePreviousJoke, selectedCategories, jok } =
    useJokesContext();

  const [categoriesChanged, setCategoriesChanged] = useState(false);

  useEffect(() => {
    const isCategoriesModified = selectedCategories?.length > 0;
    setCategoriesChanged(isCategoriesModified);
  }, [selectedCategories]);

  const navItems: NavItemProps[] = [
    {
      type: "button",
      onClick: restorePreviousJoke,
      imgSrc: LeftIcon,
    },

    {
      type: "button",
      onClick: () => {
        toggleCategorySelector();
        if (isCategorySelector && categoriesChanged) {
          togglePopup();
          setCategoriesChanged(false);
          s
        }
      },
      imgSrc: isCategorySelector ? ExitIcon : BurgerIcon,
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
