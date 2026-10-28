import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Navbareffect = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 bg-[#050709] transition-shadow duration-300 ${
        hasScrolled
          ? "shadow-[0_4px_18px_rgba(114,66,210,0.24)]"
          : "shadow-[0_2px_12px_rgba(114,66,210,0.16)]"
      }`}
    >
      <Navbar />
    </div>
  );
};

export default Navbareffect;
