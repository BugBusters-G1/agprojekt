import { useRef, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { useCopyJoke } from "../../hooks/useCopyJoke";
import { Joke } from "../../types/Joke";
import { categoryColors } from "../../utils/Colors";
import { CardButton } from "./CardBtn";
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
  const {copyJokeToClipboard} = useCopyJoke();

  const timerRef = useRef<number| null>(null);
  const [longPressTriggered, setLongPressTriggered] = useState(false)

  const handlePressStart = (e: React.TouchEvent | React.MouseEvent) => {

    if ("button" in e) { return }

    setLongPressTriggered(false)
    timerRef.current = window.setTimeout(() => {
      copyJokeToClipboard(joke, expanded)
      setLongPressTriggered(true)
    }, 900)
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

  const color = "#235AFD";
  return (
    <div
      onMouseDown={(e) => handlePressStart(e)}
      onMouseUp={handlePressEnd}
      onMouseLeave={handlePressEnd}
      onTouchStart={(e) => handlePressStart(e)}
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
        explanation={expanded ? joke.meaningInSwedish : ""}
        isExpanded={false}
      />

      {expanded && (
        <CardContent
          joke={joke.jokeInEnglish}
          punchline={joke.englishPunchline}
          explanation={joke.meaningInEnglish}
          isExpanded={expanded}
        />
      )}

      <div className="flex flex-col justify-center items-center">
        <CardButton
          onClick={toggleCardExpand}
          activeColor={style.backgroundActive}
          label={expanded ? "Minimze" : "Don't get it?"}
        />
      </div>
    </div>
  );
}
