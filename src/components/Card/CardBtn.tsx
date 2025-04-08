import { useState } from "react";
import React from "react";

interface CardButtonProps {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  activeColor?: string;
  textColor?: string;
  className?: string;
}

export function CardButton({
  label,
  icon,
  onClick,
  activeColor = "#e2e8f0",
  textColor = "#000",
  className = "",
}: CardButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={onClick}
      style={{
        backgroundColor: isPressed ? activeColor : "transparent",
        color: textColor,
      }}
      className={`flex items-center justify-center rounded-full px-4 py-2 transition-colors duration-150 shadow-md ${className}`}
    >
  <span className="flex items-center gap-2">
    <span>{label}</span>
    {icon}
  </span>
    </button>
  );
}
