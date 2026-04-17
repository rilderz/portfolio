/* ============================================================
   Experience Section — Swiss Modernism + Editorial Tech
   Vertical timeline with thick rule and amber markers
   ============================================================ */

const experiences = [
  {
    type: "education",
    role: "B.S. Computer Science",
    company: "Moi University",
    period: "2022 — Present",
    location: "Kenya",
    description:
      "Currently in my third year pursuing a degree in Computer Science. Coursework includes Data Structures, Algorithms, Web Development, Database Systems, Software Engineering, and Object-Oriented Programming. Maintaining strong academic performance.",
    tags: ["Data Structures", "Algorithms", "Web Dev", "Databases", "OOP"],
  },
  {
    type: "work",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2023 — Present",
    location: "Remote",
    description:
      "Developed multiple web applications for clients including e-commerce platforms and business websites. Worked with React, Node.js, and various databases to deliver full-stack solutions. Gained experience in client communication and project management.",
    tags: ["React", "Node.js", "MongoDB", "Client Work"],
  },
  {
    type: "work",
    role: "Open Source Contributor",
    company: "Various Projects",
    period: "2023 — Present",
    location: "Remote",
    description:
      "Contributing to open-source projects to improve my skills and give back to the community. Participated in bug fixes, feature implementations, and code reviews. Gained experience with Git workflows and collaborative development.",
    tags: ["Git", "Collaboration", "Problem Solving"],
  },
  {
    type: "education",
    role: "Self-Taught Developer",
    company: "Online Learning",
    period: "2021 — Present",
    location: "Remote",
    description:
      "Continuously learning through online courses, tutorials, and documentation. Completed courses on web development, JavaScript, Python, and various frameworks. Building projects to apply learned concepts and strengthen portfolio.",
    tags: ["Self-Learning", "Online Courses", "Projects"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#f5f3ee]">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="flex items-start gap-6 mb-16">
          <div className="hidden md:block">
            <span className="section-number select-none">04</span>
          </div>
          <div className="flex-1 pt-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#e8a020]" />
              <span className="label-tag">Experience &amp; Education</span>
            </div>
            <h2 className="font-['Playfair_Display'] font-bold text-[#1a1f36] text-4xl md:text-5xl leading-tight">
              My journey
              <br />
              <span className="italic">so far</span>
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-[#1a1f36]/10" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative pl-14 md:pl-24 pb-12 fade-up"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Timeline marker */}
                <div className="absolute left-2 md:left-6 top-1 w-5 h-5 bg-[#f5f3ee] border-2 border-[#e8a020] flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#e8a020]" />
                </div>

                {/* Period label */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-['DM_Mono'] text-xs text-[#e8a020]">
                    {exp.period}
                  </span>
                  <span className="font-['DM_Mono'] text-xs text-[#1a1f36]/40">
                    {exp.location}
                  </span>
                  {exp.type === "education" && (
                    <span className="label-tag bg-[#1a1f36] text-white px-2 py-0.5">
                      Education
                    </span>
                  )}
                </div>

                {/* Role & company */}
                <h3 className="font-['Playfair_Display'] font-bold text-[#1a1f36] text-2xl mb-1">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-0.5 bg-[#e8a020]" />
                  <span className="font-['DM_Sans'] font-medium text-[#e8a020] text-sm">
                    {exp.company}
                  </span>
                </div>

                {/* Description */}
                <p className="font-['DM_Sans'] text-[#1a1f36]/70 leading-relaxed mb-4 max-w-2xl">
                  {exp.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-white border border-[#1a1f36]/10 font-['DM_Mono'] text-xs text-[#1a1f36]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements row */}
        <div className="mt-8 fade-up">
          <div className="w-full h-[3px] bg-[#1a1f36] mb-8" />
          <div className="flex items-center gap-3 mb-6">
            <span className="label-tag">Goals &amp; Aspirations</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Internship", event: "Seeking opportunities", year: "2025" },
              { title: "Skills", event: "Master full-stack development", year: "2025" },
              { title: "Projects", event: "Build impactful applications", year: "2025" },
              { title: "Growth", event: "Continuous learning mindset", year: "2026" },
            ].map((goal) => (
              <div key={goal.title + goal.event} className="p-5 bg-white border-l-4 border-[#e8a020]">
                <div className="font-['Playfair_Display'] font-bold text-[#1a1f36] text-xl mb-1">
                  {goal.title}
                </div>
                <div className="font-['DM_Sans'] text-sm text-[#1a1f36]/70 mb-1">
                  {goal.event}
                </div>
                <div className="font-['DM_Mono'] text-xs text-[#e8a020]">{goal.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
