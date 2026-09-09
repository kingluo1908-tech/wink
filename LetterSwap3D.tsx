import { motion, useAnimationControls, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type LetterSwap3DProps = {
  text: string;
  className?: string;
  staggerInterval?: number;
  duration?: number;
  flipDirection?: "top" | "bottom";
  blur?: boolean;
  blurAmount?: number;
};

export function LetterSwap3D({
  text,
  className = "",
  staggerInterval = 0.06,
  duration = 0.68,
  flipDirection = "top",
  blur = true,
  blurAmount = 4
}: LetterSwap3DProps) {
  const rootRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(rootRef, { once: true, amount: 0.35 });
  const shouldReduceMotion = useReducedMotion();
  const controls = useAnimationControls();
  const [hoverRun, setHoverRun] = useState(0);
  const letters = useMemo(() => Array.from(text), [text]);
  const enterRotation = flipDirection === "top" ? -92 : 92;
  const exitRotation = flipDirection === "top" ? 92 : -92;

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      return;
    }

    controls.start("visible");
  }, [controls, isInView, shouldReduceMotion]);

  return (
    <h1
      ref={rootRef}
      className={`letter-swap-3d ${className}`}
      aria-label={text}
      onMouseEnter={() => setHoverRun((run) => run + 1)}
      onFocus={() => setHoverRun((run) => run + 1)}
      tabIndex={0}
    >
      {letters.map((letter, index) => {
        const delay = index * staggerInterval;
        const animatedFace = (
          <motion.span
            key={`${hoverRun}-${letter}-${index}`}
            aria-hidden="true"
            data-letter={letter}
            className="letter-swap-3d__face letter-swap-3d__face--back"
            initial={
              shouldReduceMotion
                ? false
                : { rotateX: enterRotation, opacity: 0, filter: blur ? `blur(${blurAmount}px)` : "blur(0px)" }
            }
            animate={
              shouldReduceMotion
                ? false
                : {
                    rotateX: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { delay, duration, ease: [0.16, 1, 0.3, 1] }
                  }
            }
          />
        );

        return (
          <span key={`${letter}-${index}`} className="letter-swap-3d__cell" aria-hidden="true">
            <motion.span
              className="letter-swap-3d__face letter-swap-3d__face--front"
              variants={{
                hidden: { rotateX: 0, opacity: 1 },
                visible: {
                  rotateX: exitRotation,
                  opacity: 0,
                  transition: { delay, duration, ease: [0.16, 1, 0.3, 1] }
                }
              }}
              initial={shouldReduceMotion ? "visible" : "hidden"}
              animate={controls}
            >
              {letter}
            </motion.span>
            {animatedFace}
          </span>
        );
      })}
    </h1>
  );
}
