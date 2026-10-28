import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import ProjectSlide from "../components for sections/ProjectSlide";
import Deloitte from "../assets/Deloitte.png.png";
import Newage from "../assets/Newage.png";
import Sebastian from "../assets/Sebastian.png";

const projects = [
  {
    image: Deloitte,
    text: "Deloitte",
    description: "Project was about precision and information...",
  },
  {
    image: Newage,
    text: "New Age",
    description: "Project was about precision and information...",
  },
  {
    image: Sebastian,
    text: "Sebastian",
    description: "Project was about precision and information...",
  },
  {
    image: Deloitte,
    text: "Deloitte",
    description: "Project was about precision and information...",
  },
  {
    image: Newage,
    text: "New Age",
    description: "Project was about precision and information...",
  },
  {
    image: Sebastian,
    text: "Sebastian",
    description: "Project was about precision and information...",
  },
];

const resumeItems = {
  Experiences: [
    {
      role: "Senior Product Designer",
      organization: "Virtuslab",
      years: "2022 - 2023",
      mark: "✿",
      color: "text-orange-500",
    },
    {
      role: "Senior Product Designer",
      organization: "Semiflat Studio",
      years: "2020 - 2023",
      mark: "sF_",
      color: "text-white",
    },
    {
      role: "Senior User Interface Designer",
      organization: "Autentika",
      years: "2018 - 2020",
      mark: "⬆",
      color: "text-orange-500",
    },
  ],
  Education: [
    {
      role: "Master of Digital Design",
      organization: "Design Institute",
      years: "2016 - 2018",
      mark: "D",
      color: "text-[#8750F7]",
    },
    {
      role: "Bachelor of Visual Communication",
      organization: "Creative University",
      years: "2012 - 2016",
      mark: "✳",
      color: "text-orange-500",
    },
  ],
  Awards: [
    {
      role: "Awwwards — Honorable Mention",
      organization: "Awwwards",
      years: "2023",
      mark: "A",
      color: "text-orange-500",
    },
    {
      role: "CSS Design Awards — Special Kudos",
      organization: "CSS Design Awards",
      years: "2022",
      mark: "✦",
      color: "text-[#8750F7]",
    },
    {
      role: "Independent of the Year",
      organization: "Digital Design Awards",
      years: "2021",
      mark: "✧",
      color: "text-orange-500",
    },
  ],
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState("Experiences");
  const [position, setPosition] = useState(projects.length);
  const [animating, setAnimating] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);
  const viewport = useRef(null);
  const timer = useRef(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      const count =
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
      if (viewport.current) {
        const styles = window.getComputedStyle(viewport.current);
        const contentWidth =
          viewport.current.clientWidth -
          parseFloat(styles.paddingLeft) -
          parseFloat(styles.paddingRight);
        setSlideWidth((contentWidth - 16 * (count - 1)) / count + 16);
      }
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => {
      window.removeEventListener("resize", updateVisibleCount);
      window.clearTimeout(timer.current);
    };
  }, []);

  const move = (direction) => {
    if (animating) return;
    setAnimating(true);
    setPosition((current) => current + (direction === "next" ? 1 : -1));
    timer.current = window.setTimeout(() => {
      setPosition(
        (current) =>
          projects.length +
          ((current - projects.length + projects.length) % projects.length),
      );
      setAnimating(false);
    }, 500);
  };

  const activeProject =
    (((position - projects.length) % projects.length) + projects.length) %
    projects.length;

  const goToProject = (index) => {
    if (animating || index === activeProject) return;
    setAnimating(true);
    setPosition(projects.length + index);
    timer.current = window.setTimeout(() => {
      setAnimating(false);
    }, 500);
  };

  return (
    <section>
      <div className="px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1 text-left">
            <span className="text-[9px] text-[#8750F7] sm:text-[10px]">
              MY RECENT WORK
            </span>
            <h1
              className="max-w-[380px]
                         
                         !font-semibold
                         !text-[35px]
                         !leading-[1.15]
                         tracking-[0.2px]
                         uppercase
                         bg-[linear-gradient(90deg,#FFFFFF_50%,rgba(255,255,255,0.4)_50%)]
                         bg-clip-text
                         text-transparent"
            >
              RECENT WORK FOR
              <br />
              MY CLIENTS!
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => move("previous")}
              aria-label="Previous project"
              disabled={animating}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#8750F7] text-[#a580ef] transition duration-300 hover:border-[#a77bff] hover:bg-[#8750F7]/20 hover:text-white hover:shadow-[0_0_28px_6px_rgba(135,80,247,0.8)] hover:scale-110"
            >
              <FaArrowLeft className="text-[10px]" />
            </button>
            <button
              type="button"
              onClick={() => move("next")}
              aria-label="Next project"
              disabled={animating}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#8750F7] text-[#a580ef] transition duration-300 hover:border-[#a77bff] hover:bg-[#8750F7]/20 hover:text-white hover:shadow-[0_0_28px_6px_rgba(135,80,247,0.8)] hover:scale-110"
            >
              <FaArrowRight className="text-[10px]" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={viewport}
        className="mt-8 overflow-hidden px-6 sm:px-10 lg:px-16"
      >
        <div
          className={`flex w-full gap-4 ${animating ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{
            transform: `translateX(-${position * slideWidth}px)`,
          }}
        >
          {[...projects, ...projects, ...projects].map((project, index) => (
            <div
              key={`${project.text}-${index}`}
              className="min-w-0 flex-shrink-0 basis-full sm:basis-[calc((100%-1rem)/2)] min-[64rem]:basis-[calc((100%-2rem)/3)]"
            >
              <ProjectSlide {...project} />
            </div>
          ))}
        </div>
      </div>
      <div
        className="mt-5 flex justify-center gap-1.5"
        role="group"
        aria-label="Choose project slide"
      >
        {projects.map((project, index) => (
          <button
            key={`${project.text}-${index}`}
            type="button"
            onClick={() => goToProject(index)}
            disabled={animating}
            aria-label={`Go to project ${index + 1}: ${project.text}`}
            aria-current={activeProject === index ? "true" : undefined}
            className={`h-1.5 w-1.5 rounded-full transition-all duration-300 disabled:cursor-default ${
              activeProject === index
                ? "scale-110 bg-[#8750F7] shadow-[0_0_8px_rgba(135,80,247,0.7)]"
                : "bg-[#8750F7]/35 hover:bg-[#8750F7]/70"
            }`}
          />
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:px-10 lg:px-16 lg:pt-24">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <span className="text-[9px] tracking-[2px] text-[#8750F7] sm:text-[10px]">
            BEHIND THE PIXELS
          </span>
          <h2 className="mt-3 text-[27px] font-semibold leading-[1.12] tracking-[0.3px] sm:text-[35px]">
            <span className="bg-[linear-gradient(90deg,#FFFFFF_52%,rgba(255,255,255,0.42)_52%)] bg-clip-text text-transparent">
              MY BACKGROUND AND
              <br />
              ACHIEVEMENTS
            </span>
          </h2>

          <div
            className="mt-8 flex rounded-full bg-[#8750F7] p-[3px]"
            role="tablist"
            aria-label="Resume categories"
          >
            {Object.keys(resumeItems).map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-2 text-[10px] font-medium transition-colors sm:px-5 ${
                  activeTab === tab
                    ? "bg-[#150e1b] text-white"
                    : "text-white/85 hover:bg-white/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div
          className="mt-6 rounded-lg border border-[#33283a] px-5 sm:px-8 lg:px-9"
          role="tabpanel"
        >
          {resumeItems[activeTab].map((item, index) => (
            <article
              key={`${item.organization}-${item.years}`}
              className={`grid gap-4 py-6 sm:grid-cols-[40px_minmax(0,1fr)_auto] sm:items-start sm:gap-4 lg:py-7 ${
                index < resumeItems[activeTab].length - 1
                  ? "border-b border-[#302536]"
                  : ""
              }`}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#1c1720] text-xl font-semibold leading-none">
                <span className={item.color}>{item.mark}</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-[11px] font-medium uppercase tracking-[0.2px] text-white/90 sm:text-xs">
                  {item.role}
                </h3>
                <p className="mt-2 text-[9px] uppercase tracking-wide text-white/70">
                  {item.organization}
                </p>
                <p className="mt-3 max-w-[390px] text-[11px] leading-[1.5] text-white/55">
                  I'm winner of the world's most prestigious web design awards
                  with more-or-less normal awards in the fields.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-white/50 sm:pt-0.5 sm:text-xs">
                <FaRegCalendarAlt
                  className="text-[11px] text-[#8750F7]/70"
                  aria-hidden="true"
                />
                <span>{item.years}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
