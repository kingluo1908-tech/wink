import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, Loader2 } from "lucide-react";
import { AnimatedNumber } from "../components/AnimatedNumber";
import { ConfirmModal } from "../components/ConfirmModal";
import { GlassCard } from "../components/GlassCard";
import { RewardsTable } from "../components/RewardsTable";
import { SectionHeader } from "../components/SectionHeader";
import { copy, type Language } from "../config/i18n";
import { protocolData } from "../data/protocolData";

type RewardsSectionProps = {
  language: Language;
};

export function RewardsSection({ language }: RewardsSectionProps) {
  const t = copy[language].rewards;
  const common = copy[language].common;
  const [pending, setPending] = useState(protocolData.pendingRewards);
  const [claimed, setClaimed] = useState(protocolData.claimedRewards);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [claiming, setClaiming] = useState(false);

  const confirmClaim = () => {
    // TODO: replace mock interaction with real contract call
    setConfirmOpen(false);
    setClaiming(true);
    window.setTimeout(() => {
      setClaimed((value) => value + pending);
      setPending(0);
      setClaiming(false);
    }, 1050);
  };

  return (
    <section id="rewards" className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
      <img
        src="/assets/visuals/rewards-core.png"
        alt="BLINK rewards core visual"
        loading="lazy"
        className="absolute right-0 top-28 w-full max-w-5xl opacity-[0.18] [mask-image:radial-gradient(circle_at_70%_42%,black_0%,transparent_70%)]"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader eyebrow="BLINK Rewards" title={t.title} subtitle={t.subtitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [t.myBurned, protocolData.myBurnedAmount, " WINK"],
            [t.myWeight, protocolData.myBurnWeight, "%"],
            [t.pending, pending, " BLINK"],
            [t.claimed, claimed, " BLINK"]
          ].map(([label, value, suffix]) => (
            <GlassCard key={label as string} className="p-5">
              <p className="text-sm text-white/[0.48]">{label as string}</p>
              <p className="mt-3 font-display text-3xl font-semibold tabular-nums text-white">
                <AnimatedNumber
                  value={value as number}
                  formatter={(next) =>
                    `${(suffix as string) === "%" ? next.toFixed(2) : Math.round(next).toLocaleString("en-US")}${suffix as string}`
                  }
                />
              </p>
            </GlassCard>
          ))}
        </div>
        <div className="mt-6 grid items-stretch gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <GlassCard glow="violet" className="relative overflow-hidden p-6 sm:p-8">
            {claiming ? (
              <motion.div
                className="pointer-events-none absolute inset-0 z-10 bg-blink-violet/[0.10]"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1 }}
              >
                {[0, 1, 2, 3, 4, 5].map((dot) => (
                  <motion.span
                    key={dot}
                    className="absolute left-[18%] top-[62%] h-2 w-2 rounded-full bg-blink-violet3 shadow-[0_0_18px_rgba(125,114,255,0.85)]"
                    animate={{ x: [0, 220 + dot * 16], y: [0, -120 + dot * 15], opacity: [0, 1, 0], scale: [0.6, 1, 0.4] }}
                    transition={{ duration: 0.95, delay: dot * 0.045 }}
                  />
                ))}
              </motion.div>
            ) : null}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-white/[0.48]">{t.rewardPool}</p>
                <p className="mt-2 font-display text-4xl font-semibold tabular-nums text-white">
                  {protocolData.rewardPool.toLocaleString("en-US")} BLINK
                </p>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blink-violet/[0.18] text-blink-violet3">
                <Gift size={22} aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8 rounded-[22px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-white/[0.48]">{t.distributedToday}</p>
              <p className="mt-2 font-display text-3xl font-semibold tabular-nums text-wink-green">28,540 BLINK</p>
            </div>
            <button
              type="button"
              disabled={pending <= 0 || claiming}
              onClick={() => setConfirmOpen(true)}
              className="mt-7 flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-blink-violet2 font-bold text-white transition hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              {claiming ? <Loader2 size={18} className="animate-spin" aria-hidden="true" /> : null}
              {t.claim}
            </button>
          </GlassCard>
          <RewardsTable language={language} rows={protocolData.topBurnAddresses} />
        </div>
      </div>
      <ConfirmModal
        open={confirmOpen}
        title={t.modalTitle}
        confirmLabel={t.modalConfirm}
        cancelLabel={common.cancel}
        closeLabel={common.close}
        tone="violet"
        onCancel={() => setConfirmOpen(false)}
        onConfirm={confirmClaim}
      >
        <p>
          {t.modalPrefix} {pending.toLocaleString("en-US")} BLINK. {t.modalSuffix}
        </p>
      </ConfirmModal>
    </section>
  );
}
