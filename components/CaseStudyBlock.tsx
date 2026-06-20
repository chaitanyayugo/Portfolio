export function CaseStudyBlock({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl md:p-8">
      <h3 className="text-xl font-semibold text-white md:text-2xl">{title}</h3>
      <div className="mt-4 text-sm leading-7 text-white/70 md:text-base">{children}</div>
    </section>
  );
}
