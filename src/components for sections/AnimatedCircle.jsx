import { useState } from "react";
import "./AnimatedCircle.css";

const AnimatedCircle = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="animated-circle">
      {/* Purple Circle */}
      <div className={`animated-sphere ${isPlaying ? "playing" : ""}`}>
        {/* Purple Glow */}
        <div className="glow glow-one"></div>

        {/* White/Purple Glow */}
        <div className="glow glow-two"></div>

        {/* Blue-violet glow */}
        <div className="glow glow-three"></div>

        {/* Top Highlight */}
        <div className="highlight"></div>
      </div>

      {/* Play / Pause Button */}
      <button
        type="button"
        className="play-button"
        onClick={() => setIsPlaying(!isPlaying)}
        aria-label={isPlaying ? "Pause orb animation" : "Play orb animation"}
        aria-pressed={isPlaying}
      >
        <span
          aria-hidden="true"
          className={`play-glyph ${isPlaying ? "pause-glyph" : ""}`}
        />
      </button>
    </div>
  );
};

export default AnimatedCircle;
