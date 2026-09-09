import { motion } from "framer-motion";
import { ArrowDown, CircleDollarSign, Flame, Gift, Shield } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { SectionHeader } from "../components/SectionHeader";
import { WinkLogo } from "../components/WinkLogo";
import { copy, type Language } from "../config/i18n";

type MechanismSectionProps = {
  language: Language;
};

const stepIcons = [CircleDollarSign, Shield, Flame, Gift] as const;
const stepTones = ["green", "violet", "green", "violet"] as const;

export function MechanismSection({ language }: MechanismSectionProps) {
  const t = copy[language].mechanism;

  return (
    <section id="mechanism" className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
      <img
        src="/assets/visuals/mechanism-flow.png"
        alt="Protocol value flow visual"
        loading="lazy"
        className="absolute inset-x-0 top-10 mx-auto w-full max-w-7xl opacity-[0.16] [mask-image:radial-gradient(circle_at_50%_46%,black_0%,transparent_74%)]"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader eyebrow="Protocol Mechanism" title={t.title} subtitle={t.subtitle} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65 }}
          className="grid gap-5 lg:grid-cols-[1fr_120px_1fr]"
        >
          <GlassCard className="p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-wink-green/[0.12] text-wink-green">
                <CircleDollarSign size={22} aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-5xl font-semibold text-white">2%</p>
                <p className="text-sm text-white/[0.52]">{t.convertBlink}</p>
              </div>
            </div>
            <p className="text-2xl font-semibold text-white">{t.reserveTitle}</p>
            <p className="mt-4 leading-8 text-white/60">{t.reserveBody}</p>
          </GlassCard>
          <div className="flex items-center justify-center lg:flex-col">
            <motion.div
              className="grid h-24 w-24 place-items-center rounded-full border border-wink-green/40 bg-wink-green/[0.12] text-center font-display text-4xl font-semibold text-wink-green shadow-glow"
              animate={{ boxShadow: ["0 0 24px rgba(183,255,0,0.18)", "0 0 46px rgba(183,255,0,0.34)", "0 0 24px rgba(183,255,0,0.18)"] }}
              transition={{ duration: 3.6, repeat: Infinity }}
            >
              3%
            </motion.div>
          </div>
          <GlassCard className="p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blink-violet/[0.18] text-blink-violet3">
                <Gift size={22} aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-5xl font-semibold text-white">1%</p>
                <p className="text-sm text-white/[0.52]">{t.convertBlink}</p>
              </div>
            </div>
            <p className="text-2xl font-semibold text-white">{t.rewardTitle}</p>
            <p className="mt-4 leading-8 text-white/60">{t.rewardBody}</p>
          </GlassCard>
        </motion.div>
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard className="relative min-h-[460px] overflow-hidden p-6">
            <div className="absolute inset-8 rounded-full border border-white/10" />
            <div className="absolute inset-16 rounded-full border border-wink-green/[0.15]" />
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <WinkLogo size="md" />
            </div>
            {t.flywheel.map((node, index) => {
              const angle = (Math.PI * 2 * index) / t.flywheel.length - Math.PI / 2;
              const x = 50 + Math.cos(angle) * 38;
              const y = 50 + Math.sin(angle) * 38;
              return (
                <div
                  key={node}
                  className="absolute max-w-32 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-[#070b1d]/80 px-3 py-2 text-center text-sm font-semibold text-white/[0.82] backdrop-blur-xl"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {node}
                </div>
              );
            })}
            <motion.span
              aria-hidden="true"
              className="absolute left-1/2 top-[12%] h-3 w-3 rounded-full bg-wink-green shadow-[0_0_18px_rgba(183,255,0,0.9)]"
              animate={{ rotate: 360 }}
              style={{ transformOrigin: "0 175px" }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />
          </GlassCard>
          <GlassCard className="p-6 sm:p-8">
            <div className="grid gap-5">
              {[
                ...t.steps.map(([title, body], index) => [title, body, stepIcons[index], stepTones[index]] as const)
              ].map(([title, body, Icon, tone]) => (
                <div key={title as string} className="flex gap-4 rounded-[20px] border border-white/[0.07] bg-white/[0.035] p-4">
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${tone === "green" ? "bg-wink-green/[0.12] text-wink-green" : "bg-blink-violet/[0.18] text-blink-violet3"}`}>
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{title as string}</p>
                    <p className="mt-1 leading-7 text-white/[0.58]">{body as string}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center text-wink-green">
              <ArrowDown size={22} aria-hidden="true" />
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
