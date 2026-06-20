import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { BentoCard } from "@/components/BentoCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-5 py-10 md:px-10">
        <SectionHeading
          eyebrow="Projects"
          title="Case study library."
          description="Every project gets its own page with problem, architecture, role, and outcome."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <BentoCard className="h-full p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Case study</p>
                <h2 className="mt-3 text-2xl font-semibold">{project.name}</h2>
                <p className="mt-4 text-sm leading-7 text-white/65">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((stack) => (
                    <span key={stack} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      {stack}
                    </span>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-cyan-300">
                  Open case study <ArrowUpRight className="h-4 w-4" />
                </div>
              </BentoCard>
            </Link>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
