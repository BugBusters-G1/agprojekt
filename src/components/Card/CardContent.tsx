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
      className={`w-full flex flex-col min-h-100 justify-between p-4 overflow-hidden ${
        !isDesktop && isExpanded ? "pb-2 pt-3" : ""
      }${isDesktop && showDesktopBorder ? "border-r-1 pb-2 pt-3" : ""} `}
    >
      <div className="flex flex-col gap-2">
        <p className="text-[24px]">{joke}</p>
        <p className="text-[24px] sm:text-xl font-semibold">{punchline}</p>
        <p className="text-md">{explanation}</p>
      </div>
    </div>
  );
}
