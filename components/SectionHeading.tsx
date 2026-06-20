export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-[11px] uppercase tracking-[0.45em] text-cyan-300/70">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65 md:text-base">{description}</p>}
    </div>
  );
}
