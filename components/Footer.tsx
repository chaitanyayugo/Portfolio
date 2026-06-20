import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 text-sm text-white/50 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>{site.name} • {site.role}</p>
        <p>Built for GitHub Pages deployment.</p>
      </div>
    </footer>
  );
}
