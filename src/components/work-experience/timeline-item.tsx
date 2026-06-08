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
        <div className="flex items-baseline justify-between gap-2">
          <h4 className="font-mono text-sm font-semibold leading-none">
            {position.title}
          </h4>
          <span className="text-sm tabular-nums text-muted-foreground">
            {position.start} - {position.end}
          </span>
        </div>

        <ul className="ml-4 list-disc text-xs text-muted-foreground">
          {position.description.map((item, i) => (
            <li key={i} className="font-mono text-pretty">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
