import { NavItem, NavItemProps } from "./NavItem";
import "./Navbar.css";
interface NavbarProps {
  filterToggle: () => void;
  isFilterOpen: boolean;
  onGenerateNewJoke: () => void;
  toggleExpand: () => void;
  onCopyJoke: () => void;
}

export const Navbar = ({
  filterToggle,
  onGenerateNewJoke,
  toggleExpand,
  onCopyJoke
}: NavbarProps) => {
  const navItems: NavItemProps[] = [
    {
      type: "button",
      onClick: filterToggle,
      icon: "SlidersHorizontal",
    },
    { type: "button", onClick: toggleExpand, icon: "CircleHelp" },
    {
      type: "button",
      onClick: onCopyJoke,
      icon: "Copy",
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
