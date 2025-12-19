import { SectionShell } from "@/components/layout/section-shell";
import { problem } from "@/content/onepager";

function ItalicWord({
  text,
  word = "years",
}: {
  text: string;
  word?: string;
}) {
  const idx = text.toLowerCase().indexOf(word.toLowerCase());
  if (idx === -1) return <>{text}</>;

  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + word.length);
  const after = text.slice(idx + word.length);

  return (
    <>
      {before}
      <span className="italic">{match}</span>
      {after}
    </>
  );
}

export function ProblemStatement() {
  return (
    <SectionShell className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Big headline */}
        <h2 className="text-balance text-[3.25rem] leading-[1.05] tracking-tight sm:text-7xl">
          <ItalicWord text={problem.title} word="years" />
        </h2>

        {/* Body copy */}
        <div className="mt-12 max-w-2xl space-y-2 text-muted-foreground">
          {problem.lines.map((l) => (
            <p key={l} className="text-base leading-relaxed sm:text-lg">
              {l}
            </p>
          ))}

          {problem.supporting && (
            <p className="pt-6 text-base leading-relaxed sm:text-lg">
              {problem.supporting}
            </p>
          )}

          <p className="pt-4 text-lg font-semibold text-foreground sm:text-xl">
            {problem.punch}
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
