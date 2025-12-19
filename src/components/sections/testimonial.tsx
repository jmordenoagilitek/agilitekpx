import { SectionShell } from "@/components/layout/section-shell";
import { testimonial } from "@/content/onepager";
import { cn } from "@/lib/utils";

export function Testimonial() {
  return (
    <SectionShell className="py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
        {/* LEFT: image placeholder (swap to <img /> later) */}
        <div
          aria-hidden="true"
          className={cn(
            "aspect-[4/3] w-full overflow-hidden rounded-[32px]",
            "bg-[var(--brand-primary)]"
          )}
        />

        {/* RIGHT: quote column */}
        <div className="flex flex-col">
          {/* top hairline */}
          <div className="h-px w-full bg-foreground/10" />

          <div className="pt-10">
            <blockquote className="text-balance text-3xl leading-[1.12] tracking-tight sm:text-4xl">
              “{testimonial.quote}”
            </blockquote>

            <div className="mt-14">
              <div className="text-sm font-medium text-foreground">
                {testimonial.name}
              </div>
              <div className="mt-1 text-xs font-medium tracking-wide text-[var(--brand-primary)]">
                {testimonial.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
