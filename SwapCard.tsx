import { ArrowDownUp } from "lucide-react";
import { useMemo, useState } from "react";
import { copy, type Language } from "../config/i18n";
import { ConfirmModal } from "./ConfirmModal";
import { GlassCard } from "./GlassCard";

type Asset = "BLINK" | "WINK";

const balances: Record<Asset, number> = {
  BLINK: 24880,
  WINK: 12580000
};

type SwapCardProps = {
  language: Language;
};

export function SwapCard({ language }: SwapCardProps) {
  const t = copy[language].swap;
  const common = copy[language].common;
  const [payAsset, setPayAsset] = useState<Asset>("BLINK");
  const [amount, setAmount] = useState(2500);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const receiveAsset: Asset = payAsset === "BLINK" ? "WINK" : "BLINK";

  const quote = useMemo(() => {
    const rate = payAsset === "BLINK" ? 92.4 : 0.0101;
    return amount * rate;
  }, [amount, payAsset]);

  const switchDirection = () => setPayAsset((asset) => (asset === "BLINK" ? "WINK" : "BLINK"));

  return (
    <>
      <GlassCard glow="violet" className="relative overflow-hidden p-5 sm:p-7">
        <div className="absolute inset-x-10 top-24 h-px bg-gradient-to-r from-wink-green/0 via-wink-green/70 to-blink-violet3/0" />
        <div className="mb-7 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blink-violet3">Swap</p>
          <h3 className="mt-2 font-display text-3xl font-semibold text-white">{t.title}</h3>
        </div>
        <div className="rounded-[22px] border border-white/10 bg-[#050816]/70 p-4">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-white/[0.52]">{t.payAsset}</span>
            <span className="text-white/[0.52]">{t.balance} {balances[payAsset].toLocaleString("en-US")}</span>
          </div>
          <div className="flex items-center gap-3">
            <input
              aria-label={t.payAmount}
              type="number"
              min="0"
              value={amount}
              onChange={(event) => setAmount(Number(event.target.value))}
              className="min-w-0 flex-1 bg-transparent font-display text-3xl font-semibold tabular-nums text-white outline-none"
            />
            <div className={`rounded-full px-4 py-2 font-bold ${payAsset === "BLINK" ? "bg-blink-violet2 text-white" : "bg-wink-green text-ink-950"}`}>
              {payAsset}
            </div>
          </div>
        </div>
        <div className="my-4 flex justify-center">
          <button
            type="button"
            aria-label={t.switchDirection}
            onClick={switchDirection}
            className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:-translate-y-0.5 hover:border-wink-green/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wink-green"
          >
            <ArrowDownUp size={20} aria-hidden="true" />
          </button>
        </div>
        <div className="rounded-[22px] border border-white/10 bg-[#050816]/70 p-4">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-white/[0.52]">{t.receiveAsset}</span>
            <span className="text-white/[0.52]">{t.estimatedReceive}</span>
          </div>
          <div className="flex items-center gap-3">
            <p className="min-w-0 flex-1 font-display text-3xl font-semibold tabular-nums text-white">
              {quote.toLocaleString("en-US", { maximumFractionDigits: receiveAsset === "WINK" ? 0 : 2 })}
            </p>
            <div className={`rounded-full px-4 py-2 font-bold ${receiveAsset === "BLINK" ? "bg-blink-violet2 text-white" : "bg-wink-green text-ink-950"}`}>
              {receiveAsset}
            </div>
          </div>
        </div>
        <div className="mt-5 grid gap-3 text-sm">
          {[
            [t.currentPrice, payAsset === "BLINK" ? "1 BLINK = 92.4 WINK" : "1 WINK = 0.0101 BLINK"],
            [t.priceImpact, "0.18%"],
            [t.minimumReceived, `${(quote * 0.994).toLocaleString("en-US", { maximumFractionDigits: 2 })} ${receiveAsset}`],
            [t.fee, "3% protocol flow"]
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between gap-4 text-white/[0.58]">
              <span>{label}</span>
              <span className="text-right font-semibold tabular-nums text-white">{value}</span>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setConfirmOpen(true)}
          className="mt-7 h-14 w-full cursor-pointer rounded-full bg-blink-violet2 font-bold text-white transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          {t.submit}
        </button>
      </GlassCard>
      <ConfirmModal
        open={confirmOpen}
        title={t.modalTitle}
        confirmLabel={common.confirm}
        cancelLabel={common.cancel}
        closeLabel={common.close}
        tone="violet"
        onCancel={() => setConfirmOpen(false)}
        onConfirm={() => {
          // TODO: replace mock interaction with real contract call
          setConfirmOpen(false);
        }}
      >
        <p>
          {t.modalBody}
        </p>
      </ConfirmModal>
    </>
  );
}
