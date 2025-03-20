import { Joke } from "../../types/Joke";
import { ButtonComponent } from "../ButtomComponent";
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

      <ButtonComponent onClick={onGenerateNewJoke} />
    </div>
  );
}
