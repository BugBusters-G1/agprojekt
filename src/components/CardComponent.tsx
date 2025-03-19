import { Joke } from "../types/Joke"

export function CardComponent ({category, jokeInSwedish, jokeInEnglish, meaning}: Joke){

    return (
        <div>
            <div>
                <p>{jokeInSwedish}</p>
                <p>{jokeInEnglish}</p>
            </div>
        </div>
    )

}