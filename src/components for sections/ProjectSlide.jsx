import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const ProjectSlide = ({ image, text, description }) => {
  return (
    <article className="group min-w-0 rounded-[18px] bg-[#09090b] p-2 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(135,80,247,0.18)] sm:p-2.5">
      <div className="overflow-hidden rounded-[12px] bg-[#111214]">
        <img
          src={image}
          alt={`${text} project preview`}
          className="aspect-[1.4/1] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex items-center justify-between gap-2 px-0.5 pb-0.5 pt-2">
        <div className="min-w-0">
          <h2 className="truncate !text-[12px] !font-semibold !leading-4 !text-white">
            {text}
          </h2>
          <p className="truncate !text-[9px] !leading-3.5">{description}</p>
        </div>
        <button
          type="button"
          aria-label={`View ${text} project`}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-white transition duration-300 group-hover:border-[#8750F7]/70 group-hover:bg-[#8750F7]/15 group-hover:text-[#cbb5ff] group-hover:shadow-[0_0_18px_rgba(135,80,247,0.45)]"
        >
          <GoArrowUpRight className="text-[14px]" />
        </button>
      </div>
    </article>
  );
};

export default ProjectSlide;
