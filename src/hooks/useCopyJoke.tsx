import { Joke } from "../types/Joke";
import { useAppContext } from "../context/AppContext";

export function useCopyJoke() {
  const {showPopup} = useAppContext();

  const getJokeText = (joke: Joke, expanded: boolean): string => {
    let text = `${joke.jokeInSwedish}\n${joke.swedishPunchline}`;

    if (expanded) {
      text += `\n\n${joke.meaningInSwedish}\n\n${joke.jokeInEnglish}\n${joke.englishPunchline}\n\n${joke.meaningInEnglish}`;
    }

    return text;
  };

  const copyJokeToClipboard = (joke: Joke, expanded: boolean) => {
    if (!joke) return;
    const text = getJokeText(joke, expanded);

    navigator.clipboard
      .writeText(text)
      .then(() => {
        showPopup("Skämtet har kopierats!")
        console.log("Skämtet har kopierats!");
      })
      .catch((error) => {
        console.log("Skämtet kunde inte kopieras", error);
      });
  };

  return { copyJokeToClipboard };
}
