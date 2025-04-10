interface CardContentProps {
  joke: string;
  punchline: string;
  isExpanded: boolean | false;
  isDesktop: boolean | false;
  showDesktopBorder: boolean | false;
  explanation: string;
}

export function CardContent({
  joke,
  punchline,
  explanation,
}: CardContentProps) {
  return (
    <div
      className={`w-full flex flex-col min-h-100 p-4 justify-between  overflow-hidden`}
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="lg:text-2xl text-xl">{joke}</p>
          <p className="lg:text-2xl text-xl font-semibold ">{punchline}</p>
        </div>
        <p className="lg:text-xl text-lg">{explanation}</p>
      </div>
    </div>
  );
}
