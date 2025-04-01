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

  return (
    <div
      className="rounded-lg min-h-[200px] max-h-fit w-full max-w-sm text-2xl flex flex-col"
      style={{
        backgroundColor: style.background,
        color: style.text,
      }}
    >
      <div className="flex flex-col flex-grow p-4">
        <CardContent
          joke={joke.jokeInSwedish}
          punchline={joke.swedishPunchline}
        />
      </div>

      {/* Category stays at the bottom */}
      <div className="p-2 flex justify-center">
        <Category placeholder={joke.categoryInSwedish} />
      </div>

      {expanded && index === 0 && (
        <CardContent
          joke={joke.jokeInEnglish}
          punchline={joke.englishPunchline}
        />
      )}
    </div>
  );
}

const Category = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="">
      <p className="text-base">{placeholder.toUpperCase()}</p>
    </div>
  );
};
