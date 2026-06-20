import Link from "next/link";
import { ArrowUpRight, Database, Layers3, Sparkles, Workflow, Bot, BarChart3 } from "lucide-react";
import { BentoCard } from "@/components/BentoCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteShell } from "@/components/SiteShell";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = [projects[0], projects[1], projects[3]];

  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-5 pb-20 pt-8 md:px-10">
        <section className="grid gap-5 md:grid-cols-12">
          <BentoCard className="md:col-span-7 md:row-span-2 p-7 md:p-10 min-h-[420px]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs text-cyan-200">
              <Sparkles className="h-4 w-4" />
              ERP • BI • Automation • Operations
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
              I build <span className="text-cyan-300">systems</span> that make operations move.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              {site.role} with deep ownership in Odoo ecosystems, automation pipelines, live dashboards, and executive reporting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#050816] transition hover:scale-[1.02] hover:bg-cyan-300">
                View case studies <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10">
                Contact
              </Link>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-5 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/70">Impact</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {[
                ["2,500+", "Products"],
                ["6,000", "Orders"],
                ["15", "Daily users"],
                ["90+ hrs", "Saved/month"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="text-3xl font-semibold text-cyan-300">{value}</div>
                  <div className="mt-1 text-sm text-white/55">{label}</div>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-4 p-6">
            <Database className="h-8 w-8 text-cyan-300" />
            <h2 className="mt-4 text-2xl font-semibold">Odoo ownership</h2>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Server actions, scheduled actions, reporting, and inventory workflows across 7 modules.
            </p>
          </BentoCard>

          <BentoCard className="md:col-span-4 p-6">
            <Workflow className="h-8 w-8 text-cyan-300" />
            <h2 className="mt-4 text-2xl font-semibold">Automation systems</h2>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Closed-loop pipelines spanning Airtable, Zoho, Razorpay, Blue Dart, Interact, SMTP, and Make.
            </p>
          </BentoCard>

          <BentoCard className="md:col-span-4 p-6">
            <BarChart3 className="h-8 w-8 text-cyan-300" />
            <h2 className="mt-4 text-2xl font-semibold">BI delivery</h2>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Power BI dashboards, executive summaries, and data storytelling for operations leaders.
            </p>
          </BentoCard>
        </section>

        <section className="mt-16">
          <SectionHeading
            eyebrow="Featured case studies"
            title="Systems with measurable impact."
            description="Each case study is built as a separate page so the portfolio feels like a premium product site, not a single scroll resume."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <BentoCard className="h-full p-6 transition hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Case study</p>
                  <h3 className="mt-3 text-2xl font-semibold">{project.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                        {item}
                      </span>
                    ))}
                  </div>
                </BentoCard>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-5 md:grid-cols-12">
          <BentoCard className="md:col-span-8 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/70">Story</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Designed to read like a digital studio, grounded in real operations work.</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65 md:text-base">
              The homepage is a bento system with strong hierarchy, high contrast, animated depth, and a clear path into each project’s architecture, outcomes, and role.
            </p>
          </BentoCard>

          <BentoCard className="md:col-span-4 p-6">
            <Bot className="h-8 w-8 text-cyan-300" />
            <h3 className="mt-4 text-2xl font-semibold">Build style</h3>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Dark premium visuals, hover lift, glass panels, and storytelling cards for an elite portfolio feel.
            </p>
          </BentoCard>
        </section>

        <section className="mt-16 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/70">All projects</p>
            <h2 className="mt-3 text-3xl font-semibold">Browse every case study.</h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10">
            Open project library <Layers3 className="h-4 w-4" />
          </Link>
        </section>
      </main>
    </SiteShell>
  );
}
