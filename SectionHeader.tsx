import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, subtitle, align = "center" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={align === "center" ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10 max-w-3xl"}
    >
      <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.28em] text-wink-green">
        {eyebrow}
      </p>
      <h2 className="text-balance font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-5 text-lg leading-8 text-white/[0.62]">{subtitle}</p> : null}
    </motion.div>
  );
}
