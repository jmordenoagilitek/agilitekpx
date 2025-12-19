import { features } from "@/content/onepager";
import { SectionShell } from "@/components/layout/section-shell";
import { Layers, Boxes, UsersRound, TrendingUp, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = [Layers, Boxes, UsersRound, TrendingUp];

// one accent per tile (loops if you add more than 4)
const accents = [
  "group-hover:ring-sky-500/25 group-hover:bg-sky-500/[0.03] group-hover:border-sky-500/25",
  "group-hover:ring-emerald-500/25 group-hover:bg-emerald-500/[0.03] group-hover:border-emerald-500/25",
  "group-hover:ring-violet-500/25 group-hover:bg-violet-500/[0.03] group-hover:border-violet-500/25",
  "group-hover:ring-amber-500/25 group-hover:bg-amber-500/[0.03] group-hover:border-amber-500/25",
];

export function FeatureGrid() {
  return (
    <SectionShell id="benefits" className="py-16 sm:py-20">
      <div className="grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, idx) => {
          const Icon = iconMap[idx] ?? Sparkles;
          const accent = accents[idx % accents.length];

          return (
            <div
              key={f.title}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-transparent p-5 transition-all",
                "hover:-translate-y-0.5 hover:shadow-sm",
                "ring-1 ring-transparent hover:ring-2",
                // optional subtle “glassy” finish
                "backdrop-blur-[1px]",
                accent
              )}
            >
              {/* Glint sweep */}
              <span
                aria-hidden
                className="
                  pointer-events-none absolute inset-0
                  translate-x-[-120%] rotate-12
                  bg-gradient-to-r
                  from-transparent via-white/40 to-transparent
                  opacity-0
                  transition-all duration-700
                  group-hover:translate-x-[120%]
                  group-hover:opacity-100
                "
              />

              {/* thicker divider */}
              <div className="h-[2px] w-full bg-foreground/15" />

              <div className="pt-6">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center">
                  <Icon className="h-6 w-6 text-foreground" aria-hidden="true" />
                </div>

                <h3 className="text-lg font-medium tracking-tight text-foreground">
                  {f.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
