import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* 3D Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          src='https://my.spline.design/claritystream-qWUJ5n1loSM2Sqd6aQDoqCk3/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="absolute inset-0"
          title="OnlyNeth 3D Scene"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-12 px-6 max-w-7xl mx-auto">
        
        {/* Main Title */}
<div className="space-y-8">
  <div className="relative inline-block">

    {/* White Ambient Light Behind ONLY */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[75%] h-[55%] bg-white/20 blur-[120px] rounded-full" />
    </div>

    {/* Red Ambient Aura Behind NETH */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[60%] h-[50%] bg-red-600/40 blur-[140px] rounded-full" />
    </div>

    {/* Core Red Glow */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[40%] h-[35%] bg-red-700 blur-[60px] opacity-80" />
    </div>

    <h1 className="relative text-7xl sm:text-8xl md:text-[11rem] lg:text-[13rem] font-black font-[Orbitron] leading-none tracking-tight">

      {/* ONLY - Matte Black with Rim Glow */}
      <span className="
        text-black
        drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]
        drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]
      ">
        ONLY
      </span>

      {/* NETH - Controlled Red God Glow */}
      <span className="
        text-red-600
        drop-shadow-[0_0_10px_rgba(220,38,38,0.9)]
        drop-shadow-[0_0_30px_rgba(220,38,38,0.8)]
        drop-shadow-[0_0_60px_rgba(220,38,38,0.6)]
        drop-shadow-[0_0_100px_rgba(220,38,38,0.5)]
      ">
        NETH
      </span>

    </h1>
  </div>

  <p className="text-2xl md:text-4xl font-bold text-white/90 font-[Orbitron] tracking-wide">
    SMP Control. Crystal PvP Precision.
  </p>

  <div className="flex items-center justify-center gap-3">
    <div className="h-px w-16 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
    <p className="text-lg text-white/60 font-[Orbitron] tracking-widest uppercase">
      Mineheart • Minesteal • Competitive Division
    </p>
    <div className="h-px w-16 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
  </div>
</div>

        {/* CTA */}
        <div className="relative group mt-8">
          <div className="absolute inset-0 bg-red-700 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
          
          <Button
            size="lg"
            className="relative px-14 py-8 text-xl font-bold font-[Orbitron] 
                       bg-red-700 hover:bg-red-600 
                       hover:scale-105 transition-all duration-300 
                       rounded-full border border-red-500/50 
                       shadow-[0_0_40px_rgba(220,38,38,0.6)] 
                       hover:shadow-[0_0_60px_rgba(220,38,38,0.9)]"
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            ENTER ONLYNETH
          </Button>
        </div>

        {/* Competitive Stats */}
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {[
            { label: "SMP", sublabel: "Territory Control" },
            { label: "CPVP", sublabel: "Elite Fighters" },
            { label: "Active Guild Members", sublabel: "Active Members" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-red-700/30 backdrop-blur-xl bg-black/40 hover:scale-105 transition-all"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="text-4xl md:text-5xl font-black font-[Orbitron] text-red-700 
                              drop-shadow-[0_0_25px_rgba(220,38,38,0.8)]">
                {stat.label}
              </div>
              <div className="text-xs text-white/50 mt-3 font-[Orbitron] uppercase tracking-wider">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-red-700/60 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-black/30">
          <div className="w-1 h-2 bg-red-700 rounded-full animate-pulse shadow-[0_0_12px_rgba(220,38,38,0.8)]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;