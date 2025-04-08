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
        backgroundColor: isPressed ? "activeColor" : "white",
        color: textColor,
      }}
<<<<<<< HEAD
      className={`flex items-center justify-center rounded-full px-4 py-2 transition-colors duration-150 shadow-md ${className}`}
=======
      className={`rounded-[100px] text-[20px] font-[400] px-4 py-2 transition-colors duration-150 shadow-md ${className}`}
>>>>>>> ead2cc4 (Change: css layout)
    >
  <span className="flex items-center gap-2">
    <span>{label}</span>
    {icon}
  </span>
    </button>
  );
}
