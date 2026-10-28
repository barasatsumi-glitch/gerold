import { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import "./ScrollVelocity.css";

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const updateWidth = () => setWidth(element.offsetWidth);
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);
    window.addEventListener("resize", updateWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, [ref]);

  return width;
}

function VelocityText({
  children,
  baseVelocity,
  scrollContainerRef,
  className,
  damping,
  stiffness,
  numCopies,
  velocityMapping,
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll(
    scrollContainerRef ? { container: scrollContainerRef } : undefined,
  );
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping, stiffness });
  const velocityFactor = useTransform(
    smoothVelocity,
    velocityMapping.input,
    velocityMapping.output,
    { clamp: false },
  );

  const copyRef = useRef(null);
  const copyWidth = useElementWidth(copyRef);
  const directionFactor = useRef(1);
  const x = useTransform(baseX, (value) => {
    if (copyWidth === 0) return "0px";
    const range = copyWidth;
    const wrapped = ((value % range) + range) % range;
    return `${wrapped - range}px`;
  });

  useAnimationFrame((_, delta) => {
    if (copyWidth === 0) return;

    const scrollFactor = velocityFactor.get();
    if (scrollFactor < 0) directionFactor.current = -1;
    else if (scrollFactor > 0) directionFactor.current = 1;

    const movement =
      directionFactor.current *
      baseVelocity *
      (delta / 1000) *
      (1 + scrollFactor);
    baseX.set(baseX.get() + movement);
  });

  return (
    <div className={parallaxClassName} style={parallaxStyle}>
      <motion.div className={scrollerClassName} style={{ x, ...scrollerStyle }}>
        {Array.from({ length: numCopies }, (_, index) => (
          <span
            className={className}
            key={index}
            ref={index === 0 ? copyRef : null}
            aria-hidden={index > 0 ? "true" : undefined}
          >
            {children}&nbsp;
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function ScrollVelocity({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName = "parallax",
  scrollerClassName = "scroller",
  parallaxStyle,
  scrollerStyle,
}) {
  return (
    <section className="scroll-velocity" aria-label="Scrolling text">
      {texts.map((text, index) => (
        <VelocityText
          key={`${text}-${index}`}
          className={className}
          baseVelocity={index % 2 === 0 ? velocity : -velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}
        </VelocityText>
      ))}
    </section>
  );
}

export default ScrollVelocity;
