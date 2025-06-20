// src/components/ApologyNote.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ApologyNote() {
  const phrases = [
    "Hey love... I know I hurt you.",
    "I never meant to make you feel that way.",
    "You're the most special person in my life.",
    "I'm truly sorry from the bottom of my heart.",
    "Mai kabhi tere sath aise nahi karunga.",
    "I promise to be better for you.",
    "Please forgive me, Tejaa 💖",
  ];

  const [typedText, setTypedText] = useState("");
  const [fullText, setFullText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < phrases.length) {
      if (charIndex < phrases[lineIndex].length) {
        const timeout = setTimeout(() => {
          setTypedText((prev) => prev + phrases[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Line done, move to next after a short delay
        const timeout = setTimeout(() => {
          setTypedText((prev) => prev + "\n");
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 800);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="w-full bg-gradient-to-br from-rose-100 via-pink-100 to-orange-100 py-20 px-4">
      <motion.div
        className="max-w-3xl mx-auto text-center bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl md:text-3xl text-pink-700 font-semibold mb-6 font-cursive">
          My Apology 💌
        </h2>

        <pre className="whitespace-pre-wrap text-lg md:text-xl text-gray-700 font-light leading-relaxed min-h-[240px]">
          {typedText}| {/* blinking cursor */}
        </pre>
      </motion.div>
    </div>
  );
}
