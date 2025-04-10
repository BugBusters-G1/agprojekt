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
  textColor = "#000",
}: CardButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#ffffff",
        color: textColor,
      }}
      className={`flex items-center justify-center rounded-full px-3 py-[3px] text-base font-medium transition-colors duration-150 shadow-[0_4px_8px_rgba(0,0,0,0.30)]`}
    >
      <span className="flex items-center gap-2">
        <span>{label}</span>
        {icon}
      </span>
    </button>
  );
}
