"use client";

import { useCallback, useEffect, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

export function ConfettiEffect({ active }: { active: boolean }) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (active) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [active]);

  const getInstance = useCallback(
    (instance: any) => {
      if (instance && isAnimating) {
        const defaults = {
          spread: 360,
          ticks: 100,
          gravity: 0,
          decay: 0.94,
          startVelocity: 30,
          colors: ["#FF5E5B", "#00CECB", "#FFED66", "#D8D8D8"],
        };

        function randomInRange(min: number, max: number) {
          return Math.random() * (max - min) + min;
        }

        function shoot() {
          instance({
            ...defaults,
            particleCount: 40,
            scalar: 1.2,
            shapes: ["circle", "square"],
          });

          instance({
            ...defaults,
            particleCount: 25,
            scalar: 0.75,
            shapes: ["square"],
          });
        }

        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);
      }
    },
    [isAnimating]
  );

  return (
    <ReactCanvasConfetti
      refConfetti={getInstance}
      style={{
        position: "fixed",
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 100,
      }}
    />
  );
}
