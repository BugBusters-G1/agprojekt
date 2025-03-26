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
    <div className={`card-box`} style={{backgroundColor: style.background, color: style.text}}>
      <div className="card-content">
        <p className="category">{joke.categoryInSwedish}</p>
        <p className="swedish">{joke.jokeInSwedish}</p>

      </div>
      {expanded && (
        <div className="card-content expanded" style={{borderTop: `1px solid ${style.lineColor}`}}>
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
