import { useAppContext } from "../../context/AppContext";
import { useJokesContext } from "../../context/JokeContext";
import { NavItem, NavItemProps } from "./NavItem";
import "./Navbar.css";
import BurgerIcon from "../../assets/BURGER.svg"; // Import as string
import LeftIcon from "../../assets/ARROW_LEFT.svg"; // Import as string
import RightIcon from "../../assets/ARROW_RIGHT.svg"; // Import as string

export const Navbar = () => {
  const { toggleCardExpand, toggleCategorySelector, isCardExpanded } =
    useAppContext();

  const { removeTopJoke } = useJokesContext();

  const navItems: NavItemProps[] = [
    {
      type: "button",
      onClick: toggleCategorySelector,
      imgSrc: LeftIcon,
    },

    {
      type: "button",
      onClick: toggleCategorySelector,
      imgSrc: BurgerIcon,
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
