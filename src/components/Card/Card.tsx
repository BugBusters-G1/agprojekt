import { useAppContext } from "../../context/AppContext";
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

  return (
    <div
      onClick={() => {
        toggleCardExpand();
      }}
      className={`rounded-xl h-auto w-70 p-4 ${
        index != 1 ? "shadow-xl" : "shadow-xs"
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
