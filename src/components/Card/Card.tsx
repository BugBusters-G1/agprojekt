import { Joke } from "../../types/Joke";
import "./Card.css"

export function Card({
  category,
  swedish,
  direct_translation,
  meaning,


}: Joke) {

   

  return (
    <div className="card-box">
      <div className="card-content">
        
        <p>{swedish}</p>
        <p>{direct_translation}</p>



      </div>
     

    </div>
  );
}
