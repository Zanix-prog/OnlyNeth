import { useState } from "react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      name: "Project Mineheart",
      tagline: "Strategic domination protocol",
      description:
        "A structured offensive campaign focused on Mineheart SMP. Territory acquisition, economic control, and coordinated raid execution form the backbone of this initiative. Every engagement is calculated. Every action deliberate.",
      status: "ACTIVE",
    },
    {
      name: "Project Minesteal",
      tagline: "High-intensity competitive control",
      description:
        "Focused crystal PvP superiority and ladder dominance within Minesteal. Tactical positioning, rapid response teams, and sustained combat pressure ensure OnlyNeth maintains superiority across high-stakes encounters.",
      status: "ACTIVE",
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-6">

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-black font-[Orbitron] text-glow mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              ACTIVE OPERATIONS
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ongoing strategic campaigns engineered for sustained control across
            competitive SMP and high-level PvP environments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-10 rounded-2xl hover-lift cursor-pointer relative overflow-hidden group"
              onClick={() => setSelectedProject(index)}
            >
              {/* Subtle red hover glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Status */}
              <div className="absolute top-5 right-5">
                <div className="px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-xs font-[Orbitron] font-bold text-primary">
                  {project.status}
                </div>
              </div>

              <div className="relative space-y-5 mt-6">

                <div>
                  <h3 className="text-3xl font-black font-[Orbitron] text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.name}
                  </h3>

                  <p className="text-sm text-muted-foreground italic">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                <div className="pt-4 text-sm font-[Orbitron] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  VIEW OPERATION DETAILS →
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-primary/30 rounded-bl-2xl" />
              <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-primary/30 rounded-tr-2xl" />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-6"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="glass-card p-12 rounded-2xl max-w-3xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors"
              >
                ✕
              </button>

              <div className="space-y-8">

                <div>
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-[Orbitron] text-muted-foreground">
                      {projects[selectedProject].status}
                    </span>
                  </div>

                  <h3 className="text-5xl font-black font-[Orbitron] text-primary mb-4">
                    {projects[selectedProject].name}
                  </h3>

                  <p className="text-xl text-muted-foreground italic">
                    {projects[selectedProject].tagline}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold font-[Orbitron] text-primary mb-3">
                    MISSION OVERVIEW
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {projects[selectedProject].description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div className="glass-card p-6 text-center">
                    <div className="text-3xl font-black text-primary mb-1">Elite</div>
                    <div className="text-xs text-muted-foreground">Classification</div>
                  </div>

                  <div className="glass-card p-6 text-center">
                    <div className="text-3xl font-black text-primary mb-1">24/7</div>
                    <div className="text-xs text-muted-foreground">Active</div>
                  </div>

                  <div className="glass-card p-6 text-center">
                    <div className="text-3xl font-black text-primary mb-1">High</div>
                    <div className="text-xs text-muted-foreground">Intensity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;