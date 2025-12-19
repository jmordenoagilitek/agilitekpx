import { SectionShell } from "@/components/layout/section-shell";
import { contact } from "@/content/onepager";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <SectionShell id="contact">
      <div className="rounded-3xl bg-foreground text-background p-8 sm:p-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">{contact.title}</h2>
            <p className="text-background/80">{contact.subtitle}</p>
          </div>
          <div className="flex lg:justify-end">
            <Button asChild size="lg" className="rounded-full bg-background text-foreground hover:bg-background/90">
              <a href="#contact">{contact.cta.label}</a>
            </Button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

