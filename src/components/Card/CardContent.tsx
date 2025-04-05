interface CardContentProps {
  joke: string;
  punchline: string;
  isExpanded: boolean | false;
  explanation: string;
}

export function CardContent({
  joke,
  punchline,
  isExpanded,
  explanation,
}: CardContentProps) {
  return (
    <div
      className={`w-full border-t-1 flex flex-col min-h-100 justify-between gap-2 ${
        isExpanded ? "border-t-1 pb-2 pt-3" : "pb-5 border-none"
      }`}
    >
      <div className="flex flex-col gap-2">
        <p className="text-[24px]">{joke}</p>
        <p className="text-[24px] sm:text-xl font-semibold">{punchline}</p>
        <p className="text-md">{explanation}</p>
      </div>
    </div>
  );
}
