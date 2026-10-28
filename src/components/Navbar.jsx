import { useEffect, useState } from "react";
import geroldLogo from "../assets/gerold logo.png";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";
import linkedinIcon from "../assets/linkedin.png";
import behanceIcon from "../assets/behance.png";
import Button from "./Button";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("work");

  const menus = [
    { name: "Services", path: "#services" },
    { name: "Work", path: "#work" },
    { name: "Resume", path: "#resume" },
    { name: "Skills", path: "#skills" },
    { name: "Testimonials", path: "#testimonials" },
    { name: "Contact", path: "#contact" },
  ];

  // Keep the active link aligned with the section crossing the navbar.
  useEffect(() => {
    const sections = [...document.querySelectorAll("main section[id]")];

    if (!sections.length) return undefined;

    const updateActiveSection = () => {
      if (
        window.scrollY < 2 ||
        document.documentElement.scrollHeight <= window.innerHeight
      ) {
        setActiveSection(sections[0].id);
        return;
      }

      const marker = window.innerHeight * 0.35;
      let currentSection = sections[0].id;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      // Keep the final link active when the page reaches its bottom.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        currentSection = sections[sections.length - 1].id;
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <nav>
      <div className="w-full bg-[#050709]">
        <div className="flex min-h-16 w-full items-center gap-x-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#work" aria-label="Home" className="shrink-0">
            <img
              src={geroldLogo}
              alt="Gerold"
              className="h-auto w-20 sm:w-24"
            />
          </a>

          {/* Menu */}
          <ul className="flex h-16 min-w-0 flex-1 flex-nowrap items-center justify-start gap-5 overflow-x-auto whitespace-nowrap px-1 sm:justify-center sm:gap-6 lg:gap-8">
            {menus.map((menu) => {
              const sectionId = menu.path.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={menu.path}>
                  <a
                    href={menu.path}
                    aria-current={isActive ? "location" : undefined}
                    className={`
                      relative
                      inline-block
                      whitespace-nowrap py-2 text-xs sm:text-sm
                      group
                      ${
                        isActive
                          ? "text-[#7242D2] drop-shadow-[0_0_8px_#7242D2]"
                          : "text-white hover:text-[#7242D2] hover:drop-shadow-[0_0_8px_#7242D2]"
                      }
                    `}
                  >
                    {menu.name}

                    {/* Top Line */}
                    <span
                      className={`
                        absolute
                        top-0
                        left-0
                        h-0.5
                        w-full
                        bg-[#7242D2] drop-shadow-[0_0_5px_#7242D2]
                        origin-left
                        transition-transform
                        duration-300
                        ease-in-out
                        ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }
                      `}
                    ></span>

                    {/* Bottom Line */}
                    <span
                      className={`
                        absolute
                        bottom-0
                        right-0
                        h-0.5
                        w-full
                        bg-[#7242D2] drop-shadow-[0_0_5px_#7242D2]
                        origin-right
                        transition-transform
                        duration-300
                        ease-in-out
                        ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }
                      `}
                    ></span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Social links and contact button */}
          <div className="hidden shrink-0 flex-col items-center gap-2 lg:flex">
            <div className="flex items-center gap-2" aria-label="Social links">
              {[
                {
                  name: "Facebook",
                  icon: facebookIcon,
                  href: "https://www.facebook.com/",
                },
                {
                  name: "Twitter",
                  icon: twitterIcon,
                  href: "https://twitter.com/",
                },
                {
                  name: "LinkedIn",
                  icon: linkedinIcon,
                  href: "https://www.linkedin.com/",
                },
                {
                  name: "Behance",
                  icon: behanceIcon,
                  href: "https://www.behance.net/",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="group flex size-8 items-center justify-center rounded-full border border-white/40 transition-all duration-200 hover:border-[#7242D2] hover:bg-[#7242D2] hover:shadow-[0_0_12px_#7242D2]"
                >
                  <img
                    src={social.icon}
                    alt=""
                    className="size-4 object-contain transition-transform group-hover:scale-110"
                  />
                </a>
              ))}
              <Button />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
