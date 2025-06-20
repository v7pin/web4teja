// src/components/SurpriseReveal.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import first from "../assets/first.jpg"; // Ensure this image is in the public/images folder
import voice from "../assets/audio.mp3";

export default function SurpriseReveal() {
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <div className="text-center py-10 px-4 bg-pink-50 rounded-2xl shadow-md mt-12 max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-cursive text-pink-700 mb-6">
        I have something for you... 💖
      </h2>

      <motion.button
        onClick={() => setShowSurprise(!showSurprise)}
        className="bg-gradient-to-r from-pink-400 to-red-400 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-all"
        whileTap={{ scale: 0.95 }}
      >
        {showSurprise
          ? "Hide the Surprise 🙈"
          : "Click to Reveal a Surprise 💌"}
      </motion.button>

      <AnimatePresence>
        {showSurprise && (
          <motion.div
            key="surprise-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="mt-8 space-y-6"
          >
            {/* Surprise Image */}
            <motion.img
              src={first} // Put your image in public/images/
              alt="A special memory"
              className="mx-auto rounded-xl shadow-lg w-full max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            />

            {/* Voice Note */}
            <motion.audio
              controls
              className="mx-auto mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <source src={voice} type="audio/mpeg" />
              Your browser does not support the audio element.
            </motion.audio>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
