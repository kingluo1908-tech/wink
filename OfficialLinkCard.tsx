import { Copy, ExternalLink } from "lucide-react";
import { copy, type Language } from "../config/i18n";
import type { OfficialLink } from "../config/links";

type OfficialLinkCardProps = {
  link: OfficialLink;
  label: string;
  language: Language;
};

export function OfficialLinkCard({ link, label, language }: OfficialLinkCardProps) {
  const t = copy[language].common;
  const Icon = link.id === "contract" ? Copy : ExternalLink;

  return (
    <a
      href={link.href ?? undefined}
      aria-disabled={!link.href}
      onClick={(event) => {
        if (!link.href) event.preventDefault();
      }}
      className="group flex min-h-20 items-center gap-4 rounded-[20px] border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-0.5 hover:border-wink-green/[0.35] hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wink-green"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/[0.06] text-wink-green transition group-hover:text-white">
        <Icon size={19} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block font-semibold text-white">{label}</span>
        <span className="mt-1 block text-sm text-white/[0.48]">{link.href ? t.openOfficial : t.soon}</span>
      </span>
    </a>
  );
}
