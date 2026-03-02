import { useEffect } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const blade = document.getElementById("intro-blade");
    const flash = document.getElementById("intro-flash");
    const text = document.getElementById("intro-text");
    const overlay = document.getElementById("intro-overlay");

    setTimeout(() => {
      blade?.classList.remove("-translate-x-full", "opacity-0");
      blade?.classList.add("translate-x-[200%]", "opacity-100");
    }, 400);

    setTimeout(() => {
      flash?.classList.remove("opacity-0");
      flash?.classList.add("opacity-80");

      text?.classList.remove("scale-90", "opacity-0");
      text?.classList.add("scale-100", "opacity-100");
    }, 900);

    setTimeout(() => {
      flash?.classList.remove("opacity-80");
      flash?.classList.add("opacity-0");
    }, 1400);

    setTimeout(() => {
      if (overlay) {
        overlay.style.opacity = "0";
        overlay.style.transition = "opacity 0.6s ease";
      }
    }, 2300);

    setTimeout(() => {
      onComplete();
    }, 2900);
  }, [onComplete]);

  return (
    <div
      id="intro-overlay"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Red Blade */}
      <div
        id="intro-blade"
        className="absolute w-[200%] h-[3px] 
        bg-gradient-to-r from-transparent via-[#6C080A] to-transparent
        shadow-[0_0_50px_#6C080A]
        rotate-[-45deg]
        -translate-x-full opacity-0
        transition-all duration-700 ease-out"
      />

      {/* Red Flash */}
      <div
        id="intro-flash"
        className="absolute inset-0 bg-[#6C080A] opacity-0 transition-opacity duration-300"
      />

      {/* Text */}
      <div
        id="intro-text"
        className="relative z-10 scale-90 opacity-0 transition-all duration-500 ease-out text-center"
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tight">
          <span className="text-black drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]">
            Only
          </span>
          <span className="text-[#6C080A] drop-shadow-[0_0_30px_#6C080A]">
            Neth
          </span>
        </h1>

        <p className="mt-6 text-xs tracking-[0.6em] text-gray-600 uppercase">
          Dominate The Depths
        </p>
      </div>
    </div>
  );
};

export default Preloader;