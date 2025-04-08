import { useCopyToClipboard } from "@uidotdev/usehooks";
import { Joke } from "../../types/Joke";
import { categoryColors } from "../../utils/Colors";
import { CardContent } from "./CardContent";
import { useAppContext } from "../../context/AppContext";
import { useLongPress } from "@uidotdev/usehooks";

interface CardProps {
  joke: Joke;
  expanded: boolean;
  index: number;
}

export function Card({ joke, expanded, index }: CardProps) {
  const style =
    categoryColors[joke.category.toLowerCase()] || categoryColors.default;
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const { showPopup } = useAppContext();

  // Define the onStart and onFinish behavior for the long press
  const onLongPressStart = () => {
    // Copy joke text to clipboard when long press starts
    copyToClipboard(joke.jokeInSwedish || "ooga booga");
    console.log(
      "Copied to clipboard:",
      joke.jokeInSwedish || "ooga booga",
      copiedText
    );
  };

  const onLongPressFinish = () => {
    // Show popup when the long press finishes
    showPopup("Kopierade skämtet!");
  };

  // Use the long press hook
  const longPressEvent = useLongPress(onLongPressStart, {
    onStart: onLongPressStart, // Triggered when long press starts
    onFinish: onLongPressFinish, // Triggered when long press finishes
    threshold: 500, // Duration threshold for the long press
  });

  return (
    <div
      {...longPressEvent}
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
          onClick={async () => {
            alert("hello");
            copyToClipboard("testing esfsefsfs");
          }}
          onTouchStart={(e) => e.stopPropagation()}
        >
          {expanded ? "Minimize" : "Don't get it?"}
        </button>
      </div>
    </div>
  );
}
