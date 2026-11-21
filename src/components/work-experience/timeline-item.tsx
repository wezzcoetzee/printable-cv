interface TimelineItemProps {
  position: {
    title: string;
    start: string;
    end: string;
    description: readonly string[];
  };
}

export function TimelineItem({ position }: TimelineItemProps) {
  return (
    // On phones there is no timeline rail, so a hairline separates roles and
    // the date reads first, like a dated entry.
    <div className="timeline-item relative mb-6 border-t pt-5 first:border-t-0 first:pt-0 last:mb-0 sm:border-t-0 sm:pt-0 print:mb-4 print:border-t-0 print:pt-0">
      <div className="flex flex-col gap-2">
        <div className="timeline-item-head flex flex-col-reverse items-start gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2 print:flex-row print:items-baseline print:justify-between print:gap-2">
          <h4 className="font-sans text-[0.9375rem] font-semibold leading-none text-foreground">
            {position.title}
          </h4>
          <span className="whitespace-nowrap font-mono text-xs tabular-nums text-muted-foreground">
            {position.start} - {position.end}
          </span>
        </div>

        <ul className="ml-4 list-disc font-serif text-[0.9375rem] leading-normal text-prose print:text-[9.5pt] print:leading-snug">
          {position.description.map((item, i) => (
            <li key={i} className="text-pretty">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
