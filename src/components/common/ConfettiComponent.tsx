import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const ConfettiComponent: React.FC = () => {
  useEffect(() => {
    const duration = 2 * 1000; // 5초 동안 폭죽 효과
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 70,
        startVelocity: 55,
        origin: { x: 0, y: 0.3 },
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 70,
        startVelocity: 55,
        origin: { x: 1, y: 0.3 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return null;
};

export default ConfettiComponent;
