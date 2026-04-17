import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "Degree", value: "B.S. Computer Science" },
  { icon: MapPin, label: "University", value: "Moi University" },
  { icon: Calendar, label: "Year", value: "Third Year" },
  { icon: Award, label: "Focus", value: "Software Development" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="flex items-start gap-6 mb-16">
          <div className="hidden md:block">
            <span className="section-number select-none">01</span>
          </div>
          <div className="flex-1 pt-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#e8a020]" />
              <span className="label-tag">About Me</span>
            </div>
            <h2 className="font-['Playfair_Display'] font-bold text-[#1a1f36] text-4xl md:text-5xl leading-tight">
              Turning ideas into
              <br />
              <span className="italic">working software</span>
            </h2>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio text */}
          <div className="space-y-6 fade-up">
            <div className="w-full h-[3px] bg-[#1a1f36]" />
            <p className="font-['DM_Sans'] text-[#1a1f36]/80 text-lg leading-relaxed">
              I'm a third-year Computer Science student at Moi University with a passion for
              building practical software solutions. I'm interested in full-stack development,
              web technologies, and creating applications that solve real-world problems.
            </p>
            <p className="font-['DM_Sans'] text-[#1a1f36]/70 leading-relaxed">
              Throughout my studies, I've worked on various projects ranging from web applications
              to data analysis tools. I enjoy learning new technologies, collaborating with peers,
              and continuously improving my craft as a developer.
            </p>
            <p className="font-['DM_Sans'] text-[#1a1f36]/70 leading-relaxed">
              When I'm not coding, you'll find me exploring new frameworks, contributing to projects,
              or engaging with the developer community. I'm always open to learning opportunities, internships and
              collaborating on interesting projects.
            </p>

            {/* Interests */}
            <div className="pt-4">
              <span className="label-tag block mb-3">Interests</span>
              <div className="flex flex-wrap gap-2">
                {["Web Development", "React", "Python", "JavaScript", "Databases", "Problem Solving"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-[#1a1f36]/20 font-['DM_Mono'] text-xs text-[#1a1f36]/70 hover:border-[#e8a020] hover:text-[#e8a020] transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Highlights */}
          <div className="space-y-0 fade-up" style={{ transitionDelay: "0.15s" }}>
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-start gap-5 py-6 ${
                  i < highlights.length - 1 ? "border-b border-[#1a1f36]/10" : ""
                }`}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#f5f3ee] shrink-0">
                  <item.icon size={18} className="text-[#e8a020]" />
                </div>
                <div>
                  <span className="label-tag block mb-1">{item.label}</span>
                  <span className="font-['DM_Sans'] font-medium text-[#1a1f36] text-base">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}

            {/* Quote */}
            <div className="mt-8 p-6 bg-[#1a1f36] text-white">
              <div className="w-8 h-0.5 bg-[#e8a020] mb-4" />
              <blockquote className="font-['Playfair_Display'] italic text-lg leading-relaxed text-white/90">
                "Any sufficiently advanced technology is indistinguishable from magic."
              </blockquote>
              <cite className="label-tag text-white/50 mt-3 block not-italic">— Arthur C. Clarke</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
