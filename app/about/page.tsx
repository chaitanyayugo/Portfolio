import { SiteShell } from "@/components/SiteShell";
import { SectionHeading } from "@/components/SectionHeading";
import { BentoCard } from "@/components/BentoCard";

export default function AboutPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-5xl px-5 py-10 md:px-10">
        <SectionHeading
          eyebrow="About"
          title="Operations, automation, and BI with real business ownership."
          description="This page turns the CV into a narrative: systems ownership, process design, and measurable delivery."
        />
        <div className="grid gap-5">
          <BentoCard className="p-6 md:p-8">
            <p className="text-sm leading-8 text-white/70 md:text-base">
              You are an operations and data professional focused on ERP ecosystems, automation pipelines, and BI dashboards in commercial environments.
              Your strongest differentiator is not just technical breadth; it is the ability to own production systems end to end and translate them into daily business value.
            </p>
          </BentoCard>
          <BentoCard className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Core strengths</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-white/70">
              <li>End-to-end ERP ownership</li>
              <li>Production automation pipelines</li>
              <li>Dashboard delivery and stakeholder reporting</li>
              <li>Multi-location inventory management</li>
              <li>Cross-platform API integration</li>
            </ul>
          </BentoCard>
        </div>
      </main>
    </SiteShell>
  );
}
