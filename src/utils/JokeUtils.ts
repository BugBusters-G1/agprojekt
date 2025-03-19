
import { Joke } from "../types/Joke";


export function generateRandomJoke(jokes: Joke[]): Joke {
    
    return jokes[Math.floor(Math.random() * jokes.length)];
}




