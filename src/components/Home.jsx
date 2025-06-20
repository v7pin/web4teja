import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import heartAnimation from "../assets/heart.json";
import couplePhoto from "../assets/winipin.png"; // Replace with your photo

export default function Home() {
  const [showMerged, setShowMerged] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMerged(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-rose-100 via-pink-100 to-orange-100 flex flex-col items-center justify-center overflow-hidden px-4 py-10 font-sans">
      {/* Floating hearts */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 20}px`,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -100, opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 5 + 5,
            delay: Math.random() * 3,
          }}
        >
          💖
        </motion.div>
      ))}

      {/* Realistic Polaroid-style Frame */}
      <motion.div
        className="relative w-[280px] bg-white shadow-xl border border-gray-300 rounded-sm p-2 pt-2 pb-10 z-10"
        initial={{ rotate: -4, scale: 0.9, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          src={couplePhoto}
          alt="Us"
          className="w-full h-[300px] object-cover rounded-sm"
        />
      </motion.div>

      {/* Heart animation */}
      <Player
        autoplay
        loop
        src={heartAnimation}
        style={{ height: "120px", width: "120px", marginTop: "2rem" }}
      />

      {/* Name Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-cursive text-rose-700 mt-4 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Tejaswini 💕 Vipin
      </motion.h1>

      {/* Dynamic Name Section */}
      <div className="mt-10 z-10">
        <p className="text-lg md:text-xl text-gray-700 font-light mb-3">
          Together we are...
        </p>

        <AnimatePresence mode="wait">
          {!showMerged ? (
            <motion.div
              key="individual"
              className="flex gap-4 items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="text-5xl md:text-6xl font-cursive text-pink-500 drop-shadow"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                Wini
              </motion.span>
              <span className="text-4xl md:text-5xl text-gray-500">+</span>
              <motion.span
                className="text-5xl md:text-6xl font-cursive text-pink-500 drop-shadow"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                Pin
              </motion.span>
            </motion.div>
          ) : (
            <motion.h2
              key="merged"
              className="text-6xl md:text-7xl font-cursive mt-6 bg-gradient-to-r from-pink-400 via-red-400 to-pink-500 bg-clip-text text-transparent drop-shadow"
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Winipin 💖
            </motion.h2>
          )}
        </AnimatePresence>
      </div>

      {/* Romantic Letter Card */}
      <motion.div
        className="mt-12 max-w-xl text-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-rose-200 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.5 }}
      >
        <p className="text-md md:text-lg text-gray-700 leading-relaxed font-light">
          A little fight, a little silence... but lots and lots of love between
          us. 💗
          <br />
          I'm truly sorry Teja.. Wapas smile laa de chehre pr.
        </p>
        <p className="mt-4 text-right font-cursive text-pink-600 text-lg">
          — Yours, Vipin 💌
        </p>
      </motion.div>
    </div>
  );
}
