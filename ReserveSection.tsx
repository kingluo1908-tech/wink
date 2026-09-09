import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, TrendingUp } from "lucide-react";
import { AnimatedNumber } from "../components/AnimatedNumber";
import { GlassCard } from "../components/GlassCard";
import { PriceChart } from "../components/PriceChart";
import { ReserveChart } from "../components/ReserveChart";
import { SectionHeader } from "../components/SectionHeader";
import { copy, type Language } from "../config/i18n";
import { protocolData } from "../data/protocolData";

type ReserveSectionProps = {
  language: Language;
};

export function ReserveSection({ language }: ReserveSectionProps) {
  const t = copy[language].reserve;
  const [range, setRange] = useState("7D");

  return (
    <section id="reserve" className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
      <img
        src="/assets/visuals/reserve-vault.png"
        alt="BLINK reserve vault visual"
        loading="lazy"
        className="absolute right-0 top-32 hidden w-[54vw] max-w-4xl opacity-[0.28] [mask-image:linear-gradient(90deg,transparent,black_32%,transparent_96%)] lg:block"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader eyebrow="DYNAMIC RESERVE" title={t.title} subtitle={t.subtitle} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65 }}
          className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]"
        >
          <GlassCard glow="green" className="p-6 sm:p-8">
            <div className="mb-8 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-wink-green/[0.12] text-wink-green">
                <ShieldCheck size={22} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm text-white/50">{t.currentReserve}</p>
                <p className="text-sm font-semibold text-wink-green">Live Mock Reserve</p>
              </div>
            </div>
            <p className="font-display text-5xl font-semibold leading-none text-white sm:text-7xl">
              <AnimatedNumber value={protocolData.blinkReserve} /> <span className="text-2xl text-white/[0.42]">BLINK</span>
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-white/[0.48]">{t.reserveValue}</p>
                <p className="mt-1 font-display text-3xl font-semibold tabular-nums text-white">
                  <AnimatedNumber value={protocolData.reserveUsdValue} formatter={(value) => `$${Math.round(value).toLocaleString("en-US")}`} />
                </p>
              </div>
              <div>
                <p className="text-sm text-white/[0.48]">{t.ratio}</p>
                <p className="mt-1 font-display text-3xl font-semibold tabular-nums text-wink-green">
                  <AnimatedNumber value={protocolData.marketFloorRatio} formatter={(value) => `${value.toFixed(2)}x`} />
                </p>
              </div>
            </div>
          </GlassCard>
          <GlassCard className="p-6 sm:p-8">
            <div className="grid gap-4">
              {[
                [t.marketPrice, `$${protocolData.marketPrice.toFixed(6)}`, `+${protocolData.marketPriceChange24h}%`, "green"],
                [t.floorPrice, `$${protocolData.floorPrice.toFixed(6)}`, "Dynamic Floor", "violet"],
                [t.increase24h, `+${protocolData.reserveIncrease24h.toLocaleString("en-US")} BLINK`, "Growing", "green"],
                [t.increase7d, `+${protocolData.reserveIncrease7d.toLocaleString("en-US")} BLINK`, "Reserve Flow", "violet"]
              ].map(([label, value, tag, tone]) => (
                <div key={label} className="flex items-center justify-between gap-4 rounded-[20px] border border-white/[0.07] bg-white/[0.035] p-4">
                  <div>
                    <p className="text-sm text-white/[0.48]">{label}</p>
                    <p className="mt-1 font-display text-2xl font-semibold tabular-nums text-white">{value}</p>
                  </div>
                  <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${tone === "green" ? "bg-wink-green/[0.12] text-wink-green" : "bg-blink-violet/[0.18] text-blink-violet3"}`}>
                    <ArrowUpRight size={14} aria-hidden="true" />
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <GlassCard className="p-5 sm:p-7">
            <PriceChart language={language} data={protocolData.marketChartData} activeRange={range} onRangeChange={setRange} />
          </GlassCard>
          <GlassCard className="p-5 sm:p-7">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blink-violet/[0.16] text-blink-violet3">
                <TrendingUp size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-xl font-semibold text-white">{t.reserveGrowth}</p>
                <p className="text-sm text-white/[0.48]">{t.reserveGrowthSub}</p>
              </div>
            </div>
            <ReserveChart data={protocolData.reserveChartData} />
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
