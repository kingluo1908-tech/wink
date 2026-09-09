import { officialLinks } from "../config/links";
import { BlinkLogo } from "../components/BlinkLogo";
import { GlassCard } from "../components/GlassCard";
import { OfficialLinkCard } from "../components/OfficialLinkCard";
import { SectionHeader } from "../components/SectionHeader";
import { WinkLogo } from "../components/WinkLogo";
import { copy, type Language } from "../config/i18n";

type OfficialSectionProps = {
  language: Language;
};

export function OfficialSection({ language }: OfficialSectionProps) {
  const t = copy[language].official;

  return (
    <section id="official" className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
      <img
        src="/assets/visuals/official-network.png"
        alt="Wink official channels visual"
        loading="lazy"
        className="absolute inset-x-0 top-16 mx-auto w-full max-w-6xl opacity-[0.18] [mask-image:radial-gradient(circle_at_50%_36%,black_0%,transparent_70%)]"
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeader eyebrow="Official Links" title={t.title} subtitle={t.subtitle} />
        <GlassCard className="p-6 sm:p-8">
          <div className="mb-8 flex items-center justify-center gap-5">
            <WinkLogo size="md" />
            <span className="h-px w-24 bg-gradient-to-r from-wink-green via-white/50 to-blink-violet3 shadow-[0_0_20px_rgba(183,255,0,0.35)]" />
            <BlinkLogo size="md" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {Object.values(officialLinks).map((link) => (
              <OfficialLinkCard key={link.id} link={link} label={t.links[link.id as keyof typeof t.links]} language={language} />
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
