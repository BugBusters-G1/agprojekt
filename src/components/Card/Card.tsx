import { useMediaQuery } from "react-responsive";
import { useAppContext } from "../../context/AppContext";
import { useCopyJoke } from "../../hooks/useCopyJoke";
import { Joke } from "../../types/Joke";
import { categoryColors } from "../../utils/Colors";
import { CardButton } from "./CardBtn";
import { CardContent } from "./CardContent";
import ArrowDown from "../../assets/Pil_ner.svg";
import ArrowUp from "../../assets/Pil_upp.svg";
import { useRef, useState } from "react";

interface CardProps {
  joke: Joke;
  expanded: boolean;
  index: number;
}

export function Card({ joke, expanded, index }: CardProps) {
  const style =
    categoryColors[joke.category.toLowerCase()] || categoryColors.default;
  const { toggleCardExpand } = useAppContext();
  const { copyJokeToClipboard } = useCopyJoke();

  const timerRef = useRef<number | null>(null);
  const [longPressTriggered, setLongPressTriggered] = useState(false);

  const handlePressStart = (e: React.TouchEvent | React.MouseEvent) => {
    if ("button" in e) {
      return;
    }

    setLongPressTriggered(false);
    timerRef.current = window.setTimeout(() => {
      copyJokeToClipboard(joke, expanded);
      setLongPressTriggered(true);
    }, 900);
  };

  const handlePressEnd = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const handleClick = () => {
    if (!longPressTriggered) {
      toggleCardExpand();
    }
  };

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return (
    <div
      onMouseDown={(e) => handlePressStart(e)}
      onMouseUp={handlePressEnd}
      onMouseLeave={handlePressEnd}
      onTouchStart={(e) => handlePressStart(e)}
      onTouchEnd={handlePressEnd}
      onClick={() => {
        handleClick();
      }}
      className={`rounded-xl select-none h-auto w-80 lg:w-150 py-4 ${
        isDesktop ? "flex flex-row " : "block"
      }${index != 1 ? "shadow-lg" : "shadow-2xl"}`}
      style={{
        backgroundColor: style.background,
        color: style.text,
      }}
    >
      <CardContent
        joke={joke.jokeInSwedish}
        punchline={joke.swedishPunchline}
        explanation={isDesktop || expanded ? joke.meaningInSwedish : ""}
        showDesktopBorder={true}
        isExpanded={false}
        isDesktop={isDesktop}
      />

      {isDesktop || expanded ? (
        <CardContent
          joke={joke.jokeInEnglish}
          punchline={joke.englishPunchline}
          explanation={joke.meaningInEnglish}
          isExpanded={expanded}
          showDesktopBorder={false}
          isDesktop={isDesktop}
        />
      ) : null}

      <div className="flex flex-col justify-center items-center">
        <CardButton
          onClick={toggleCardExpand}
          activeColor={style.backgroundActive}
          label={expanded ? "Got it!" : "Don't get it?"}
          icon={
            expanded ? (
              <img src={ArrowUp} alt="Arrow up" className="w-4 h-4" />
            ) : (
              <img src={ArrowDown} alt="Arrow down" className="w-4 h-4" />
            )
          }
        />
      </div>
    </div>
  );
}
