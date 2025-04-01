import { Joke } from "../../types/Joke";

interface CardContentProps {
  joke: string;
  punchline: string;
}

export function CardContent({ joke, punchline }: CardContentProps) {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-2">
      <p className="text-lg sm:text-xl">{joke}</p>
      <p className="text-lg sm:text-xl font-bold">{punchline}</p>
    </div>
  );
}
