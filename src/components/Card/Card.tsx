import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { useCopyJoke } from "../../hooks/useCopyJoke";
import { Joke } from "../../types/Joke";
import { categoryColors } from "../../utils/Colors";
import { CardContent } from "./CardContent";
import useLongPress from "../../hooks/useLongPress"; // Import the useLongPress hook

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
      // Spread the long press event handlers here
      className={`rounded-xl h-auto select-none w-80 p-4 z- ${
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

      <div className="flex flex-col justify-center items-center">
        <button
          className="p-4 shadow-xl"
          onClick={toggleCardExpand}
          onTouchStart={(e) => e.stopPropagation()} // Stop the touch event from propagating
        >
          {expanded ? "Minimize" : "Don't get it?"}
        </button>
      </div>
    </div>
  );
}
