import { motion } from "framer-motion";
import { useState } from "react";

type WinkLogoProps = {
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  ariaLabel?: string;
  className?: string;
};

const sizeClass = {
  sm: "h-10 w-10",
  md: "h-16 w-16",
  lg: "h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80"
};

export function WinkLogo({ size = "md", interactive = false, ariaLabel = "Touch WINK Logo", className = "" }: WinkLogoProps) {
  const [wink, setWink] = useState(false);

  const triggerWink = () => {
    if (!interactive) return;
    setWink(false);
    window.setTimeout(() => setWink(true), 30);
    window.setTimeout(() => setWink(false), 760);
  };

  if (!interactive) {
    return (
      <span className={`relative block shrink-0 rounded-[32px] ${sizeClass[size]} ${className}`}>
        <img
          src="/assets/brand/wink-logo.jpg"
          alt="WINK Logo"
          className="h-full w-full rounded-[26%] object-cover shadow-[0_0_52px_rgba(183,255,0,0.14)]"
        />
      </span>
    );
  }

  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      onMouseEnter={triggerWink}
      onClick={triggerWink}
      onTouchStart={triggerWink}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative shrink-0 cursor-pointer overflow-visible rounded-[32px] outline-none focus-visible:ring-2 focus-visible:ring-wink-green/80 ${sizeClass[size]} ${className}`}
    >
      <img
        src="/assets/brand/wink-logo.jpg"
        alt=""
        aria-hidden="true"
        className="float-logo h-full w-full rounded-[26%] object-cover shadow-[0_0_80px_rgba(183,255,0,0.16)]"
      />
      {interactive ? (
        <>
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute left-[48%] top-[50%] h-[12%] w-[31%] origin-center rounded-full bg-[#091022] shadow-[0_0_18px_rgba(183,255,0,0.28)] blur-[0.2px]"
            animate={
              wink
                ? {
                    opacity: [0, 0.95, 0],
                    scaleY: [0.15, 1, 0.2],
                    y: [0, -4, 0],
                    filter: [
                      "drop-shadow(0 0 10px rgba(183,255,0,0.35))",
                      "drop-shadow(0 0 30px rgba(183,255,0,0.85))",
                      "drop-shadow(0 0 12px rgba(183,255,0,0.42))"
                    ]
                  }
                : { opacity: 0, scaleY: 0.2 }
            }
            transition={{ delay: 0.09, duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute left-[63%] top-[36%] h-[38%] w-[14%] rounded-full bg-wink-green/50 blur-md"
            animate={wink ? { opacity: [0, 0.75, 0], scale: [0.94, 1.08, 1] } : { opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.56 }}
          />
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute left-[74%] top-[21%] h-px w-44 origin-left rotate-[-25deg] rounded-full bg-gradient-to-r from-wink-green via-wink-green/80 to-transparent"
            animate={wink ? { opacity: [0, 1, 0], scaleX: [0, 1, 1.12], x: [0, 18, 38] } : { opacity: 0, scaleX: 0 }}
            transition={{ delay: 0.17, duration: 0.58, ease: "easeOut" }}
          />
          {[0, 1, 2, 3, 4].map((particle) => (
            <motion.span
              key={particle}
              aria-hidden="true"
              className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-wink-green shadow-[0_0_16px_rgba(183,255,0,0.9)]"
              style={{ left: `${72 + particle * 4}%`, top: `${23 - particle * 2}%` }}
              animate={
                wink
                  ? { opacity: [0, 1, 0], x: [0, 22 + particle * 8], y: [0, -12 - particle * 5], scale: [0.6, 1, 0.3] }
                  : { opacity: 0 }
              }
              transition={{ delay: 0.22 + particle * 0.035, duration: 0.52, ease: "easeOut" }}
            />
          ))}
        </>
      ) : null}
    </motion.button>
  );
}
