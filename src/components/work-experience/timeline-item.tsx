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
    <div className="timeline-item relative mb-6 last:mb-0 print:mb-4">

      <div className="flex flex-col gap-2">
        <div className="timeline-item-head flex items-baseline justify-between gap-2">
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
