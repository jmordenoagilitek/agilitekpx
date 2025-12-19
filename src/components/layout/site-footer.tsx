import { nav } from "@/content/onepager";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="mt-10">
      <Separator />
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Agilitek. All rights reserved.
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground" aria-label="Footer">
            {nav.map((i) => (
              <a key={i.href} href={i.href} className="hover:text-foreground">
                {i.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
