import { RESUME_DATA } from "@/data/resume-data";

type WorkItem = (typeof RESUME_DATA.work)[number];

export type GroupedWork = {
  company: string;
  link: string;
  badges: readonly string[];
  about?: string;
  positions: Array<{
    title: string;
    technologies: readonly string[];
    start: string;
    end: string;
    description: readonly string[];
  }>;
};

export function groupWorkByCompany(work: readonly WorkItem[]): GroupedWork[] {
  const groupMap = new Map<string, GroupedWork>();

  work.forEach((item) => {
    if (!groupMap.has(item.company)) {
      groupMap.set(item.company, {
        company: item.company,
        link: item.link,
        badges: item.badges,
        about: "about" in item ? item.about : undefined,
        positions: [],
      });
    }

    const group = groupMap.get(item.company)!;
    group.positions.push({
      title: item.title,
      technologies: item.technologies,
      start: item.start,
      end: item.end,
      description: item.description,
    });
  });

  return Array.from(groupMap.values());
}
