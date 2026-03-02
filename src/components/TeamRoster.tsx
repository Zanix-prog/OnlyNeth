import { useState } from "react";
import { Button } from "./ui/button";

const TeamRoster = () => {
  const [selectedMember, setSelectedMember] = useState<{
    name: string;
    grade: string;
  } | null>(null);

  const baseMembers = [
    "TopZombie (Owner)",
    "Flaxxy (CO-Owner)",
    "Grimmjow_66 (Head Tester)",
    "NotFlappy(Tester)",
    "v12nv(Tester)",
    "Iel0u(Tester)",
    "Avrdol(Tester)",
    "Afcika",
    "RetiredJohn",
    "FraxTrax",
    "Qfal",
    "Turtl3Bum",
    "iPAVLE",
    "nikolakisis",
    "Kxyroo",
    "Traficiante",
    "urnothimdawg",
    "Vzhr",
    "Supreme",
    "ColdBloodKiller",
  ];

  const getRandomGrade = (name: string) => {
    if (
  name.includes("TopZombie") ||
  name.includes("Flaxxy") ||
  name.includes("Grimmjow_66") ||
  name.includes("Qfal")
) {
  return "A+";
}
    return Math.random() > 0.5 ? "A" : "B";
  };

  const members = baseMembers.map((name) => ({
    name,
    grade: getRandomGrade(name),
  }));

  return (
    <section id="roster" className="relative py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-black tracking-widest text-white mb-6">
            THE ROSTER
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            SMP PLAYERS. Disciplined. Consistent. Elite.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {members.map((member, index) => (
            <div
              key={index}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-red-600/60 transition-all duration-500 shadow-[0_0_30px_rgba(220,38,38,0.1)] hover:shadow-[0_0_50px_rgba(220,38,38,0.3)]"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-red-700/20 blur-xl absolute inset-0 group-hover:opacity-80 transition" />
                <div className="relative w-20 h-20 mx-auto rounded-full border border-red-600/40 flex items-center justify-center bg-black text-white text-2xl font-black">
                  {member.name.charAt(0)}
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-bold text-white text-sm mb-2 group-hover:text-red-500 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-white/50">
                  SMP PLAYER
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMember && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
            onClick={() => setSelectedMember(null)}
          >
            <div
              className="relative w-full max-w-xl rounded-3xl p-12 bg-white/5 backdrop-blur-2xl border border-red-600/40 shadow-[0_0_80px_rgba(220,38,38,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition"
              >
                ✕
              </button>

              <div className="text-center space-y-8">
                <div className="relative mx-auto w-28 h-28">
                  <div className="absolute inset-0 bg-red-700/30 rounded-full blur-2xl" />
                  <div className="relative w-full h-full rounded-full border-4 border-red-600/40 flex items-center justify-center bg-black text-white text-5xl font-black">
                    {selectedMember.name.charAt(0)}
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-white mb-4">
                    {selectedMember.name}
                  </h3>

                  <div className="inline-flex items-center gap-3 px-6 py-2 bg-red-600/10 border border-red-600/40 rounded-full">
                    <span className="text-red-500 font-bold text-lg">
                      {selectedMember.grade}
                    </span>
                    <span className="text-white/50 text-sm">
                      Performance Grade
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full bg-red-700 hover:bg-red-600 transition-all font-bold"
                  onClick={() => setSelectedMember(null)}
                >
                  CLOSE
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamRoster;
