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
        backgroundColor: isPressed ? activeColor : "#ffffff",
        color: textColor,
      }}
      className={`flex items-center justify-center rounded-full px-3 py-[3px] text-base font-[450] transition-colors duration-150 shadow-[0_4px_8px_rgba(0,0,0,0.30)] cursor-pointer ${className}`}
    >
  <span className="flex items-center gap-2">
    <span>{label}</span>
    {icon}
  </span>
    </button>
  );
}
