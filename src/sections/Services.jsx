import { useEffect, useRef, useState } from "react";
import Circle from "../components for sections/Circle";
import heroPointer from "../assets/hero-9-pointer.svg.png";
import geroldTag from "../assets/Link.png";
import portrait from "../assets/hero.png";
import calloutImage from "../assets/Background+Border+OverlayBlur.png";
import linkArrow from "../assets/Linkarrow.png";
import "./Services.css";

const Services = () => {
  const [experienceYears, setExperienceYears] = useState(0);
  const experienceRef = useRef(null);

  useEffect(() => {
    const element = experienceRef.current;
    if (!element) return;

    let frameId;
    let started = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      observer.disconnect();

      const duration = 420;
      let startTime;
      const countUp = (timestamp) => {
        if (startTime === undefined) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setExperienceYears(Math.min(Math.floor(progress * 12), 12));
        if (progress < 1) frameId = requestAnimationFrame(countUp);
      };
      frameId = requestAnimationFrame(countUp);
    }, { threshold: 0.35 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
  <div className="services-page">
    <div className="services-banner">
      <h1 className="services-title">HELLO</h1>
      <Circle />
      <h1 className="services-title">MOTION</h1>
    </div>
    <div className="services-layout-row">
      <div className="services-hero services-hero-in-row">
        <div className="services-portrait">
          <img src={portrait} alt="Gerold, video editor" />
          <div className="services-portrait-fade" />
          <div className="services-callout-assets">
            <img
              className="services-callout-card"
              src={calloutImage}
              alt="Awarded creative video editor"
            />
            <img
              className="services-callout-pointer"
              src={heroPointer}
              alt=""
            />
            <img
              className="services-callout-link"
              src={geroldTag}
              alt="Gerold"
            />
          </div>
        </div>
      </div>

      <div className="services-copy">
        <p>
          My role is to amplify each story through carefully selected footage,
          pacing, and visual style. My attention to detail helps enhance the
          mood.
        </p>
        <div
          ref={experienceRef}
          className="services-experience"
          aria-label="12 plus years of experience"
        >
          <div className="services-experience-stat">
            <span className="services-experience-number">{experienceYears}+</span>
            <span className="services-experience-caption">
              Years of Experience
            </span>
          </div>
        </div>
        <a
          className="services-contact-link"
          href="#contact"
          aria-label="Contact Gerold"
        >
          <img src={linkArrow} alt="" aria-hidden="true" />
        </a>
      </div>
    </div>
  </div>
  );
};

export default Services;
