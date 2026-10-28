import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Button from "../components/Button";
import passionate from "../assets/Passionate.png";
import ServiceCard from "../components for sections/ServiceCard";
import webdevelop from "../assets/webdevelop.png";
import uiuxdesign from "../assets/uiuxdesign.png";
import content from "../assets/content.png";

const Skills = () => {
  const [stats, setStats] = useState([0, 0, 0]);
  const statsRef = useRef(null);
  const [serviceSlide, setServiceSlide] = useState(0);
  const [resetServiceTransition, setResetServiceTransition] = useState(false);
  const [serviceOffset, setServiceOffset] = useState(0);
  const serviceTrackRef = useRef(null);

  const services = [
    {
      image: webdevelop,
      text: "Web Development",
      description:
        "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Using surveys, interviews, and usability testing to generate actionable insights.",
    },
    {
      image: uiuxdesign,
      text: "UI/UX Design",
      description:
        "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Using surveys, interviews, and usability testing to generate actionable insights.",
    },
    {
      image: content,
      text: "Content Writing",
      description:
        "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Using surveys, interviews, and usability testing to generate actionable insights.",
    },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setServiceSlide((current) => current + 1);
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  useLayoutEffect(() => {
    const track = serviceTrackRef.current;
    const firstCard = track?.firstElementChild;
    if (!track || !firstCard) return;

    const updateOffset = () => {
      const styles = window.getComputedStyle(track);
      const gap = Number.parseFloat(styles.columnGap) || 0;
      setServiceOffset(
        (firstCard.getBoundingClientRect().width + gap) * serviceSlide,
      );
    };

    updateOffset();
    const observer = new ResizeObserver(updateOffset);
    observer.observe(track);
    observer.observe(firstCard);
    return () => observer.disconnect();
  }, [serviceSlide]);

  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;

    let frameId;
    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        observer.disconnect();

        const targets = [30, 100, 300];
        const duration = 420;
        let startTime;
        const countUp = (timestamp) => {
          if (startTime === undefined) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          setStats(targets.map((target) => Math.floor(progress * target)));
          if (progress < 1) frameId = requestAnimationFrame(countUp);
        };
        frameId = requestAnimationFrame(countUp);
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="bg-[#07090B] px-5  sm:px-10 sm:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-xl">
            <img
              className="block h-full max-h-[560px] w-full object-cover"
              src={passionate}
              alt="Creative digital marketing workspace"
            />
          </div>
          <div className="flex flex-col items-start gap-5">
            <span className="text-[9px] text-[#8750F7] sm:text-[10px]">
              BEHIND THE PIXELS
            </span>
            <h1
              className="max-w-[530px]
                         
                         !font-semibold
                         !text-[35px]
                         !leading-[1.2]
                         tracking-[2.8px]
                         uppercase
                         bg-[linear-gradient(90deg,#FFFFFF_50%,rgba(255,255,255,0.4)_50%)]
                         bg-clip-text
                         text-transparent"
            >
              passionate on digital
              <br />
              marketer focused on
              <br />
              driving results
            </h1>
            <p className="max-w-[390px] text-justify text-[11px] leading-[1.45] sm:text-xs">
              This encompasses a variety of strategies, including search engine
              optimization (SEO), content marketing, social media marketing, and
              email marketing.
            </p>
            <div
              ref={statsRef}
              className="grid w-full max-w-[390px] grid-cols-3 overflow-hidden rounded-[10px] bg-[#130b19]"
            >
              <div className="flex min-h-24 flex-col justify-center border-r border-[#2b2033] px-3 py-3 sm:px-5">
                <span className="inline-block w-[4ch] tabular-nums text-3xl font-semibold leading-none text-[#8750F7] sm:text-4xl">
                  {stats[0]}+
                </span>
                <p className="mt-1 max-w-[85px] text-[10px] leading-[1.35] sm:text-[11px]">
                  Years of Experience
                </p>
              </div>
              <div className="flex min-h-24 flex-col justify-center border-r border-[#2b2033] px-3 py-3 sm:px-5">
                <span className="inline-block w-[4ch] tabular-nums text-3xl font-semibold leading-none text-[#8750F7] sm:text-4xl">
                  {stats[1]}+
                </span>
                <p className="mt-1 max-w-[85px] text-[10px] leading-[1.35] sm:text-[11px]">
                  Project Completed
                </p>
              </div>
              <div className="flex min-h-24 flex-col justify-center px-3 py-3 sm:px-5">
                <span className="inline-block w-[4ch] tabular-nums text-3xl font-semibold leading-none text-[#8750F7] sm:text-4xl">
                  {stats[2]}+
                </span>
                <p className="mt-1 max-w-[85px] text-[10px] leading-[1.35] sm:text-[11px]">
                  Successful Projects
                </p>
              </div>
            </div>
            <Button>Learn More</Button>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 max-w-[540px] mx-auto text-center pt-14">
          <span className="text-[9px] text-[#8750F7] sm:text-[10px]">
            MY SERVICES
          </span>
          <h1
            className="max-w-[530px]
                         
                         !font-semibold
                         !text-[35px]
                         !leading-[1.2]
                         tracking-[2.8px]
                         uppercase
                         bg-[linear-gradient(90deg,#FFFFFF_50%,rgba(255,255,255,0.4)_50%)]
                         bg-clip-text
                         text-transparent"
          >
            HERE'S HOW CAN I HELP
          </h1>
        </div>
        <div className="mt-8 overflow-hidden">
          <div
            ref={serviceTrackRef}
            className="flex w-[200%] gap-5"
            style={{
              transform: `translateX(-${serviceOffset}px)`,
              transition: resetServiceTransition
                ? "none"
                : "transform 700ms ease-in-out",
            }}
            onTransitionEnd={(event) => {
              if (
                event.propertyName !== "transform" ||
                serviceSlide !== services.length
              )
                return;
              setResetServiceTransition(true);
              setServiceSlide(0);
              requestAnimationFrame(() => {
                requestAnimationFrame(() => setResetServiceTransition(false));
              });
            }}
          >
            {[...services, ...services].map((service, index) => (
              <div
                key={`${service.text}-${index}`}
                className="min-w-0 basis-[calc((50%-2.5rem)/3)]"
              >
                <ServiceCard {...service} className="h-full" />
              </div>
            ))}
          </div>
        </div>
        <Button variant="flat" className="mt-3 w-full">
          Let's Contact With Me
          <span className="pl-2" aria-hidden="true">
            &#8599;
          </span>
        </Button>
      </div>
    </section>
  );
};

export default Skills;
