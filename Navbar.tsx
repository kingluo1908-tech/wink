import { Menu, Wallet, X } from "lucide-react";
import { useEffect, useState } from "react";
import { copy, languageLabels, type Language } from "../config/i18n";
import { WinkLogo } from "./WinkLogo";

type NavbarProps = {
  onWalletClick: () => void;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

const navItems = [
  { key: "home", href: "#home", id: "home" },
  { key: "reserve", href: "#reserve", id: "reserve" },
  { key: "burn", href: "#burn", id: "burn" },
  { key: "swap", href: "#swap", id: "swap" },
  { key: "mechanism", href: "#mechanism", id: "mechanism" },
  { key: "rewards", href: "#rewards", id: "rewards" },
  { key: "official", href: "#official", id: "official" }
] as const;

const languageOptions: Language[] = ["zh", "en"];

export function Navbar({ onWalletClick, language, onLanguageChange }: NavbarProps) {
  const t = copy[language];
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      for (let index = navItems.length - 1; index >= 0; index -= 1) {
        const section = document.getElementById(navItems[index].id);
        if (section && section.offsetTop - 160 <= window.scrollY) {
          setActive(section.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languageToggle = (
    <div
      className="flex h-11 shrink-0 rounded-full border border-white/10 bg-white/[0.04] p-1"
      role="group"
      aria-label={t.common.languageLabel}
    >
      {languageOptions.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onLanguageChange(option)}
          aria-pressed={language === option}
          className={`min-w-12 cursor-pointer rounded-full px-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wink-green ${
            language === option ? "bg-wink-green text-ink-950" : "text-white/[0.58] hover:bg-white/10 hover:text-white"
          }`}
        >
          {languageLabels[option]}
        </button>
      ))}
    </div>
  );

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "bg-[#050816]/78 shadow-[0_12px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl" : "bg-transparent"}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wink-green">
          <WinkLogo size="sm" />
          <span className="font-display text-lg font-semibold text-white">Wink</span>
        </a>
        <div className="hidden items-center rounded-full border border-white/10 bg-white/[0.035] px-2 py-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wink-green ${
                active === item.id ? "text-white" : "text-white/[0.58]"
              }`}
            >
              {t.nav[item.key]}
              {active === item.id ? <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-wink-green" /> : null}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">{languageToggle}</div>
          <button
            type="button"
            onClick={onWalletClick}
            className="hidden h-11 cursor-pointer items-center gap-2 rounded-full bg-wink-green px-5 font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:flex"
          >
            <Wallet size={18} aria-hidden="true" />
            {t.common.connectWallet}
          </button>
          <button
            type="button"
            aria-label={open ? t.common.closeNavigation : t.common.openNavigation}
            aria-expanded={open}
            onClick={() => setOpen((next) => !next)}
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wink-green lg:hidden"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-[#050816]/95 px-4 pb-5 backdrop-blur-2xl lg:hidden">
          <div className="grid gap-1 pt-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-base font-semibold ${active === item.id ? "bg-white/[0.08] text-wink-green" : "text-white/70"}`}
              >
                {t.nav[item.key]}
              </a>
            ))}
            <div className="mt-2 sm:hidden">{languageToggle}</div>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onWalletClick();
              }}
              className="mt-2 flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-wink-green font-semibold text-ink-950"
            >
              <Wallet size={18} aria-hidden="true" />
              {t.common.connectWallet}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
