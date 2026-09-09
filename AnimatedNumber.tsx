import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type AnimatedNumberProps = {
  value: number;
  formatter?: (value: number) => string;
  duration?: number;
  className?: string;
};

export function AnimatedNumber({
  value,
  formatter = (next) => Math.round(next).toLocaleString("en-US"),
  duration = 720,
  className = ""
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    let animationFrame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [duration, isInView, value]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {formatter(display)}
    </span>
  );
}
