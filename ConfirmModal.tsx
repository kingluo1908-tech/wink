import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { type ReactNode } from "react";

type ConfirmModalProps = {
  open: boolean;
  title: string;
  children: ReactNode;
  confirmLabel: string;
  cancelLabel?: string;
  closeLabel?: string;
  tone?: "green" | "violet";
  onCancel: () => void;
  onConfirm: () => void;
};

export function ConfirmModal({
  open,
  title,
  children,
  confirmLabel,
  cancelLabel = "Cancel",
  closeLabel = "Close",
  tone = "green",
  onCancel,
  onConfirm
}: ConfirmModalProps) {
  const accent = tone === "green" ? "bg-wink-green text-ink-950" : "bg-blink-violet2 text-white";

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
          aria-labelledby="confirm-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.22 }}
            className="w-full max-w-md rounded-[28px] border border-white/10 bg-[#080d23]/95 p-6 shadow-[0_32px_120px_rgba(0,0,0,0.45)]"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 id="confirm-modal-title" className="font-display text-2xl font-semibold text-white">
                {title}
              </h3>
              <button
                type="button"
                aria-label={closeLabel}
                onClick={onCancel}
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wink-green"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <div className="text-sm leading-7 text-white/70">{children}</div>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={onCancel}
                className="h-12 cursor-pointer rounded-full border border-white/10 bg-white/[0.04] font-semibold text-white transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {cancelLabel}
              </button>
              <button
                type="button"
                onClick={onConfirm}
                className={`h-12 cursor-pointer rounded-full font-semibold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${accent}`}
              >
                {confirmLabel}
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
