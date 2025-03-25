import "./Card.css";
import { Joke } from "../../types/Joke";

interface CardProps {
  joke: Joke;
  expanded: boolean;
}

const categoryStyles: Record<string, {background: string, text: string}> = {
  sarcastic_humor: {background:"#FFCC0B", text: "#FFFFFF"},  //Gul med vit text
  wordplay: {background:"#FF6B00", text: "#FFFCF7"},        //Orange med svart text
  klassiker: {background:"#235AFD", text: "#000000"},        //Blå med svart text
  default: {background:"#FFCC0B", text: "#FFFFFF"}
}

export function Card({ joke, expanded }: CardProps) {

  const style = categoryStyles[joke.category] || categoryStyles.default

  return (
    <div className={`card-box`} style={{backgroundColor: style.background, color: style.text}}>
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
