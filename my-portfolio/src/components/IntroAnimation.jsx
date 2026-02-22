import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroAnimation({ onFinish }) {

  const greetings = [
    "Hello",
    "नमस्ते",
    "Nomoskar",
    "Bonjour",
    "Hola",
    "As-salamu alaykum"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 900);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => {
        onFinish();
      }, 1400);
      return () => clearTimeout(finishTimer);
    }
  }, [index, onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wide text-white"
          style={{
            textShadow: `
              0 0 6px rgba(255,255,255,0.4),
              0 0 12px rgba(255,255,255,0.2)
            `
          }}
        >
          {greetings[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}