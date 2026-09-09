import { motion } from "framer-motion";
import { AnimatedNumber } from "../components/AnimatedNumber";
import { BurnCard } from "../components/BurnCard";
import { GlassCard } from "../components/GlassCard";
import { SectionHeader } from "../components/SectionHeader";
import { copy, type Language } from "../config/i18n";
import { protocolData } from "../data/protocolData";

type BurnSectionProps = {
  language: Language;
  onBurnComplete: (amount: number) => void;
};

export function BurnSection({ language, onBurnComplete }: BurnSectionProps) {
  const t = copy[language].burn;

  return (
    <section id="burn" className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
      <img
        src="/assets/visuals/burn-core.png"
        alt="WINK burn core visual"
        loading="lazy"
        className="absolute left-0 top-24 w-full opacity-[0.18] [mask-image:radial-gradient(circle_at_28%_45%,black_0%,transparent_62%)] lg:w-[58vw]"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader eyebrow="Burn Center" title={t.title} subtitle={t.subtitle} />
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65 }}
            className="space-y-5"
          >
            <GlassCard glow="green" className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-wink-green">{t.totalBurned}</p>
              <p className="mt-4 font-display text-5xl font-semibold leading-none text-white sm:text-7xl">
                <AnimatedNumber value={protocolData.burnedSupply} /> <span className="text-2xl text-white/[0.42]">WINK</span>
              </p>
              <div className="mt-7 h-3 overflow-hidden rounded-full bg-white/[0.07]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${protocolData.burnRatio}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-wink-green to-amber-300"
                />
              </div>
            </GlassCard>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                [t.circulating, `${protocolData.circulatingSupply.toLocaleString("en-US")} WINK`],
                [t.burnRatio, `${protocolData.burnRatio}%`],
                [t.participants, protocolData.burnParticipants.toLocaleString("en-US")]
              ].map(([label, value]) => (
                <GlassCard key={label} className="p-5">
                  <p className="text-sm text-white/[0.48]">{label}</p>
                  <p className="mt-2 font-display text-2xl font-semibold tabular-nums text-white">{value}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            <BurnCard language={language} onBurnComplete={onBurnComplete} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
