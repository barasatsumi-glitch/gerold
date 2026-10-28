import React, { useEffect, useRef, useState } from "react";
import CustomerReview from "../components for sections/CustomerReview";
import Button from "../components/Button";
import "./Testimonials.css";

const reviews = [
  {
    name: "Tim Bailey",
    position: "SEO Specialist, Theme Junction",
    rating: 4,
    quote: "Taylor is a professional Designer really helps my business by providing value to my business. Taylor is a professional Designer he really helps my business by providing value to my business. Taylor is a professional. Helps business providing value to my business, professional Designer he really helps my business",
  },
  {
    name: "Brandon Fraser",
    position: "Senior Software Dev, Cosmic Sport",
    rating: 5,
    quote: "Taylor delivered a thoughtful, polished experience from the first sketch to launch. Communication was clear throughout, and the finished work has made a real difference for our team.",
  },
  {
    name: "Maya Bennett",
    position: "Creative Director, Northstar Studio",
    rating: 5,
    quote: "A great partner who understood our goals quickly and turned them into a website that feels distinctive, fast, and easy to use. We could not be happier with the result.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animate, setAnimate] = useState(true);
  const resetTimer = useRef(null);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => setActiveIndex((index) => index + 1), 4800);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    if (activeIndex !== reviews.length) return undefined;
    resetTimer.current = window.setTimeout(() => {
      setAnimate(false);
      setActiveIndex(0);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    }, 1100);
    return () => window.clearTimeout(resetTimer.current);
  }, [activeIndex]);

  return (
    <section className="testimonials-section" aria-label="Client testimonials">
      <div className="testimonials-layout">
        <div className="testimonials-intro">
          <span className="testimonials-eyebrow">CLIENTS FEEDBACK</span>
          <h2>LET’S HEAR FROM <span>DEAR CLIENTS.</span></h2>
          <Button variant="flat" className="testimonials-contact">
            Contact Me <span aria-hidden="true">↗</span>
          </Button>
        </div>

        <div
          className="testimonials-window"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
          }}
          aria-live="off"
        >
          <div
            className={`testimonials-track${animate ? " is-animated" : ""}`}
            style={{ transform: `translateY(-${activeIndex * 206}px)` }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <CustomerReview
                key={`${review.name}-${index}`}
                {...review}
                className={index === activeIndex ? "is-current" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
