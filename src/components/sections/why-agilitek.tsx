import { SectionShell } from "@/components/layout/section-shell";
import { why } from "@/content/onepager";
import { Button } from "@/components/ui/button";

export function WhyAgilitek() {
  return (
    <SectionShell id="howto">
      <div className="rounded-3xl bg-foreground/[0.03] ring-1 ring-foreground/10 p-6 sm:p-10">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{why.title}</h2>
        <p className="mt-3 text-lg text-muted-foreground">{why.lead}</p>

        <div className="mt-6 space-y-3">
          {why.body.map((p) => (
            <p key={p} className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>

        {/* <div className="mt-8">
          <Button asChild className="rounded-full">
            <a href={why.cta.href}>{why.cta.label}</a>
          </Button>
        </div> */}
      </div>
    </SectionShell>
  );
}
