import * as LucideIcons from "lucide-react";
import { FC } from "react";
import { LucideProps } from "lucide-react";

export const useIcon = (iconName: string): FC<LucideProps> | null => {
  const Icon = LucideIcons[iconName as keyof typeof LucideIcons];

  return Icon ? (Icon as FC<LucideProps>) : null;
};
