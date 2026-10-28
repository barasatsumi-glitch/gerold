import React from "react";
import Bar from "./Bar";

const SkillCard = ({ image, text, description, percentage }) => {
  return (
    <section className="flex h-full flex-col bg-[#07090B] p-3 sm:p-4">
      <div>
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            className="h-8 w-8 shrink-0 rounded-full border-2 border-white object-cover sm:h-12 sm:w-12"
            src={image}
            alt=""
            aria-hidden="true"
          />
          <h2 className="text-sm font-medium leading-tight text-white sm:text-base">
            {text}
          </h2>
        </div>
        <p className="mt-3 text-[11px] leading-[1.4] text-[#9B9B9B] sm:mt-4 sm:text-xs">
          {description}
        </p>
      </div>
      <div className="mt-auto pt-4">
        <Bar percentage={percentage} />
      </div>
    </section>
  );
};

export default SkillCard;
