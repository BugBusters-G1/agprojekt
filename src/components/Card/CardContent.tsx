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
  isExpanded,
  showDesktopBorder,
  isDesktop,
  explanation,
}: CardContentProps) {
  return (
    <div
      className={`w-full flex flex-col min-h-100 pt-4 justify-between  overflow-hidden`}
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="lg:text-3xl text-2xl">{joke}</p>
          <p className="lg:text-3xl text-2xl font-semibold ">{punchline}</p>
        </div>
        <p className="lg:text-2xl text-xl">{explanation}</p>
      </div>
    </div>
  );
}
