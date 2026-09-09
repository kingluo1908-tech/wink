import { ArrowDown, Repeat2 } from "lucide-react";
import { motion } from "framer-motion";
import { LetterSwap3D } from "../components/LetterSwap3D";
import { WinkLogo } from "../components/WinkLogo";
import { copy, type Language } from "../config/i18n";

type HeroSectionProps = {
  language: Language;
};

export function HeroSection({ language }: HeroSectionProps) {
  const t = copy[language].hero;

  return (
    <section id="home" className="relative min-h-dvh overflow-hidden px-4 pt-28 sm:px-6 lg:px-8">
      <img
        src="/assets/visuals/hero-brand.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.28] [mask-image:radial-gradient(circle_at_center,black_0%,black_34%,transparent_78%)]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(183,255,0,0.12),transparent_28%),radial-gradient(circle_at_72%_34%,rgba(109,99,255,0.2),transparent_32%),linear-gradient(180deg,rgba(5,8,22,0.1),#050816_92%)]" />
      <motion.div
        aria-hidden="true"
        className="absolute left-[-12%] top-[70%] h-px w-[58vw] rotate-[-19deg] bg-gradient-to-r from-transparent via-wink-green to-transparent shadow-[0_0_28px_rgba(183,255,0,0.75)]"
        initial={{ opacity: 0, x: -260, scaleX: 0.2 }}
        animate={{ opacity: [0, 1, 0.25], x: 520, scaleX: 1 }}
        transition={{ duration: 1.55, delay: 0.25, ease: "easeOut" }}
      />
      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-7rem)] max-w-7xl flex-col items-center justify-center pb-20 text-center">
        <WinkLogo size="lg" interactive ariaLabel={copy[language].common.touchLogo} />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-5 text-[11px] font-semibold uppercase tracking-[0.42em] text-wink-green/70"
        >
          {t.touch}
        </motion.p>
        <LetterSwap3D
          text="Wink"
          className="mt-6 font-display text-5xl font-semibold leading-none text-white sm:text-7xl lg:text-8xl"
          staggerInterval={0.055}
          duration={0.72}
          flipDirection="top"
        />
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.14 }}
          className="mt-6 max-w-3xl"
        >
          <p className="font-display text-xl text-white sm:text-2xl">{t.tagline}</p>
          <p className="mt-3 text-base font-semibold uppercase tracking-[0.2em] text-white/[0.58]">{t.stack}</p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/[0.62]">
            {t.sentence}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.32 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a href="#swap" className="inline-flex h-12 min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-wink-green px-7 font-bold text-ink-950 transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80">
            <Repeat2 size={18} aria-hidden="true" />
            {t.primary}
          </a>
          <a href="#mechanism" className="inline-flex h-12 min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.045] px-7 font-bold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wink-green">
            <ArrowDown size={18} aria-hidden="true" />
            {t.secondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
