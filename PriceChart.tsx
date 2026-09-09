import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { copy, type Language } from "../config/i18n";
import type { ChartPoint } from "../data/protocolData";

const ranges = ["24H", "7D", "30D", "90D", "ALL"];

type PriceChartProps = {
  language: Language;
  data: ChartPoint[];
  activeRange: string;
  onRangeChange: (range: string) => void;
};

type TooltipPayload = {
  payload: ChartPoint;
};

function PriceTooltip({ active, payload, language }: { active?: boolean; payload?: TooltipPayload[]; language: Language }) {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;
  const ratio = point.marketPrice / point.floorPrice;
  const t = copy[language].reserve;

  return (
    <div className="rounded-2xl border border-white/10 bg-[#070b1d]/95 px-4 py-3 text-sm shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <p className="mb-2 font-semibold text-white">{point.date}</p>
      <p className="text-wink-green">{t.tooltipMarket} ${point.marketPrice.toFixed(6)}</p>
      <p className="text-blink-violet3">{t.tooltipFloor} ${point.floorPrice.toFixed(6)}</p>
      <p className="mt-1 text-white/70">{t.tooltipRatio} {ratio.toFixed(2)}x</p>
    </div>
  );
}

export function PriceChart({ language, data, activeRange, onRangeChange }: PriceChartProps) {
  const t = copy[language].reserve;

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-display text-xl font-semibold text-white">{t.priceChart}</p>
          <p className="mt-1 text-sm text-white/50">{t.priceChartSub}</p>
        </div>
        <div className="flex rounded-full border border-white/10 bg-white/[0.04] p-1">
          {ranges.map((range) => (
            <button
              key={range}
              type="button"
              onClick={() => onRangeChange(range)}
              className={`h-9 min-w-12 cursor-pointer rounded-full px-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wink-green ${
                activeRange === range ? "bg-wink-green text-ink-950" : "text-white/[0.55] hover:bg-white/10 hover:text-white"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 18, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <filter id="greenGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="violetGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <CartesianGrid stroke="rgba(255,255,255,0.07)" vertical={false} />
            <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 12 }} />
            <YAxis hide domain={["dataMin - 0.00005", "dataMax + 0.00005"]} />
            <Tooltip content={<PriceTooltip language={language} />} cursor={{ stroke: "rgba(183,255,0,0.3)", strokeWidth: 1 }} />
            <Line type="monotone" dataKey="marketPrice" stroke="#B7FF00" strokeWidth={3} dot={false} filter="url(#greenGlow)" />
            <Line type="monotone" dataKey="floorPrice" stroke="#7D72FF" strokeWidth={3} dot={false} filter="url(#violetGlow)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
