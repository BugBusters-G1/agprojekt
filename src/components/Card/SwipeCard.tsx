import { motion, useMotionValue, useTransform } from "framer-motion";
import { useJokesContext } from "../../context/JokeContext";
import { useAppContext } from "../../context/AppContext";
import { Joke } from "../../types/Joke";

interface SwipeCardProps {
  children: React.ReactNode;
  id: number;
  queue: Joke[];
}

export function SwipeCard({ children, id, queue }: SwipeCardProps) {
  const { removeTopJoke, restorePreviousJoke } = useJokesContext();
  const { toggleCardExpand, isCardExpanded } = useAppContext();

  const x = useMotionValue(0);

  const isFront = id === queue[queue.length - 1]._id;

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x > 50) {
      removeTopJoke();
    } else if (info.offset.x < 50) {
      restorePreviousJoke();
    }
  };
  return (
    <motion.div
      drag={!isCardExpanded ? "x" : false}
      onDragEnd={handleDragEnd}
      dragConstraints={{ left: 0, right: 0 }}
      animate={{ scale: isFront ? 1.05 : 1 }}
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
