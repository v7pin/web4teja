import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { memoryCaptions } from "../data/memoryCaptions.js";

// Import all images dynamically
const memoryImages = import.meta.glob("../assets/memories/*.{jpg,png,jpeg}", {
  eager: true,
  import: "default",
});

const memoryList = Object.entries(memoryImages)
  .sort(([a], [b]) => {
    const getNumber = (str) =>
      parseInt(str.match(/(\d+)\.(jpg|png|jpeg)$/)?.[1] || 0, 10);
    return getNumber(a) - getNumber(b);
  })
  .map(([path, image], index) => ({
    image,
    ...(memoryCaptions[index] || {
      title: `Memory ${index + 1}`,
      message: "A beautiful memory together 💖",
    }),
  }));

export default function PhotoCarousel() {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % memoryList.length);
  const prev = () =>
    setIndex((prev - 1 + memoryList.length) % memoryList.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  });

  return (
    <div className="w-full max-w-md mx-auto mt-16 px-4" {...handlers}>
      <h2 className="text-3xl text-center font-cursive text-pink-700 mb-6">
        Our Memories 📸
      </h2>

      {/* Image container */}
      <div
        className="relative overflow-hidden rounded-3xl shadow-xl border-4 border-pink-200 bg-white cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={memoryList[index].image}
            alt={memoryList[index].title}
            className="w-full h-72 object-cover rounded-3xl"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(100% at 50% 50%)" }}
            exit={{ clipPath: "circle(0% at 50% 50%)" }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        {/* Heart mask-like caption bar */}
        <motion.div
          className="absolute bottom-0 w-full bg-pink-100 bg-opacity-95 py-3 text-center text-pink-800 font-semibold text-lg rounded-b-3xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {memoryList[index].title}
        </motion.div>
      </div>

      {/* Message under image */}
      <motion.p
        className="mt-4 text-center text-pink-700 text-md italic font-cursive"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        "{memoryList[index].message}"
      </motion.p>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {memoryList.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === index ? "bg-pink-500 scale-125" : "bg-pink-300"
            }`}
          />
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="relative max-w-3xl w-full p-6">
            <img
              src={memoryList[index].image}
              alt="Full memory"
              className="w-full h-auto rounded-2xl border-4 border-pink-300 shadow-2xl"
            />
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 bg-white rounded-full text-pink-500 hover:bg-pink-100 px-3 py-1 shadow-lg"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
