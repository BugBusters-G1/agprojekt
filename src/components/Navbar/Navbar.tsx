import { useAppContext } from "../../context/AppContext";
import { useJokesContext } from "../../context/JokeContext";
import { NavItem, NavItemProps } from "./NavItem";
import "./Navbar.css";

export const Navbar = () => {
  const { toggleCardExpand, toggleCategorySelector, isCardExpanded } =
    useAppContext();

  const { removeTopJoke } = useJokesContext();

  const navItems: NavItemProps[] = [
    {
      type: "button",
      onClick: toggleCategorySelector,
      icon: "SlidersHorizontal",
    },
    { type: "button", onClick: toggleCardExpand, icon: "CircleHelp" },
    {
      type: "button",
      onClick: () => {
        // if (currentJoke) {
        //   copyJokeToClipboard(currentJoke, isCardExpanded);
        // }
      },
      icon: "Copy",
    },
    {
      type: "button",
      onClick: removeTopJoke,
      icon: "CircleArrowRight",
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
