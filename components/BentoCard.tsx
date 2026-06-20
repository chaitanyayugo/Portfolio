import type { ReactNode } from "react";

export function BentoCard({
  className = "",
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07] ${className}`}
    >
      {children}
    </div>
  );
}
