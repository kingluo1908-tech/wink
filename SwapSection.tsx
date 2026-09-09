import { motion } from "framer-motion";
import { SwapCard } from "../components/SwapCard";
import { SectionHeader } from "../components/SectionHeader";
import { copy, type Language } from "../config/i18n";

type SwapSectionProps = {
  language: Language;
};

export function SwapSection({ language }: SwapSectionProps) {
  const t = copy[language].swap;

  return (
    <section id="swap" className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
      <img
        src="/assets/visuals/swap-dual.png"
        alt="WINK and BLINK swap visual"
        loading="lazy"
        className="absolute inset-x-0 top-12 mx-auto w-full max-w-6xl opacity-[0.24] [mask-image:radial-gradient(circle_at_50%_38%,black_0%,transparent_70%)]"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader eyebrow="Swap" title={t.title} subtitle={t.subtitle} />
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.68 }}
          className="mx-auto max-w-xl"
        >
          <SwapCard language={language} />
        </motion.div>
      </div>
    </section>
  );
}
