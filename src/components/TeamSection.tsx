import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GeometricAfrica from "./GeometricAfrica";
import ernestekiru from "@/assets/team-ernest-peter.jpg";
import samuelmunyole from "@/assets/team-samuel-ben.jpg";
import edwardikoona from "@/assets/team-edward-ken.jpg";
import phionaagweng from "@/assets/team-phiona-moore.jpg";

type Member = {
  name: string;
  position: string;
  photo: string;
  bio?: string;
};

const team: Member[] = [
  {
    name: "Mr. Ekiru Ernest Ochepa",
    position: "Founder",
    photo: ernestekiru,
    // bio: "Leads the firm's strategic vision, bringing deep expertise in data science and public-health analytics across African markets.",
  },
  {
    name: "Mr. Munyole Samuel",
    position: "Co-Founder",
    photo: edwardikoona,
    // bio: "Drives partnerships and growth, connecting research insights to real-world impact across the continent.",
  },
  {
    name: "Mr. Ikoona Edward",
    position: "Co-Founder",
    photo: samuelmunyole,
    // bio: "Heads engineering and platform delivery, building the modeling infrastructure that powers our analytics work.",
  },
  {
    name: "Ms Agweng Phiona",
    position: "Co-Founder",
    photo: phionaagweng,
    // bio: "Oversees research design and operations, ensuring rigor and clarity from study question to client decision.",
  },
];

const AUTO_MS = 5000;

const TeamSection = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = team.length;

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTO_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count);
  const member = team[index];

  return (
    <section
      id="team"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <GeometricAfrica className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] text-primary opacity-[0.04] pointer-events-none hidden lg:block" />

      <div className="container mx-auto section-padding relative z-10">
        <div className="max-w-2xl mb-14">
          <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3 font-body">
            Our People
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-primary mb-4">
            Meet the Team
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            The minds behind the models — analysts, scientists, and strategists
            shaping evidence-led decisions across Africa.
          </p>
        </div>

        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl bg-card border border-border">
            <div className="relative aspect-square md:aspect-auto md:min-h-[420px] bg-primary overflow-hidden">
              {team.map((m, i) => (
                <img
                  key={m.name}
                  src={m.photo}
                  alt={`${m.name}, ${m.position}`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-teal font-semibold text-xs tracking-widest uppercase mb-3 font-body">
                {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </p>
              <h3 className="font-display text-3xl lg:text-4xl text-primary mb-2">
                {member.name}
              </h3>
              <p className="text-accent font-semibold tracking-wide mb-5 font-body">
                {member.position}
              </p>
              {member.bio && (
                <p className="text-muted-foreground font-body leading-relaxed">
                  {member.bio}
                </p>
              )}

              {count > 1 && (
                <div className="flex items-center gap-4 mt-8">
                  <button
                    aria-label="Previous member"
                    onClick={() => go(-1)}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ChevronLeft size={18} strokeWidth={1.5} />
                  </button>
                  <div className="flex gap-2">
                    {team.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Go to member ${i + 1}`}
                        onClick={() => setIndex(i)}
                        className={`h-1.5 rounded-full transition-all ${
                          i === index ? "w-8 bg-accent" : "w-3 bg-border"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    aria-label="Next member"
                    onClick={() => go(1)}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ChevronRight size={18} strokeWidth={1.5} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
