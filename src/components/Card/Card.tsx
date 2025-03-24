import "./Card.css";
import { Joke } from "../../types/Joke";

interface CardProps {
  joke: Joke;
  expanded: boolean;
}

export function Card({ joke, expanded }: CardProps) {
  return (
    <div className={`card-box`}>
      <div className="card-content">
        <p className="category">{joke.category}</p>
        <p className="swedish">{joke.swedish}</p>

        {expanded && (
          <div className="expanded-content">
            <p className="translation">{joke.direct_translation}</p>
            <p className="meaning">{joke.meaning}</p>
          </div>
        )}
      </div>
    </div>
  );
}
