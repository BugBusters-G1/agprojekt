import React from "react";
import { useJokes } from "./hooks/useJokes";

const JokesList = () => {
  const { jokes, loading } = useJokes();

  if (loading) {
    return <div>Loading...</div>; // Show loading message or spinner while waiting for data
  }

  return (
    <div>
      <h1>Jokes List</h1>
      {jokes.map((joke, index) => (
        <div key={index}>
          <h3>{joke.category}</h3>
          <p>{joke.jokeInSwedish}</p>
          <p>{joke.jokeInEnglish}</p>
          <p>{joke.meaning}</p>
        </div>
      ))}
    </div>
  );
};

export default JokesList;
