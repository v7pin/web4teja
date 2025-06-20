// src/components/LoveMeter.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function LoveMeter() {
  const [value, setValue] = useState(100);

  return (
    <div className="bg-pink-50 py-10 px-6 rounded-2xl shadow-lg mt-12 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-cursive text-pink-700 mb-6">
        My Love Meter for You 💖
      </h2>

      {/* Heart Progress Visual */}
      <div className="flex justify-center items-center gap-1 mb-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: i < value / 10 ? 1 : 0.4 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <FaHeart
              className={`text-2xl ${
                i < value / 10 ? "text-pink-500" : "text-gray-300"
              }`}
            />
          </motion.div>
        ))}
      </div>

      {/* Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-64 accent-pink-500 cursor-pointer"
      />

      {/* Message */}
      <motion.p
        className="mt-6 text-lg md:text-xl text-gray-700 font-light leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {value}% sorry. 1000% love. Forever yours 💌
      </motion.p>
    </div>
  );
}
