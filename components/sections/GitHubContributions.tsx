import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";

type ContributionDay = {
  date: string;
  level: number;
  count: number;
  label: string;
};

type ContributionWeek = ContributionDay[];

type Contributions = {
  total: number;
  weeks: ContributionWeek[];
};

const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const visibleDayLabels = new Set(["Mon", "Wed", "Fri"]);
const monthFormatter = new Intl.DateTimeFormat("en", { month: "short", timeZone: "UTC" });

const levelClasses = [
  "bg-zinc-100 dark:bg-zinc-800/80",
  "bg-emerald-200 dark:bg-emerald-950",
  "bg-emerald-300 dark:bg-emerald-800",
  "bg-emerald-400 dark:bg-emerald-600",
  "bg-emerald-500 dark:bg-emerald-400",
];

async function getContributions(username: string): Promise<Contributions | null> {
  try {
    const response = await fetch(`https://github.com/users/${username}/contributions`, {
      cache: "no-store",
      headers: {
        Accept: "text/html",
        "User-Agent": "personal-portfolio",
      },
    });

    if (!response.ok) return null;

    const html = await response.text();
    return parseContributions(html);
  } catch {
    return null;
  }
}

function parseContributions(html: string): Contributions | null {
  const totalMatch = html.match(/<h2[^>]*>\s*([\d,]+)\s+contributions/i);
  const total = Number(totalMatch?.[1]?.replace(/,/g, "") ?? 0);
  const daysByWeek = new Map<number, ContributionDay[]>();
  const cellPattern =
    /<td\b(?=[^>]*ContributionCalendar-day)([^>]*)><\/td>\s*<tool-tip\b[^>]*>([\s\S]*?)<\/tool-tip>/g;

  for (const match of html.matchAll(cellPattern)) {
    const attrs = match[1];
    const tooltip = stripTags(match[2]).trim();
    const weekIndex = Number(readAttr(attrs, "data-ix"));
    const date = readAttr(attrs, "data-date");
    const level = Number(readAttr(attrs, "data-level") ?? 0);

    if (!date || Number.isNaN(weekIndex)) continue;

    const day: ContributionDay = {
      date,
      level: Number.isNaN(level) ? 0 : Math.min(Math.max(level, 0), 4),
      count: parseContributionCount(tooltip),
      label: tooltip || `${date}: ${level} contribution level`,
    };

    const week = daysByWeek.get(weekIndex) ?? [];
    week.push(day);
    daysByWeek.set(weekIndex, week);
  }

  const weeks = [...daysByWeek.entries()]
    .sort(([a], [b]) => a - b)
    .map(([, week]) => week.sort((a, b) => getUtcDay(a.date) - getUtcDay(b.date)));

  return weeks.length > 0 ? { total, weeks } : null;
}

function readAttr(source: string, name: string) {
  return source.match(new RegExp(`${name}="([^"]*)"`))?.[1];
}

function stripTags(source: string) {
  return source.replace(/<[^>]+>/g, "");
}

function parseContributionCount(label: string) {
  if (label.startsWith("No contributions")) return 0;
  return Number(label.match(/^([\d,]+)\s+contribution/)?.[1]?.replace(/,/g, "") ?? 0);
}

function getUtcDay(date: string) {
  return new Date(`${date}T00:00:00Z`).getUTCDay();
}

function getMonthLabel(week: ContributionWeek, previousWeek?: ContributionWeek) {
  const firstDay = week[0];
  if (!firstDay) return "";

  const month = new Date(`${firstDay.date}T00:00:00Z`).getUTCMonth();
  const previousMonth = previousWeek?.[0]
    ? new Date(`${previousWeek[0].date}T00:00:00Z`).getUTCMonth()
    : undefined;

  return month !== previousMonth ? monthFormatter.format(new Date(`${firstDay.date}T00:00:00Z`)) : "";
}

export default async function GitHubContributions() {
  const username = profile.contact.githubUsername;
  const contributions = await getContributions(username);

  return (
    <Section id="github">
      <SectionTitle eyebrow="GitHub">Contributions</SectionTitle>

      <div className="rounded-2xl border border-zinc-200/80 bg-white/90 p-5 shadow-sm shadow-zinc-950/[0.04] backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50 dark:shadow-none sm:p-6">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              {contributions ? contributions.total.toLocaleString("en-US") : "--"} contributions
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">in the last year</p>
          </div>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-cyan-700 transition-colors hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300"
          >
            @{username}
          </a>
        </div>

        {contributions ? (
          <div className="overflow-x-auto pb-1">
            <table className="border-separate border-spacing-1" aria-label={`${username} GitHub contributions`}>
              <thead>
                <tr>
                  <td className="w-8" />
                  {contributions.weeks.map((week, index) => (
                    <td key={week[0]?.date ?? index} className="h-5 min-w-3 text-left align-bottom">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        {getMonthLabel(week, contributions.weeks[index - 1])}
                      </span>
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dayLabels.map((dayLabel, dayIndex) => (
                  <tr key={dayLabel}>
                    <td className="h-3 pr-2 text-right align-middle">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        {visibleDayLabels.has(dayLabel) ? dayLabel : ""}
                      </span>
                    </td>
                    {contributions.weeks.map((week, weekIndex) => {
                      const day = week.find((item) => getUtcDay(item.date) === dayIndex);

                      return (
                        <td key={`${day?.date ?? `${weekIndex}-${dayIndex}`}`} className="h-3 w-3">
                          {day ? (
                            <span
                              className={`block h-3 w-3 rounded-[3px] ${levelClasses[day.level]}`}
                              title={day.label}
                              aria-label={day.label}
                            />
                          ) : (
                            <span className="block h-3 w-3" aria-hidden />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4 flex items-center justify-end gap-1 text-xs text-zinc-500 dark:text-zinc-400">
              <span>Less</span>
              {levelClasses.map((className, level) => (
                <span
                  key={level}
                  className={`h-3 w-3 rounded-[3px] ${className}`}
                  aria-label={`Contribution level ${level}`}
                />
              ))}
              <span>More</span>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/80 p-5 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-400">
            GitHub contributions are currently unavailable.
          </div>
        )}
      </div>
    </Section>
  );
}
