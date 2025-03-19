import { Joke } from "../types/Joke";

export function CardComponent({
  category,
  swedish,
  direct_translation,
  meaning,
}: Joke) {

   

  return (
    <div>
      <div>
        <p>Test</p>
        <p>{swedish}</p>
        <p>{direct_translation}</p>
      </div>
    </div>
  );
}
