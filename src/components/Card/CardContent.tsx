interface CardContentProps {
  joke: string;
  punchline: string;
}

export function CardContent({ joke, punchline }: CardContentProps) {
  return (
    <div className="h-full">
      <p>{joke}</p>
      <p className="font-bold">{punchline}</p>
    </div>
  );
}
