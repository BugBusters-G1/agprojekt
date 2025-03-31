import { useJokesContext } from "../../context/JokeContext";
import { NavItem, NavItemProps } from "./NavItem";
import "./Navbar.css";
interface NavbarProps {
  filterToggle: () => void;
  isFilterOpen: boolean;
  toggleExpand: () => void;
}

export const Navbar = ({ filterToggle, toggleExpand }: NavbarProps) => {
  const { handleNewJoke, copyJokeToClipboard, currentJoke } = useJokesContext();

  const navItems: NavItemProps[] = [
    {
      type: "button",
      onClick: filterToggle,
      icon: "SlidersHorizontal",
    },
    { type: "button", onClick: toggleExpand, icon: "CircleHelp" },
    {
      type: "button",
      onClick: () => {
        if (currentJoke) {
          copyJokeToClipboard(currentJoke, false); //change the second param to actual is card expanded boolean
        }
      },
      icon: "Copy",
    },
    {
      type: "button",
      onClick: handleNewJoke,
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
