import { useAppContext } from "../../context/AppContext";
import { Joke } from "../../types/Joke";
import { categoryColors } from "../../utils/Colors";
import { CardButton } from "./CardBtn";
import { CardContent } from "./CardContent";
import ArrowDown from "../../assets/Pil_ner.svg";
import ArrowUp from "../../assets/Pil_upp.svg";

interface CardProps {
  joke: Joke;
  expanded: boolean;
  index: number;
}

export function Card({ joke, expanded, index }: CardProps) {
  const style =
    categoryColors[joke.category.toLowerCase()] || categoryColors.default;
  const { toggleCardExpand } = useAppContext();

  return (
    <div
      className={`rounded-xl select-none h-auto w-80 p-4 z- ${
        index !== 1 ? "shadow-xl" : "shadow-2xl"
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

      <div className="flex flex-col justify-center items-center mb-4">
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
