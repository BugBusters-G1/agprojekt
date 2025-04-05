import { useState } from "react";

interface CardButtonProps {
  label: string;
  onClick?: () => void;
  activeColor?: string;
  textColor?: string;
  className?: string;
}

export function CardButton({
  label,
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
      className={`rounded-lg px-4 py-2 transition-colors duration-150 shadow-md ${className}`}
    >
      {label}
    </button>
  );
}
