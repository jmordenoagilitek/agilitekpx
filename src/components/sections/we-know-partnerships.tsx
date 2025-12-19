import { SectionShell } from "@/components/layout/section-shell";
import { weKnow } from "@/content/onepager";
import { Button } from "@/components/ui/button";

export function WeKnowPartnerships() {
  return (
    <SectionShell className="py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* LEFT: editorial column */}
        <div>
          {/* top hairline */}
          <div className="h-px w-full bg-foreground/10" />

          <div className="pt-10">
            <h2 className="text-balance text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {weKnow.title}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {weKnow.subtitle}
            </p>

            {/* divider under subtitle */}
            <div className="mt-10 h-px w-full bg-foreground/10" />

            {/* numbered list with dividers */}
            <ol className="mt-8">
              {weKnow.points.map((p, idx) => (
                <li
                  key={p}
                  className="
                    group relative overflow-hidden
                    border-b border-foreground/10
                    py-7
                    transition-colors
                    hover:bg-blue-500/10
                  "
                >
                  {/* subtle hover wash to help the glint read */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute inset-0
                      opacity-0
                      transition-opacity duration-300
                      group-hover:opacity-100
                      bg-gradient-to-r from-transparent via-foreground/[0.03] to-transparent
                    "
                  />

                  {/* glint sweep (visible on light backgrounds) */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute inset-y-0 left-0
                      h-full w-[55%]
                      -translate-x-[140%] skew-x-[-12deg]
                      bg-gradient-to-r from-transparent via-foreground/15 to-transparent
                      opacity-0
                      transition-[transform,opacity] duration-700 ease-out
                      group-hover:translate-x-[240%]
                      group-hover:opacity-100
                      motion-reduce:transition-none motion-reduce:transform-none
                    "
                  />

                  <div className="relative flex gap-6">
                    <div
                      className="
                        w-12 shrink-0 text-sm font-semibold
                        text-muted-foreground
                        transition-colors
                        group-hover:text-foreground
                      "
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </div>

                    <p
                      className="
                        text-sm leading-relaxed sm:text-base
                        text-foreground/80
                        transition-colors
                        group-hover:text-foreground
                      "
                    >
                      {p}
                    </p>
                  </div>

                  {/* slightly stronger divider on hover */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute bottom-0 left-0 h-px w-full
                      bg-foreground/10
                      transition-opacity duration-300
                      group-hover:opacity-60
                    "
                  />
                </li>
              ))}
            </ol>

            {/* <div className="pt-10">
              <Button asChild className="rounded-full px-6 py-6">
                <a href={weKnow.cta.href}>{weKnow.cta.label}</a>
              </Button>
            </div> */}
          </div>
        </div>

        {/* RIGHT: big rounded image block placeholder */}
        <div className="lg:pt-6">
          <div
            aria-hidden="true"
            className="
              mx-auto aspect-[1/1] w-full max-w-[560px]
              rounded-[2.25rem]
              bg-[var(--brand-primary)]
            "
          />
        </div>
      </div>
    </SectionShell>
  );
}