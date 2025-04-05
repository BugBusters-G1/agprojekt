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
  const { removeTopJoke } = useJokesContext();
  const { toggleCardExpand, isCardExpanded } = useAppContext();

  const x = useMotionValue(0);

  const rotate = useTransform(x, [-200, 0, 200], [-15, 0, 15]);

  const isFront = id === queue[queue.length - 1]._id;

  const SWIPE_THRESHOLD = 100;

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (Math.abs(info.offset.x) > SWIPE_THRESHOLD) {
      removeTopJoke();
    } 
  };

  return (
    <motion.div
      drag={!isCardExpanded ? "x" : false}
      onDragEnd={handleDragEnd}
      dragConstraints={{ left: 0, right: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20, 
      }}
      dragElastic={0.35} 
      animate={{ scale: isFront ? 1.05 : 1 }}
      style={{
        gridColumn: 1,
        gridRow: 1,
        x,
        rotate,
      }}
    >
      {children}
    </motion.div>
  );
}
