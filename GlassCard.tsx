import { type HTMLAttributes, type ReactNode } from "react";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  glow?: "green" | "violet" | "none";
};

export function GlassCard({ children, className = "", glow = "none", ...props }: GlassCardProps) {
  const glowClass =
    glow === "green"
      ? "shadow-glow"
      : glow === "violet"
        ? "shadow-violet"
        : "shadow-[0_24px_80px_rgba(0,0,0,0.22)]";

  return (
    <div
      className={`rounded-[24px] border border-white/[0.08] bg-white/[0.045] backdrop-blur-[18px] ${glowClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
