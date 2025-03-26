import "./Card.css";
import { Joke } from "../../types/Joke";

interface CardProps {
  joke: Joke;
  expanded: boolean;
}

const categoryStyles: Record<string, { background: string; text: string }> = {
  sarcastic_humor: { background: "#FFCC0B", text: "#000000" },
  wordplay: { background: "#FF6B00", text: "#000000" },
  klassiker: { background: "#235AFD", text: "#FFFFFF" },
  default: { background: "#FFCC0B", text: "#000000" },
};

export function Card({ joke, expanded }: CardProps) {
  const style =
    categoryStyles[joke.categoryInEnglish] || categoryStyles.default;

  return (
    <div className={`card-box`}>
      <div className="card-content">
        <p className="category">{joke.categoryInSwedish}</p>
        <p className="swedish">{joke.jokeInSwedish}</p>
      </div>
      {expanded && (
        <div className="card-content expanded">
          <p className="translation">{joke.jokeInEnglish}</p>
          <p className="meaning">{joke.meaningEnglish}</p>
          <div className="category-container">
            <p className="category">{joke.categoryInEnglish}</p>
          </div>
        </div>
      )}
    </div>
  );
}
