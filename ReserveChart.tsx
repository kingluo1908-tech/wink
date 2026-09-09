import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { ChartPoint } from "../data/protocolData";

type ReserveChartProps = {
  data: ChartPoint[];
};

function ReserveTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: ChartPoint }> }) {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;

  return (
    <div className="rounded-2xl border border-white/10 bg-[#070b1d]/95 px-4 py-3 text-sm shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <p className="mb-1 font-semibold text-white">{point.date}</p>
      <p className="text-blink-violet3">{point.reserve.toLocaleString("en-US")} BLINK</p>
    </div>
  );
}

export function ReserveChart({ data }: ReserveChartProps) {
  return (
    <div className="h-52 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="reserveFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7D72FF" stopOpacity={0.4} />
              <stop offset="80%" stopColor="#B7FF00" stopOpacity={0.03} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
          <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fill: "rgba(255,255,255,0.42)", fontSize: 11 }} />
          <YAxis hide domain={["dataMin - 500000", "dataMax + 500000"]} />
          <Tooltip content={<ReserveTooltip />} cursor={{ stroke: "rgba(125,114,255,0.35)" }} />
          <Area type="monotone" dataKey="reserve" stroke="#7D72FF" strokeWidth={3} fill="url(#reserveFill)" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
