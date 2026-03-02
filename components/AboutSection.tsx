const AboutSection = () => {
  const timeline = [
    {
      year: "May 2024",
      event: "Official Formation",
      desc: "OnlyNeth was formally established — structured leadership, coordinated strategy, and a long-term dominance vision."
    },
    {
      year: "Season 6 — 2023",
      event: "Pre-Foundation Roots",
      desc: "Core members built experience across competitive SMP environments, refining mechanics and tactical discipline."
    },
    {
      year: "Season 7 — 2024",
      event: "Structured Identity",
      desc: "Transition from scattered talent into a coordinated unit. Tactical raids and territory control began defining our presence."
    },
    {
      year: "Season 8 — 2024",
      event: "Expansion Phase",
      desc: "Roster strengthened. Crystal PvP specialists integrated. Strategic planning became systematic."
    },
    {
      year: "Season 9 — 2025",
      event: "Dominance Cycle Begins",
      desc: "Season 9 marked the beginning of sustained supremacy across wars and high-stakes engagements."
    },
    {
      year: "Season 10 — 2025",
      event: "Pressure Control",
      desc: "Territory secured. Enemy factions destabilized. OnlyNeth operated with calculated aggression."
    },
    {
      year: "Season 11 — 2025 (Ongoing)",
      event: "Active Supremacy",
      desc: "Current season. Continuous performance in wars, tournaments, raids, and competitive PvP ladders."
    }
  ];

  return (
    <section id="about" className="relative min-h-screen py-32 px-6">

      {/* Ambient red glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-black font-[Orbitron] text-glow mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              THE ONLYNETH LEGACY
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded in May 2024, OnlyNeth represents a structured competitive force
            built on tactical awareness, mechanical precision, and controlled aggression.
            Across multiple seasons, the standard has remained the same —
            disciplined execution and sustained dominance.
          </p>
        </div>

        {/* Identity Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">

          <div className="glass-card p-10 space-y-5">
            <div className="text-5xl">🔥</div>
            <h3 className="text-3xl font-bold font-[Orbitron] text-primary">
              Foundation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Built from competitive roots dating back to Season 6 (2023),
              OnlyNeth officially formed in May 2024 with defined leadership
              and coordinated strategy. Every member operates with clarity,
              discipline, and shared intent.
            </p>
          </div>

          <div className="glass-card p-10 space-y-5">
            <div className="text-5xl">⚔️</div>
            <h3 className="text-3xl font-bold font-[Orbitron] text-primary">
              Operational Objective
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Maintain control across survival economies and high-intensity PvP arenas.
              Execute calculated raids. Secure territory. Apply pressure consistently.
              OnlyNeth is not reactive — it dictates tempo.
            </p>
          </div>

        </div>

        {/* Timeline */}
        <div className="relative">

          <h3 className="text-4xl font-bold font-[Orbitron] text-center mb-16 text-glow">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              SEASONAL EVOLUTION
            </span>
          </h3>

          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-primary" />

            <div className="space-y-20">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-10 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >

                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="glass-card p-8 inline-block hover-lift max-w-lg">

                      <div className="text-2xl font-black font-[Orbitron] text-primary mb-2">
                        {item.year}
                      </div>

                      <div className="text-xl font-bold text-foreground mb-2">
                        {item.event}
                      </div>

                      <div className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="relative z-10">
                    <div className="w-6 h-6 rounded-full bg-primary border-4 border-background shadow-[0_0_30px_rgba(108,8,10,0.8)]" />
                  </div>

                  <div className="flex-1" />

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-depth" />
    </section>
  );
};

export default AboutSection;