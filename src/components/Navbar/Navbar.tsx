import { NavItem, NavItemProps } from "./NavItem";

interface NavbarProps {
  filterToggle: () => void;
  isFilterOpen: boolean;
  onGenerateNewJoke: () => void;
  toggleExpand: () => void;
}

export const Navbar = ({
  filterToggle,
  isFilterOpen,
  onGenerateNewJoke,
  toggleExpand,
}: NavbarProps) => {
  const navItems: NavItemProps[] = [
    { label: "Home", type: "link", to: "/" },
    { label: "Expand Card", type: "button", onClick: toggleExpand },
    {
      label: isFilterOpen ? "Close Filter" : "Open Filter",
      type: "button",
      onClick: filterToggle,
    },
    { label: "New Joke", type: "button", onClick: onGenerateNewJoke },
  ];

  return (
    <nav>
      {navItems.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </nav>
  );
};
