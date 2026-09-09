import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { WalletModal } from "./components/WalletModal";
import { WinkLogo } from "./components/WinkLogo";
import { copy, type Language } from "./config/i18n";
import { BurnSection } from "./sections/BurnSection";
import { HeroSection } from "./sections/HeroSection";
import { MechanismSection } from "./sections/MechanismSection";
import { OfficialSection } from "./sections/OfficialSection";
import { ReserveSection } from "./sections/ReserveSection";
import { RewardsSection } from "./sections/RewardsSection";
import { SwapSection } from "./sections/SwapSection";

const footerNav = [
  ["home", "#home"],
  ["reserve", "#reserve"],
  ["burn", "#burn"],
  ["swap", "#swap"],
  ["mechanism", "#mechanism"],
  ["rewards", "#rewards"],
  ["official", "#official"]
] as const;

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem("wink-language");
    return saved === "en" ? "en" : "zh";
  });
  const [walletOpen, setWalletOpen] = useState(false);
  const [, setLastBurnAmount] = useState(0);
  const t = copy[language];

  useEffect(() => {
    window.localStorage.setItem("wink-language", language);
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  return (
    <div className="min-h-dvh overflow-x-hidden bg-ink-950 text-white">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-wink-green focus:px-4 focus:py-3 focus:font-semibold focus:text-ink-950"
      >
        跳到主内容
      </a>
      <Navbar onWalletClick={() => setWalletOpen(true)} language={language} onLanguageChange={setLanguage} />
      <main>
        <HeroSection language={language} />
        <ReserveSection language={language} />
        <BurnSection language={language} onBurnComplete={setLastBurnAmount} />
        <SwapSection language={language} />
        <MechanismSection language={language} />
        <RewardsSection language={language} />
        <OfficialSection language={language} />
      </main>
      <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <WinkLogo size="sm" />
            <div>
              <p className="font-display text-lg font-semibold text-white">Wink</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.42]">{t.footer.stack}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {footerNav.map(([key, href]) => (
              <a key={href} href={href} className="text-sm text-white/[0.52] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wink-green">
                {t.nav[key]}
              </a>
            ))}
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-7xl text-sm leading-7 text-white/[0.42]">
          {t.footer.risk}
        </p>
      </footer>
      <WalletModal language={language} open={walletOpen} onClose={() => setWalletOpen(false)} />
    </div>
  );
}

export default App;
