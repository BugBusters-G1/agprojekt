import { useMediaQuery } from "react-responsive";
import { useAppContext } from "../../context/AppContext";
import { Joke } from "../../types/Joke";
import { categoryColors } from "../../utils/Colors";
import { CardButton } from "./CardBtn";
import { CardContent } from "./CardContent";
import ArrowDown from "../../assets/ArrowDown.svg";
import ArrowUp from "../../assets/ArrowUP.svg";

interface CardProps {
  joke: Joke;
  expanded: boolean;
  index: number;
}
export function Card({ joke, expanded, index }: CardProps) {
  const style =
    categoryColors[joke.category.toLowerCase()] || categoryColors.default;
  const { toggleCardExpand } = useAppContext();

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMedium = useMediaQuery({ query: "(min-height: 800px)" });

  return (
    <div
      className={`rounded-[15px] select-none h-auto w-80 flex flex-col gap-2 lg:max-[500px overflow-hidden p-3 pb-5
        ${isDesktop ? "flex flex-row lg:w-200" : "block"}
        ${
          isMedium
            ? "lg:min-h-[600px] lg:max-[600px]"
            : "lg:min-h-[500px] lg:max-[500px]"
        }
        ${index !== 1 ? "shadow-lg" : "shadow-2xl"}

      `}
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
            className="w-[0.5px] h-[70%] bg-black mx-4"
            style={{ backgroundColor: style.lineColor }}
          />
        </div>
      )}
      {!isDesktop && expanded && (
        <div className="flex flex-col justify-center items-center">
          <span
            className="w-[95%] h-[0.5px] bg-black my-4"
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
