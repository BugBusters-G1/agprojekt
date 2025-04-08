import { motion, useMotionValue, useTransform } from "framer-motion";
import { useJokesContext } from "../../context/JokeContext";
import { useAppContext } from "../../context/AppContext";
import { Joke } from "../../types/Joke";
<<<<<<< Updated upstream
=======
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
>>>>>>> Stashed changes

interface SwipeCardProps {
  children: React.ReactNode;
  id: number;
  queue: Joke[];
}

export function SwipeCard({ children, id, queue }: SwipeCardProps) {
  const { removeTopJoke, restorePreviousJoke } = useJokesContext();
  const { isCardExpanded } = useAppContext();

  const x = useMotionValue(0);

  const rotate = useTransform(x, [-200, 0, 200], [-15, 0, 15]);

  const isFront = id === queue[queue.length - 1]._id;

  const SWIPE_THRESHOLD = 100;

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x > SWIPE_THRESHOLD) {
      removeTopJoke();
    } else if (info.offset.x < -SWIPE_THRESHOLD) {
      restorePreviousJoke();
    }
  };

  return (
    <motion.div
      drag={!(isCardExpanded || isDesktop)}
      onDragEnd={handleDragEnd}
      dragConstraints={{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
      dragElastic={{ left: 0.6, right: 0.6, bottom: 0.2, top: 0.2 }}
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
