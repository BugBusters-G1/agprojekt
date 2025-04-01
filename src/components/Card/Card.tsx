import "./Card.css";
import { Joke } from "../../types/Joke";
import { categoryColors } from "../../utils/Colors";


interface CardProps {
  joke: Joke;
  expanded: boolean;
}

export function Card({ joke, expanded }: CardProps) {
  const style =
    categoryColors[joke.category.toLowerCase()] || categoryColors.default;

  return (
    <div
      className="card-box"
      style={{
        backgroundColor: style.background,
        color: style.text,
        maxHeight: !expanded ? "60vh" : "",
      }}
    >
      <div className="card-content">
        <p className="joke">{joke.jokeInSwedish}</p>
        <p className="punchline">{joke.swedishPunchline}</p>
        {expanded && (
          <div className="meaning-content">
            <p className="meaning">{joke.meaningInSwedish}</p>
          </div>
        )}
        <div
          className="card-category-container"
          style={{ bottom: expanded ? "25px" : "2px" }}
        >
          <p className="card-category">
            {joke.categoryInSwedish.toUpperCase()}
          </p>
        </div>
      </div>

      {expanded && (
        <div
          className="card-content expanded"
          style={{ borderTop: `1px solid ${style.lineColor}` }}
        >
          <p className="joke">{joke.jokeInEnglish}</p>
          <p className="punchline">{joke.englishPunchline}</p>
          <div className="meaning-content">
            <p className="meaning">{joke.meaningInEnglish}</p>
          </div>
          <div className="card-category-container">
            <p className="card-category">
              {joke.categoryInEnglish.toUpperCase()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
