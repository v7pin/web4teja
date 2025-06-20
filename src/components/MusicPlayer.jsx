// src/components/MusicPlayer.jsx
import React, { useState, useEffect } from "react";
import ReactHowler from "react-howler";
import song1 from "../assets/music/1.mp3";
import song2 from "../assets/music/2.mp3";
import song3 from "../assets/music/3.mp3";
import song4 from "../assets/music/4.mp3"; // Add more songs as needed
import song5 from "../assets/music/5.mp3"; // Add more songs as needed
import "../styles/MusicPlayer.css"; // Ensure you have this CSS file for styles

const songs = [
  {
    name: "Maine pucha chaand se 💘",
    url: song3,
  },
  {
    name: "I'll be there for you 🌍",
    url: song2,
  },
  {
    name: "You are perfect 💞",
    url: song1,
  },
  {
    name: "Tum se hi ❤️",
    url: song4,
  },
  {
    name: "Rangrezzzzzz💖",
    url: song5,
  },
];

export default function MusicPlayer() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showHearts, setShowHearts] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
    setShowHearts((prev) => !prev);
  };

  const changeSong = (i) => {
    setCurrentSongIndex(i);
    setIsPlaying(true);
    setShowHearts(true);
  };

  // Auto next song when current ends
  const handleEnd = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      {/* Floating Hearts */}
      {showHearts && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="animate-bubble text-pink-400 text-2xl">💖</div>
          <div className="animate-bubble-slow text-rose-400 text-xl absolute left-4">
            💗
          </div>
          <div className="animate-bubble-fast text-pink-300 text-sm absolute right-4">
            💕
          </div>
        </div>
      )}

      {/* Music Controller */}
      <div className="bg-white bg-opacity-80 px-4 py-2 rounded-full shadow-lg flex items-center gap-3 border border-pink-300 backdrop-blur-md">
        <ReactHowler
          src={songs[currentSongIndex].url}
          playing={isPlaying}
          onEnd={handleEnd}
          volume={0.5}
        />

        <span className="text-pink-600 font-cursive text-sm">
          {songs[currentSongIndex].name}
        </span>

        <button
          onClick={togglePlay}
          className="text-xl text-pink-500 hover:scale-110 transition-transform"
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>

        <select
          onChange={(e) => changeSong(Number(e.target.value))}
          value={currentSongIndex}
          className="text-sm bg-pink-100 text-pink-700 rounded-full px-2 py-1 focus:outline-none"
        >
          {songs.map((s, i) => (
            <option key={i} value={i}>
              {s.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
