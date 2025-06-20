// src/components/Opener.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import heartAnimation from "../assets/heart.json";

export default function Opener({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, 4000); // 4 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-pink-100 z-50 flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Player
            autoplay
            loop
            src={heartAnimation}
            style={{ height: "120px", width: "120px" }}
          />
          <motion.h1
            className="text-3xl md:text-4xl text-pink-700 font-cursive mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Made with love for Tejaswini 💌
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
