import { useRef, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { useCopyJoke } from "../../hooks/useCopyJoke";
import { Joke } from "../../types/Joke";
import { categoryColors } from "../../utils/Colors";
import { CardContent } from "./CardContent";

interface CardProps {
  joke: Joke;
  expanded: boolean;
  index: number;
}

export function Card({ joke, expanded, index }: CardProps) {
  const style =
    categoryColors[joke.category.toLowerCase()] || categoryColors.default;
  const { toggleCardExpand } = useAppContext();
  const {copyJokeToClipboard, copied} = useCopyJoke();

  const timerRef = useRef<number| null>(null);
  const [longPressTriggered, setLongPressTriggered] = useState(false)

  const handlePressStart = () => {
    setLongPressTriggered(false)
    timerRef.current = setTimeout(() => {
      copyJokeToClipboard(joke, expanded)
      setLongPressTriggered(true)
    }, 600)
  }

  const handlePressEnd = () => {
    if(timerRef.current) {
      clearTimeout(timerRef.current)
    }
  }

  const handleClick = () => {
    if (!longPressTriggered) {
      toggleCardExpand();
    }
  }

  return (
    <div
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onMouseLeave={handlePressEnd}
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
      onClick={() => {
        handleClick()
      }}
      className={`rounded-xl select-none h-auto w-80 p-4 z- ${
        index != 1 ? "shadow-xl" : "shadow-2xl"
      }`}
      style={{
        backgroundColor: style.background,
        color: style.text,
      }}
    >
      <CardContent
        joke={joke.jokeInSwedish}
        punchline={joke.swedishPunchline}
        category={joke.categoryInSwedish}
        explanation={expanded ? joke.meaningInSwedish : ""}
        isExpanded={false}
      />

      {expanded && (
        <CardContent
          joke={joke.jokeInEnglish}
          punchline={joke.englishPunchline}
          category={joke.categoryInEnglish}
          explanation={joke.meaningInEnglish}
          isExpanded={expanded}
        />
      )}
    </div>
  );
}
