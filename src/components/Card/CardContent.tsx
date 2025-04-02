interface CardContentProps {
  joke: string;
  punchline: string;
  category: string;
  isExpanded: boolean | false;
  explanation: string;
}

export function CardContent({
  joke,
  punchline,
  category,
  isExpanded,
  explanation,
}: CardContentProps) {
  return (
    <div
      className={`w-full border-t-1 h-100 flex flex-col justify-between gap-2 ${
        isExpanded ? "border-t-1 pb-2 pt-3" : "pb-5 border-none"
      }`}
    >
      <div className="flex flex-col gap-2">
        <p className="text-lg sm:text-xl">{joke}</p>
        <p className="text-lg sm:text-xl font-bold">{punchline}</p>
        <p className="text-md">{explanation}</p>
      </div>
      <Category placeholder={category} />
    </div>
  );
}

const Category = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="rounded-lg  w-auto flex">
      <p className="bg-white text-black p-[2px] text-xs rounded-xl font-bold">
        {placeholder.toUpperCase()}
      </p>
    </div>
  );
};
