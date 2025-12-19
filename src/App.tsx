import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

import { Hero } from "@/components/sections/hero";
import { ProblemStatement } from "@/components/sections/problem-statement";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CRMNativeBand } from "@/components/sections/crm-native-band";
import { WeKnowPartnerships } from "@/components/sections/we-know-partnerships";
import { WhyAgilitek } from "@/components/sections/why-agilitek";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { Testimonial } from "@/components/sections/testimonial";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.10),transparent_55%)]"
        aria-hidden="true"
      />

      <SiteHeader />

      <main>
        <Hero />
        <ProblemStatement />
        <FeatureGrid />
        <CRMNativeBand />
        <WeKnowPartnerships />
        <WhyAgilitek />
        <ComparisonTable />
        <Testimonial />
        <ContactCTA />
      </main>

      <SiteFooter />
    </div>
  );
}
