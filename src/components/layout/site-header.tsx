import { nav } from "@/content/onepager";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { useMemo, useState } from "react";
import { Logo } from "@/components/brand/logo";

function NavLinks({
  activeId,
  onNavigate,
  variant = "desktop",
}: {
  activeId: string;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
}) {
  const linkBase =
    "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  return (
    <nav
      className={cn(
        variant === "desktop"
          ? "hidden items-center gap-7 text-sm text-muted-foreground md:flex"
          : "grid gap-3 text-sm"
      )}
      aria-label="Primary"
    >
      {nav.map((i) => {
        const isActive = activeId === i.id;
        return (
          <a
            key={i.href}
            href={i.href}
            onClick={onNavigate}
            className={cn(
              linkBase,
              isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {i.label}
          </a>
        );
      })}
    </nav>
  );
}

export function SiteHeader() {
  const ids = useMemo(() => nav.map((n) => n.id), []);
  const activeId = useActiveSection({ ids });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between
                h-16 sm:h-18 lg:h-20
                px-5 sm:px-6">

            <a
            href="#"
            className="absolute left-5 sm:left-6
                        top-1/2 -translate-y-1/2
                        h-16 sm:h-20 lg:h-24
                        flex items-center
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
            <Logo className="h-full w-auto text-foreground" title="Agilitek" />
            <span className="sr-only">Agilitek</span>
            </a>

        {/* Desktop nav (centered) */}
        <div className="flex-1 flex items-center justify-center">
          <NavLinks activeId={activeId} variant="desktop" />
        </div>

        {/* Right controls (reserved + non-shrinking) */}
        <div className="flex items-center gap-2 shrink-0">
          <Button asChild className="hidden rounded-full md:inline-flex">
            <a href="#contact">Book Demo</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="rounded-full md:hidden" aria-label="Open menu">
                Menu
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-3">
                  <Logo className="h-7 w-auto text-foreground" title="Agilitek" />
                  <span>Agilitek PX</span>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6">
                <NavLinks activeId={activeId} variant="mobile" onNavigate={() => setOpen(false)} />

                <div className="mt-6">
                  <Button asChild className="w-full rounded-full">
                    <a href="#contact" onClick={() => setOpen(false)}>
                      Book Demo
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
