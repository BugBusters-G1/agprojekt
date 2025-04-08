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
      className={`w-full flex flex-col min-h-100 pt-2 justify-between  overflow-hidden ${
        !isDesktop && isExpanded && !showDesktopBorder
          ? "pb-2 pt-3 border-t-1"
          : ""
      }${isDesktop && showDesktopBorder ? "border-r-1 pb-2 pt-3" : ""} `}
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="text-[32px]">{joke}</p>
          <p className="text-[32px] font-semibold ">{punchline}</p>
        </div>
        <p className="text-[32px]">{explanation}</p>
      </div>
    </div>
  );
}
