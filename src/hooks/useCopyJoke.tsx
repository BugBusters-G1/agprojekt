import { useState } from "react";
import { Joke } from "../types/Joke";

export function useCopyJoke () {

    const [copied, setCopied] = useState<boolean>(false)

    const getJokeText = (joke: Joke, expanded: boolean): string => {
        let text = joke.swedish;        //Samtliga joke.X måste ändras när vi byter kategorinamn i databasen
    
        if(expanded) {
          text += `\n\n${joke.direct_translation}\n${joke.meaning}\nKategori: ${joke.category}`
        }
        return text;
    
    }
    
    const copyJokeToClipboard = (joke: Joke, expanded: boolean) => {
        if (!joke) return;
        const text = getJokeText(joke, expanded)
       
        navigator.clipboard
        .writeText(text)
        .then(() => {
            setCopied(true) //Kan ändra detta om vi skapar en global popup
            setTimeout(() => setCopied(false), 2000)
            console.log("Skämtet har kopierats")
        })
        .catch((error) => {
          console.log("Skämtet kunde inte kopoieras", error)
        })
    }
    return {copyJokeToClipboard, copied}
}

