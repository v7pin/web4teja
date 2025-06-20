// src/components/ImageTogether.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import chandler from "../assets/chandler.png"; // Left image
import monica from "../assets/monica.png"; // Right image
import heartTop from "../assets/ill.png"; // Add a small heart/title image

export default function ImageTogether() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  // Animate X movement
  const leftImageX = useTransform(scrollYProgress, [0, 1], ["-80%", "0%"]);
  const rightImageX = useTransform(scrollYProgress, [0, 1], ["80%", "0%"]);

  return (
    <div
      ref={ref}
      className="min-h-screen bg-pink-50 flex flex-col items-center justify-center px-4 py-20"
    >
      {/* Top static image (heading) */}
      <img
        src={heartTop}
        alt="Together Forever"
        className="w-64 md:w-64 mb-10 drop-shadow-md"
      />

      {/* Images that come close together */}
      <div className="relative w-full max-w-5xl flex items-center justify-center gap-5">
        {/* Left image */}
        <motion.img
          src={chandler}
          alt="Vipin"
          style={{ x: leftImageX }}
          className="w-46 h-48 md:w-72 md:h-96 object-fit"
        />

        {/* Right image */}
        <motion.img
          src={monica}
          alt="Tejaswini"
          style={{ x: rightImageX }}
          className="w-42 h-40 md:w-72 md:h-96 object-fit"
        />
      </div>

      {/* Bottom text */}
      <h1 className="text-xl md:text-xl text-pink-700 font-cursive mt-24">
        Website's design not good so as my life without you,
      </h1>
      <h6 className="text-xs md:text-xs text-pink-700 font-cursive mt-2">
        Bohot try kiya but still design thik nahi ho paya, :(
      </h6>
    </div>
  );
}
