const ServiceCard = ({ image, text, description, className = "" }) => {
  return (
    <article className={`flex min-w-0 flex-col items-start gap-3.5 px-3.5 py-4 sm:px-5 ${className}`}>
      <img
        className="h-[42px] w-[42px] rounded-full object-cover"
        src={image}
        alt=""
        aria-hidden="true"
      />
      <h2 className="!m-0 !text-[20px] !font-semibold !leading-tight !text-white">
        {text}
      </h2>
      <p className="!m-0 max-w-[330px] text-[11px] leading-[1.45] text-[#9B9B9B] sm:text-xs">
        {description}
      </p>
      <ul className="!m-0 list-disc pl-2 text-[11px] leading-[1.8] text-white sm:text-xs">
        <li>UI/UX Design</li>
        <li>Research</li>
        <li>Mobile &amp; Web App</li>
      </ul>
    </article>
  );
};

export default ServiceCard;
