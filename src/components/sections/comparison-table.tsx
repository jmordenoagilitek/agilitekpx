import { SectionShell } from "@/components/layout/section-shell";
import { comparison } from "@/content/onepager";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

function CellIcon({ type }: { type: "check" | "x" }) {
  const Icon = type === "check" ? Check : X;

  return (
    <span
      className={cn(
        "inline-flex h-6 w-6 items-center justify-center",
        type === "check"
          ? "text-foreground"
          : "text-muted-foreground"
      )}
      aria-hidden="true"
    >
      <Icon className="h-4 w-4" />
    </span>
  );
}

export function ComparisonTable() {
  const rows = Array.from(
    { length: Math.max(comparison.left.length, comparison.right.length) },
    (_, i) => ({
      left: comparison.left[i] ?? "",
      right: comparison.right[i] ?? "",
    })
  );

  return (
    <SectionShell className="py-16 sm:py-20">
      <div className="relative">
        {/* top hairline across (like the screenshot) */}
        <div className="h-px w-full bg-foreground/10" />

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT (featured) */}
          <div
            className={cn(
              "overflow-hidden rounded-[28px]",
              "border border-foreground/10 bg-background",
              "shadow-[0_10px_30px_-18px_rgba(0,0,0,0.25)]"
            )}
          >
            <div className="px-8 py-6 text-center">
              <h3 className="text-lg font-semibold tracking-tight">
                {comparison.leftTitle}
              </h3>
            </div>

            <div className="h-px w-full bg-foreground/10" />

            <ul className="divide-y divide-foreground/10">
              {rows.map((r, i) => (
                <li key={i} className="px-8 py-8">
                  <div className="flex items-center gap-4">
                    {/* left is your product, assume it's a check when text exists */}
                    <CellIcon type={r.left ? "check" : "x"} />
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {r.left || <span className="opacity-40">—</span>}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT (plain) */}
          <div>
            <div className="px-2 py-6 text-center">
              <h3 className="text-lg font-medium tracking-tight text-muted-foreground">
                {comparison.rightTitle}
              </h3>
            </div>

            <div className="h-px w-full bg-foreground/10" />

            <ul className="divide-y divide-foreground/10">
              {rows.map((r, i) => (
                <li key={i} className="px-2 py-8">
                  <div className="flex items-center gap-4">
                    {/* heuristic: if missing/empty, show X */}
                    <CellIcon type={r.right ? "check" : "x"} />
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {r.right || <span className="opacity-40">—</span>}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
