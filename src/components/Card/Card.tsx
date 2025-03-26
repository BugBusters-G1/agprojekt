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
  const style = categoryStyles[joke.category] || categoryStyles.default;

  return (
    <div
      className={`card-box ${expanded ? "expanded" : ""}`}
      style={{ backgroundColor: style.background, color: style.text }}
    >
      <div className="card-content">
        <p className="swedish">{joke.swedish}</p>
      </div>
      {expanded && (
        <div className="card-content expanded">
          <p className="translation">{joke.direct_translation}</p>
          <p className="meaning">{joke.meaning}</p>
          <div className="category-container">
            <p className="category">{joke.category}</p>
          </div>
        </div>
      )}
    </div>
  );
}
