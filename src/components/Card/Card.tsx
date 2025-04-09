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
      className={`rounded-[20px] select-none h-auto lg:min-h-150 lg:max-h-150 w-80 flex flex-col gap-10 lg:w-200 p-3 ${
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

      {isDesktop && (
        <div className="flex items-center justify-center">
          <span
            className="w-[1px] h-[70%] bg-black mx-4"
            style={{ backgroundColor: style.lineColor }}
          />
        </div>
      )}
      {!isDesktop && expanded && (
        <div className="flex flex-col justify-center items-center">
          <span
            className="w-[90%] h-[1px] bg-black my-4"
            style={{ backgroundColor: style.lineColor }}
          />
        </div>
      )}
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

      {!isDesktop && (
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
      )}
    </div>
  );
}
