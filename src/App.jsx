import { useState } from "react";
import "./App.css";

import Opener from "./components/Opener";
import ApologyNote from "./components/ApologyNote";
import LoveMeter from "./components/LoveMeter";
import MusicPlayer from "./components/MusicPlayer";
import PhotoCarousel from "./components/PhotoCarousel";
import SurpriseReveal from "./components/SupriseReveal";
import ImageTogether from "./components/ImageTogether";
import HomePage from "./components/Homepage";

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      {!showMain && <Opener onFinish={() => setShowMain(true)} />}

      {showMain && (
        <>
          <HomePage></HomePage>
          <PhotoCarousel />
          <ApologyNote />
          <SurpriseReveal />
          {/* <LoveMeter /> */}
          <ImageTogether></ImageTogether>
          <MusicPlayer />
        </>
      )}
    </>
  );
}

export default App;
