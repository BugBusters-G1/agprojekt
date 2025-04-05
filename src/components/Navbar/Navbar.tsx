import { useAppContext } from "../../context/AppContext";
import { useJokesContext } from "../../context/JokeContext";
import { NavItem, NavItemProps } from "./NavItem";
import "./Navbar.css";
import BurgerIcon from "../../assets/BURGER.svg"; // Import as string
import RightIcon from "../../assets/ARROW_RIGHT.svg"; // Import as string
import ExitIcon from "../../assets/EXIT_BIG.svg"; 

export const Navbar = () => {
  const { toggleCardExpand, toggleCategorySelector,  isCategorySelector, isCardExpanded } =
    useAppContext();

  const { removeTopJoke } = useJokesContext();

  const navItems: NavItemProps[] = [

    {
      type: "button",
      onClick: toggleCategorySelector,
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
