import { motion } from "framer-motion";
import { useJokesContext } from "../../context/JokeContext";
import { useAppContext } from "../../context/AppContext";

interface SwipeCardProps {
  children: React.ReactNode;
  index: number;
}

export function SwipeCard({ children, index }: SwipeCardProps) {
  const { removeTopJoke } = useJokesContext();
  const { toggleCardExpand, isCardExpanded } = useAppContext();
  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (Math.abs(info.offset.x) > 100) {
      removeTopJoke();
    }
  };

  return (
    <motion.div
      drag
      onDrag={() => {
        if (isCardExpanded) {
          toggleCardExpand();
        }
      }}
      onDragEnd={handleDragEnd}
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      style={{
        gridColumn: 1,
        gridRow: 1,
      }}
    >
      {children}
    </motion.div>
  );
}
