import { hero } from "@/content/onepager";
// import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/layout/section-shell";

import heroTeaser from "@/components/pics/hero_teaser.png";

function Emph({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "blue" | "italic";
}) {
  return (
    <span
      className={
        variant === "blue"
          ? "text-primary"
          : "italic font-medium"
      }
    >
      {children}
    </span>
  );
}

export function Hero() {
  return (
    <SectionShell className="pt-10 sm:pt-14">
      <div className="mx-auto max-w-4xl text-center">
        {/* Headline */}
        <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          Powering Every <Emph variant="blue">Deal</Emph>,{" "}
          <Emph variant="blue">Dollar</Emph>, and{" "}
          <Emph variant="blue">Deliverable</Emph> in Sports{" "}
          <Emph variant="italic">Partnerships</Emph>
        </h1>

        {/* CTA
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" className="rounded-full px-7">
            <a href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</a>
          </Button>
        </div> */}

        {/* Device + image */}
        <div className="relative mt-10 sm:mt-12 overflow-visible">
        {/* Slab — bottom-aligned with device */}
        <div
            aria-hidden="true"
            className="
            pointer-events-none absolute left-1/2 bottom-0 -z-10
            h-[350px] w-[110%] max-w-[980px]
            -translate-x-1/2
            rounded-[44px]
            bg-[var(--brand-primary)]
            "
        />

        {/* Device frame */}
        <div className="relative mx-auto w-[92%] max-w-3xl">
            <div
            className="
                overflow-hidden
                rounded-t-[2.25rem] rounded-b-none
                bg-white
                shadow-[0_-0px_50px_-30px_rgba(0,0,0,0.45)]
            "
            >
            <div className="aspect-[16/10] w-full">
                <img
                src={heroTeaser}
                alt="Agilitek PX preview"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
                />
            </div>
            </div>
        </div>
        </div>

            {/* Trusted by */}
            <div className="mt-16 sm:mt-20 lg:mt-24 pb-8 sm:pb-12">
            <div className="mb-8 sm:mb-10 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-border" aria-hidden="true" />
                <p className="text-sm sm:text-base font-medium uppercase tracking-wide text-muted-foreground">
                Trusted by
                </p>
                <span className="h-px w-12 bg-border" aria-hidden="true" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 py-4 sm:py-6">
                {hero.trustedBy.map((logo) => (
                <img
                    key={logo.name}
                    src={logo.src}
                    alt={logo.name}
                    className="
                    h-20 sm:h-24 lg:h-28
                    w-auto
                    opacity-80
                    grayscale
                    transition
                    hover:opacity-100 hover:grayscale-0
                    select-none
                    "                  
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                />
                ))}
            </div>
            </div>


      </div>
    </SectionShell>
  );
}
