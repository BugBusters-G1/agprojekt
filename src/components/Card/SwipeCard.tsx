import { motion, useMotionValue, useTransform } from "framer-motion";
import { useJokesContext } from "../../context/JokeContext";
import { useAppContext } from "../../context/AppContext";
import { Joke } from "../../types/Joke";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useCopyJoke } from "../../hooks/useCopyJoke";
import useLongPress from "../../hooks/useLongPress";

interface SwipeCardProps {
  children: React.ReactNode;
  id: number;
  queue: Joke[];
  joke: Joke;
}

export function SwipeCard({ joke, children, id, queue }: SwipeCardProps) {
  const { removeTopJoke } = useJokesContext();
  const { isCardExpanded } = useAppContext();

  const x = useMotionValue(0);

  const rotate = useTransform(x, [-200, 0, 200], [-15, 0, 15]);

  const isFront = id === queue[queue.length - 1]._id;

  const SWIPE_THRESHOLD = 100;

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (Math.abs(info.offset.x) > SWIPE_THRESHOLD) {
      removeTopJoke();
    }
  };
  const { showPopup } = useAppContext();
  const { copyJokeToClipboard } = useCopyJoke();

  const onLongPress = () => {
    showPopup("Kopierade skämtet!");
    copyJokeToClipboard(joke, isCardExpanded);
  };

  const onClick = () => {};

  const longPressEvent = useLongPress(onLongPress, onClick, {
    shouldPreventDefault: true,
    delay: 900,
  });
  return (
    <motion.div
      drag={!(isCardExpanded || isDesktop)}
      {...longPressEvent}
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
