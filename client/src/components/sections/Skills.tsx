/* ============================================================
   Skills Section — Swiss Modernism + Editorial Tech
   Grid of skill categories with amber progress bars
   ============================================================ */
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 85 },
      { name: "JavaScript / TypeScript", level: 80 },
      { name: "Java", level: 75 },
      { name: "HTML / CSS", level: 88 },
      { name: "SQL", level: 78 },
      { name: "C++", level: 70 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 82 },
      { name: "Node.js / Express", level: 78 },
      { name: "Django", level: 75 },
      { name: "Bootstrap / Tailwind", level: 85 },
      { name: "Pandas / NumPy", level: 72 },
      { name: "Flask", level: 70 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "VS Code", level: 90 },
      { name: "PostgreSQL / MySQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "Linux / Bash", level: 78 },
      { name: "Postman / API Testing", level: 80 },
    ],
  },
];

const techBadges = [
  "Python", "JavaScript", "React", "Node.js", "Express",
  "PostgreSQL", "MongoDB", "Git", "Linux", "HTML/CSS",
  "Bootstrap", "Tailwind", "Django", "Flask", "REST APIs",
  "Postman", "VS Code", "Figma", "Agile", "Problem Solving",
];

function SkillBar({ name, level, animate }: { name: string; level: number; animate: boolean }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-['DM_Sans'] text-sm text-[#1a1f36]/80">{name}</span>
        <span className="font-['DM_Mono'] text-xs text-[#e8a020]">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-28 bg-[#f5f3ee]" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="flex items-start gap-6 mb-16">
          <div className="hidden md:block">
            <span className="section-number select-none">02</span>
          </div>
          <div className="flex-1 pt-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#e8a020]" />
              <span className="label-tag">Technical Skills</span>
            </div>
            <h2 className="font-['Playfair_Display'] font-bold text-[#1a1f36] text-4xl md:text-5xl leading-tight">
              Tools of the
              <br />
              <span className="italic">trade</span>
            </h2>
          </div>
        </div>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.category}
              className="fade-up"
              style={{ transitionDelay: `${ci * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#e8a020] rotate-45" />
                <span className="font-['DM_Sans'] font-semibold text-[#1a1f36] text-sm uppercase tracking-widest">
                  {cat.category}
                </span>
              </div>
              <div className="w-full h-[2px] bg-[#1a1f36]/10 mb-6" />
              {cat.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} animate={animate} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="fade-up">
          <div className="w-full h-[3px] bg-[#1a1f36] mb-8" />
          <div className="flex items-center gap-3 mb-6">
            <span className="label-tag">Also familiar with</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-[#1a1f36] text-white font-['DM_Mono'] text-xs hover:bg-[#e8a020] hover:text-[#1a1f36] transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
