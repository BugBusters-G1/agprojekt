import { Joke } from "../types/Joke";

export function CardComponent({
  category,
  jokeInSwedish,
  jokeInEnglish,
  meaning,
}: Joke) {
  return (
    <div>
      <div>
        <p>Test</p>
        <p>{jokeInSwedish}</p>
        <p>{jokeInEnglish}</p>
      </div>
    </div>
  );
}
