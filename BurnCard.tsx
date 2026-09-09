import { motion } from "framer-motion";
import { Flame, Loader2 } from "lucide-react";
import { useMemo, useState } from "react";
import { copy, type Language } from "../config/i18n";
import { ConfirmModal } from "./ConfirmModal";
import { GlassCard } from "./GlassCard";

type BurnCardProps = {
  language: Language;
  onBurnComplete: (amount: number) => void;
};

const balance = 12580000;
const myCurrentBurn = 8500000;
const globalBurn = 386520000;
const rewardPool = 12580;

export function BurnCard({ language, onBurnComplete }: BurnCardProps) {
  const t = copy[language].burn;
  const common = copy[language].common;
  const [amount, setAmount] = useState(1000000);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [burning, setBurning] = useState(false);

  const weight = useMemo(() => (amount / (globalBurn + amount)) * 100, [amount]);

  const setByPercent = (percent: number) => setAmount(Math.round(balance * percent));

  const confirmBurn = () => {
    // TODO: replace mock interaction with real contract call
    setConfirmOpen(false);
    setBurning(true);
    window.setTimeout(() => {
      setBurning(false);
      onBurnComplete(amount);
    }, 1250);
  };

  return (
    <>
      <GlassCard glow="green" className="relative overflow-hidden p-5 sm:p-7">
        {burning ? (
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 grid place-items-center bg-[#080d23]/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative h-52 w-52">
              <motion.div
                className="absolute inset-12 rounded-full bg-[radial-gradient(circle,#ffb545_0%,rgba(255,181,69,0.35)_38%,transparent_70%)]"
                animate={{ scale: [0.8, 1.08, 0.9], opacity: [0.2, 0.9, 0.15] }}
                transition={{ duration: 1.1 }}
              />
              {[0, 1, 2, 3, 4, 5, 6, 7].map((dot) => (
                <motion.span
                  key={dot}
                  className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-wink-green"
                  animate={{
                    x: [Math.cos(dot) * 90, 0, Math.sin(dot) * 88],
                    y: [Math.sin(dot) * 80, 0, -Math.cos(dot) * 82],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.4]
                  }}
                  transition={{ duration: 1.1, delay: dot * 0.035 }}
                />
              ))}
              <motion.div
                className="absolute inset-0 rounded-full border border-blink-violet3/50"
                animate={{ scale: [0.4, 1.1], opacity: [0, 0.8, 0] }}
                transition={{ duration: 1.1, delay: 0.28 }}
              />
            </div>
          </motion.div>
        ) : null}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-wink-green">Burn WINK</p>
            <h3 className="mt-2 font-display text-3xl font-semibold text-white">{t.cardTitle}</h3>
          </div>
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-wink-green/[0.12] text-wink-green">
            <Flame size={22} aria-hidden="true" />
          </div>
        </div>
        <div className="mb-4 flex items-center justify-between text-sm">
          <span className="text-white/[0.52]">{t.balance}</span>
          <span className="font-semibold tabular-nums text-white">{balance.toLocaleString("en-US")} WINK</span>
        </div>
        <label className="mb-2 block text-sm font-medium text-white/[0.74]" htmlFor="burn-amount">
          {t.inputLabel}
        </label>
        <input
          id="burn-amount"
          type="number"
          min="0"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
          className="h-16 w-full rounded-2xl border border-white/10 bg-[#050816]/72 px-4 font-display text-2xl font-semibold tabular-nums text-white outline-none transition focus:border-wink-green/70 focus:ring-2 focus:ring-wink-green/30"
        />
        <div className="mt-3 grid grid-cols-4 gap-2">
          {[0.25, 0.5, 0.75, 1].map((percent) => (
            <button
              key={percent}
              type="button"
              onClick={() => setByPercent(percent)}
              className="h-10 cursor-pointer rounded-full border border-white/10 bg-white/[0.04] text-sm font-semibold text-white/[0.72] transition hover:border-wink-green/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wink-green"
            >
              {percent === 1 ? "MAX" : `${percent * 100}%`}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-3 text-sm">
          {[
            [t.thisBurn, `${amount.toLocaleString("en-US")} WINK`],
            [t.afterMyBurn, `${(myCurrentBurn + amount).toLocaleString("en-US")} WINK`],
            [t.globalBurn, `${globalBurn.toLocaleString("en-US")} WINK`],
            [t.estimatedBurnWeight, `${weight.toFixed(2)}%`],
            [t.rewardPool, `${rewardPool.toLocaleString("en-US")} BLINK`],
            [t.estimatedRewardWeight, `${weight.toFixed(2)}%`]
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between gap-4 rounded-2xl bg-white/[0.035] px-4 py-3">
              <span className="text-white/[0.52]">{label}</span>
              <span className="text-right font-semibold tabular-nums text-white">{value}</span>
            </div>
          ))}
        </div>
        <button
          type="button"
          disabled={burning || amount <= 0}
          onClick={() => setConfirmOpen(true)}
          className="mt-6 flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-wink-green font-bold text-ink-950 transition hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          {burning ? <Loader2 size={18} className="animate-spin" aria-hidden="true" /> : null}
          {t.submit}
        </button>
      </GlassCard>
      <ConfirmModal
        open={confirmOpen}
        title={t.modalTitle}
        confirmLabel={common.confirm}
        cancelLabel={common.cancel}
        closeLabel={common.close}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={confirmBurn}
      >
        <div className="space-y-3">
          <p className="flex justify-between gap-4">
            <span>{t.amount}</span>
            <strong className="text-white">{amount.toLocaleString("en-US")} WINK</strong>
          </p>
          <p className="flex justify-between gap-4">
            <span>{t.weight}</span>
            <strong className="text-wink-green">{weight.toFixed(2)}%</strong>
          </p>
          <p className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-3 text-amber-100">
            {t.warning}
          </p>
        </div>
      </ConfirmModal>
    </>
  );
}
