"use client";

import { motion } from "framer-motion";

const stars = [
  { left: "8%", top: "12%", size: 2, delay: 0 },
  { left: "18%", top: "35%", size: 1.5, delay: 1.2 },
  { left: "28%", top: "18%", size: 2, delay: 0.5 },
  { left: "39%", top: "42%", size: 1.5, delay: 1.8 },
  { left: "50%", top: "10%", size: 2, delay: 0.8 },
  { left: "61%", top: "30%", size: 1.5, delay: 2.2 },
  { left: "72%", top: "15%", size: 2, delay: 1.4 },
  { left: "84%", top: "40%", size: 1.5, delay: 0.3 },
  { left: "93%", top: "20%", size: 2, delay: 1.7 },

  { left: "12%", top: "58%", size: 1.5, delay: 2.5 },
  { left: "23%", top: "75%", size: 2, delay: 0.9 },
  { left: "35%", top: "62%", size: 1.5, delay: 1.6 },
  { left: "47%", top: "82%", size: 2, delay: 0.2 },
  { left: "58%", top: "55%", size: 1.5, delay: 2.1 },
  { left: "69%", top: "72%", size: 2, delay: 1.1 },
  { left: "81%", top: "60%", size: 1.5, delay: 2.7 },
  { left: "91%", top: "85%", size: 2, delay: 0.6 },

  { left: "5%", top: "90%", size: 1.5, delay: 1.9 },
  { left: "31%", top: "92%", size: 2, delay: 2.4 },
  { left: "64%", top: "94%", size: 1.5, delay: 0.7 },
  { left: "77%", top: "90%", size: 2, delay: 1.5 },
];

export default function StarBackground() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-10
        overflow-hidden
      "
      aria-hidden="true"
    >
      {stars.map((star, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-[#D4AF37]"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            boxShadow: "0 0 5px rgba(212, 175, 55, 0.45)",
          }}
          animate={{
            opacity: [0.15, 0.65, 0.15],
            scale: [0.8, 1.25, 0.8],
          }}
          transition={{
            duration: 3.5,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}