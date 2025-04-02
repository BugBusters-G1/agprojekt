import { motion, useMotionValue } from "framer-motion";
import { useJokesContext } from "../../context/JokeContext";
import { useAppContext } from "../../context/AppContext";

interface SwipeCardProps {
  children: React.ReactNode;
  index: number;
}

export function SwipeCard({ children, index }: SwipeCardProps) {
  const { removeTopJoke } = useJokesContext();
  const { toggleCardExpand, isCardExpanded } = useAppContext();

  const x = useMotionValue(0);
  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (Math.abs(x.get()) > 50) {
      removeTopJoke();
    }
  };
  return (
    <motion.div
      drag={!isCardExpanded ? "x" : false}
      onDragEnd={handleDragEnd}
      dragConstraints={{ left: 0, right: 0 }}
      style={{
        gridColumn: 1,
        gridRow: 1,
        x,
      }}
    >
      {children}
    </motion.div>
  );
}
