import "./Card.css";
import { Joke } from "../../types/Joke";

interface CardProps {
  joke: Joke;
  expanded: boolean;
}

export function Card({ joke, expanded }: CardProps) {
  return (
    <div className={`card-box ${expanded ? "expanded" : ""}`}>

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
