import { NavItem, NavItemProps } from "./NavItem";
import "./Navbar.css";
interface NavbarProps {
  filterToggle: () => void;
  isFilterOpen: boolean;
  onGenerateNewJoke: () => void;
  toggleExpand: () => void;
}

export const Navbar = ({
  filterToggle,
  onGenerateNewJoke,
  toggleExpand,
}: NavbarProps) => {
  const navItems: NavItemProps[] = [
    { type: "link", to: "/" },
    { type: "button", onClick: toggleExpand, icon: "CircleHelp" },
    {
      type: "button",
      onClick: filterToggle,
      icon: "SlidersHorizontal",
    },
    {
      type: "button",
      onClick: onGenerateNewJoke,
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
