import { SiteShell } from "@/components/SiteShell";
import { SectionHeading } from "@/components/SectionHeading";
import { BentoCard } from "@/components/BentoCard";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-5xl px-5 py-10 md:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s turn the portfolio into a strong public presence."
          description="Use this page for outreach, hiring interest, or project discussions."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <BentoCard className="p-6 md:p-8">
            <p className="text-sm leading-8 text-white/70">
              Email: {site.email}
              <br />
              Phone: {site.phone}
              <br />
              GitHub: {site.github}
              <br />
              LinkedIn: {site.linkedin}
              <br />
              Location: {site.location}
            </p>
          </BentoCard>
          <BentoCard className="p-6 md:p-8">
            <div className="grid gap-4">
              {["Name", "Email", "Project type", "Message"].map((field, idx) => (
                <div key={field} className={idx === 3 ? "md:col-span-2" : ""}>
                  <label className="mb-2 block text-sm text-white/60">{field}</label>
                  {field === "Message" ? (
                    <textarea className="min-h-32 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-300/40" />
                  ) : (
                    <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-300/40" />
                  )}
                </div>
              ))}
            </div>
          </BentoCard>
        </div>
      </main>
    </SiteShell>
  );
}
