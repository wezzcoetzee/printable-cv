import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { TimelineItem } from "./timeline-item";

interface CompanyCardProps {
  company: string;
  link: string;
  badges: readonly string[];
  about?: string;
  positions: readonly {
    title: string;
    technologies: readonly string[];
    start: string;
    end: string;
    description: readonly string[];
  }[];
}

export function CompanyCard({
  company,
  link,
  badges,
  about,
  positions,
}: CompanyCardProps) {
  const showTimeline = positions.length > 1;

  return (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex items-center gap-2 flex-wrap text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
            <a className="hover:underline" href={link}>
              {company}
            </a>
          </h3>
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {badges.map((badge) => (
                <Badge key={badge} variant="secondary" className="text-xs">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {about && (
          <p className="text-xs text-muted-foreground font-mono text-pretty">
            {about}
          </p>
        )}
      </CardHeader>

      <CardContent className="mt-4">
        <div
          className={
            showTimeline
              ? "timeline-container relative ml-4 border-l-2 border-gray-200 pl-8 print:border-gray-400"
              : ""
          }
        >
          {positions.map((position, index) => (
            <TimelineItem
              key={index}
              position={position}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
