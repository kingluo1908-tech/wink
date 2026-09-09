import { motion } from "framer-motion";
import { copy, type Language } from "../config/i18n";
import { type BurnAddressRow } from "../data/protocolData";

type RewardsTableProps = {
  language: Language;
  rows: BurnAddressRow[];
};

export function RewardsTable({ language, rows }: RewardsTableProps) {
  const t = copy[language].rewards;

  return (
    <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04]">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-wink-green shadow-[0_0_18px_rgba(183,255,0,0.9)]" />
        <span className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white">{t.tableTitle}</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="text-white/[0.42]">
            <tr>
              {t.headers.map((head) => (
                <th key={head} className="px-5 py-4 font-medium">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.slice(0, 10).map((row) => (
              <motion.tr
                key={row.id}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-t border-white/[0.06] text-white/[0.74]"
              >
                <td className="px-5 py-4 font-display text-lg font-semibold tabular-nums text-wink-green">#{row.rank}</td>
                <td className="px-5 py-4 font-semibold text-white">{row.address}</td>
                <td className="px-5 py-4 tabular-nums">{row.burnedAmount}</td>
                <td className="px-5 py-4 tabular-nums text-wink-green">{row.burnWeight}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
