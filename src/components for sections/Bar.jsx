import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

function Bar({ percentage = 99 }) {
  const barRef = useRef(null);
  const isInView = useInView(barRef, { once: true, amount: 0.5 });
  const progress = useMotionValue(0);
  const roundedProgress = useTransform(progress, (latest) =>
    Math.round(latest),
  );
  const [percentText, setPercentText] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const unsubscribe = roundedProgress.on("change", (latest) => {
      setPercentText(latest);
    });
    const controls = animate(progress, percentage, {
      duration: 2.5,
      ease: "easeOut",
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [isInView, percentage, progress, roundedProgress]);

  return (
    <div ref={barRef} style={containerStyle}>
      <div style={textContainerStyle}>
        <span>{percentText}%</span>
      </div>

      <div style={trackStyle}>
        <motion.div
          style={{
            ...barStyle,
            width: `${percentText}%`,
          }}
        />
      </div>
    </div>
  );
}

const containerStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  fontFamily: "sans-serif",
};

const textContainerStyle = {
  display: "flex",
  justifyContent: "flex-end",
  color: "#fff",
  fontSize: "10px",
  letterSpacing: "1px",
};

const trackStyle = {
  width: "100%",
  height: "2px",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  position: "relative",
};

const barStyle = {
  height: "100%",
  backgroundColor: "#FFFFFF",
};

export default Bar;
