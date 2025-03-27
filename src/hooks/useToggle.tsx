import { useState } from "react";

export function useToggle(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  const toggle = () => setIsOpen((prev) => !prev);

  return { isOpen, toggle, setIsOpen };
}
