import React from "react";
import ScrollText from "../components for sections/ScrollText";
import Button from "../components/Button";
import SkillCard from "../components for sections/SkillCard";
import adobeaftereffect from "../assets/adobeaftereffect.png";
import hitfilmsexpress from "../assets/hitfilmsexpress.png";
import imoviefilm from "../assets/imoviefilm.png";
import finalcutpro from "../assets/finalcutpro.png";
const Work = () => {
  return (
    <section className="bg-[#140C1C] border-t border-solid border-[#28292d] ">
      <div className="container relative">
        <div className="flex justify-center gap-1 absolute left-55 -bottom-3 bg-[#140C1C] px-1.5">
          <span className="text-[#8750F7]">100%</span>
          <span className="text-white">TRUSTED CLIENTS OVER THE WORLD</span>
        </div>
      </div>
      <ScrollText />
      <div className="grid grid-cols-2 items-center gap-2 px-10 sm:px-16">
        <div>
          <span className="text-[9px] text-[#8750F7] sm:text-[10px]">
            MY RECENT WORK
          </span>
          <h1
            className="max-w-[450px]
                         !font-semibold
                         !text-[35px]
                         !leading-[1.2]
                         tracking-[2.1px]
                         uppercase
                         bg-[linear-gradient(90deg,#FFFFFF_50%,rgba(255,255,255,0.4)_50%)]
                         bg-clip-text
                         text-transparent"
          >
            my mastering video
            <br />
            editing skills
          </h1>
        </div>
        <div className="justify-self-end self-end">
          <Button variant="compact">Learn More</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-1 px-10 py-20 sm:px-16 md:grid-cols-4 lg:py-24">
        <SkillCard
          image={adobeaftereffect}
          text="Adobe After Effect"
          percentage={92}
          description="Adobe After Effects is a
                         powerful software application
                         used motion graphics."
        />
        <SkillCard
          image={finalcutpro}
          text="Final Cut Pro"
          percentage={80}
          description="Professional video editing
                         software developed by Apple
                         Inc., designed."
        />
        <SkillCard
          image={imoviefilm}
          text="I Movie Film"
          percentage={85}
          description="iMovie offers a range of
                        powerful editing tools that
                        allow users."
        />
        <SkillCard
          image={hitfilmsexpress}
          text="Hit Films Express"
          percentage={99}
          description="HitFilm Express is a free video
                         editing and visual effects
                         software developed."
        />
      </div>
    </section>
  );
};

export default Work;
