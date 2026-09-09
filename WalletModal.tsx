import { AnimatePresence, motion } from "framer-motion";
import { Cable, Shield, Wallet, X } from "lucide-react";
import { copy, type Language } from "../config/i18n";

type WalletModalProps = {
  language: Language;
  open: boolean;
  onClose: () => void;
};

const wallets = [
  { label: "Injected Wallet", icon: Wallet },
  { label: "MetaMask", icon: Shield },
  { label: "WalletConnect", icon: Cable },
  { label: "Other Wallet", icon: Wallet }
];

export function WalletModal({ language, open, onClose }: WalletModalProps) {
  const t = copy[language].wallet;
  const common = copy[language].common;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink-950/72 px-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="wallet-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            className="w-full max-w-md rounded-[28px] border border-white/10 bg-[#080d23]/95 p-6 shadow-[0_32px_120px_rgba(0,0,0,0.45)]"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h3 id="wallet-modal-title" className="font-display text-2xl font-semibold text-white">
                  {t.title}
                </h3>
                <p className="mt-1 text-sm text-white/[0.52]">{t.subtitle}</p>
              </div>
              <button
                type="button"
                aria-label={t.close}
                onClick={onClose}
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wink-green"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <div className="grid gap-3">
              {wallets.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  className="flex h-14 cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-left font-semibold text-white transition hover:-translate-y-0.5 hover:border-wink-green/40 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wink-green"
                >
                  <Icon size={20} className="text-wink-green" aria-hidden="true" />
                  {label}
                  <span className="ml-auto text-xs font-medium text-white/[0.42]">{common.demo}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
