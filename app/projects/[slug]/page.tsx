import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { CaseStudyBlock } from "@/components/CaseStudyBlock";
import { projects, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <SiteShell>
      <main className="mx-auto max-w-5xl px-5 py-10 md:px-10">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-cyan-300">
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <section className="mt-8 rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl md:p-10">
          <p className="text-xs uppercase tracking-[0.45em] text-cyan-300/70">Case study</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">{project.name}</h1>
          <p className="mt-5 max-w-3xl text-sm leading-8 text-white/70 md:text-base">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs text-cyan-100">
                {item}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-6 grid gap-5">
          <CaseStudyBlock title="Problem">
            {project.problem}
          </CaseStudyBlock>

          <CaseStudyBlock title="My role">
            {project.role}
          </CaseStudyBlock>

          <CaseStudyBlock title="Architecture">
            <ul className="list-disc space-y-2 pl-5">
              {project.architecture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CaseStudyBlock>

          <CaseStudyBlock title="Impact">
            <ul className="list-disc space-y-2 pl-5">
              {project.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CaseStudyBlock>

          <CaseStudyBlock title="Outcome">
            <ul className="list-disc space-y-2 pl-5">
              {project.outcome.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CaseStudyBlock>
        </div>
      </main>
    </SiteShell>
  );
}
