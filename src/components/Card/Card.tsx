import { Joke } from "../../types/Joke";
import { ButtonComponent } from "../Button/Button";
import "./Card.css";

interface CardProps {
  joke: Joke;
  onGenerateNewJoke: () => void;
}

export function Card({ joke, onGenerateNewJoke }: CardProps) {
  return (
    <div className="card-box">
      <div className="card-content">
        <p>{joke.swedish}</p>
        <p>{joke.direct_translation}</p>
      </div>
      
      <div className="card-buttons">
      <ButtonComponent onClick={onGenerateNewJoke} />
      </div>
    </div>
  );
}
