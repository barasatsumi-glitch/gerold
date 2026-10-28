const Button = ({
  href = "#contact",
  children = "Let's Talk",
  variant = "default",
  className = "",
}) => (
  <a
    href={href}
    className={
      variant === "flat"
        ? `inline-flex min-h-11 items-center justify-center gap-1.5 rounded-[9px] bg-gradient-to-r from-[#8750F7] via-[#5B2EAD] to-[#8750F7] px-5 py-3 text-[11px] font-semibold text-white shadow-[0_6px_18px_rgba(135,80,247,0.18)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_8px_24px_rgba(135,80,247,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`
        : `group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#7242D2] px-5 py-2 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`
    }
  >
    {variant !== "flat" && (
      <span className="absolute inset-0 -translate-x-full bg-[#8e5bf4] transition-transform duration-500 ease-in-out group-hover:translate-x-0 group-focus-visible:translate-x-0" />
    )}
    <span className="relative z-10">{children}</span>
  </a>
);

export default Button;
