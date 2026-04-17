/* ============================================================
   Projects Section — Swiss Modernism + Editorial Tech
   Featured projects with editorial card layout
   ============================================================ */
import { ExternalLink, Github, Star } from "lucide-react";

const PROJECT_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663520413843/e89a5rdqeDonJjRTzYLziF/project-1-jPyNuuGEGFebBLwCKUCmYr.webp";
const PROJECT_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663520413843/e89a5rdqeDonJjRTzYLziF/project-2-aFSxKPjcND47Jz5eFRvEds.webp";
const PROJECT_3 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663520413843/e89a5rdqeDonJjRTzYLziF/project-3-484U5e2qv5w4FvkviUga6x.webp";

const projects = [
  {
    id: "01",
    title: "E-Commerce Platform",
    subtitle: "Full-Stack Web Application",
    description:
      "A complete e-commerce platform built with React and Node.js. Features product catalog, shopping cart, user authentication, and payment integration. Includes admin dashboard for managing products and orders.",
    image: PROJECT_1,
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://github.com",
    featured: true,
    stars: 45,
  },
  {
    id: "02",
    title: "Task Management App",
    subtitle: "Real-time Collaboration Tool",
    description:
      "A task management application with real-time updates, team collaboration features, and progress tracking. Built with React for the frontend and Firebase for backend services including authentication and real-time database.",
    image: PROJECT_2,
    tags: ["React", "Firebase", "JavaScript", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://github.com",
    featured: true,
    stars: 32,
  },
  {
    id: "03",
    title: "Weather Dashboard",
    subtitle: "Data Visualization Project",
    description:
      "A weather dashboard that fetches real-time weather data and displays it with interactive charts and maps. Includes weather forecasts, historical data analysis, and location-based services.",
    image: PROJECT_3,
    tags: ["JavaScript", "API Integration", "Chart.js", "HTML/CSS"],
    github: "https://github.com",
    demo: null,
    featured: false,
    stars: 18,
  },
];

const otherProjects = [
  {
    title: "Blog Platform",
    description: "A blogging platform with markdown support, categories, and user comments. Built with Django and PostgreSQL.",
    tags: ["Django", "PostgreSQL", "Python"],
    github: "https://github.com",
  },
  {
    title: "Calculator App",
    description: "A responsive calculator web application with support for complex expressions and calculation history.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com",
  },
  {
    title: "Todo List App",
    description: "A simple yet functional todo application with local storage, categories, and priority levels.",
    tags: ["JavaScript", "HTML/CSS", "LocalStorage"],
    github: "https://github.com",
  },
  {
    title: "Quiz Application",
    description: "An interactive quiz app with multiple choice questions, score tracking, and result analysis.",
    tags: ["React", "JavaScript", "Bootstrap"],
    github: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="flex items-start gap-6 mb-16">
          <div className="hidden md:block">
            <span className="section-number select-none">03</span>
          </div>
          <div className="flex-1 pt-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#e8a020]" />
              <span className="label-tag">Selected Work</span>
            </div>
            <h2 className="font-['Playfair_Display'] font-bold text-[#1a1f36] text-4xl md:text-5xl leading-tight">
              Projects &amp;
              <br />
              <span className="italic">portfolio</span>
            </h2>
          </div>
        </div>

        {/* Featured projects */}
        <div className="space-y-16 mb-20">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center fade-up ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div
                className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="relative group overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#1a1f36]/0 group-hover:bg-[#1a1f36]/20 transition-colors duration-300" />
                  {/* Project number overlay */}
                  <div className="absolute top-4 left-4 font-['Playfair_Display'] font-black text-6xl text-white/20 leading-none select-none">
                    {project.id}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  {project.featured && (
                    <span className="label-tag bg-[#e8a020] text-[#1a1f36] px-2 py-0.5">
                      Featured
                    </span>
                  )}
                  <span className="label-tag">{project.subtitle}</span>
                </div>

                <h3 className="font-['Playfair_Display'] font-bold text-[#1a1f36] text-3xl mb-4">
                  {project.title}
                </h3>

                <div className="w-12 h-0.5 bg-[#e8a020] mb-4" />

                <p className="font-['DM_Sans'] text-[#1a1f36]/70 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 border border-[#1a1f36]/15 font-['DM_Mono'] text-xs text-[#1a1f36]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-['DM_Sans'] text-sm text-[#1a1f36] hover:text-[#e8a020] transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span>Source</span>
                    <span className="flex items-center gap-1 font-['DM_Mono'] text-xs text-[#1a1f36]/40">
                      <Star size={11} /> {project.stars}
                    </span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-['DM_Sans'] text-sm text-[#1a1f36] hover:text-[#e8a020] transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects grid */}
        <div className="fade-up">
          <div className="w-full h-[3px] bg-[#1a1f36] mb-8" />
          <div className="flex items-center gap-3 mb-8">
            <span className="label-tag">Other Projects</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherProjects.map((p, i) => (
              <div
                key={p.title}
                className="p-6 border border-[#1a1f36]/10 hover:border-[#e8a020] transition-colors duration-200 group fade-up"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-['Playfair_Display'] font-bold text-[#1a1f36] text-xl group-hover:text-[#e8a020] transition-colors duration-200">
                    {p.title}
                  </h4>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a1f36]/40 hover:text-[#1a1f36] transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>
                <p className="font-['DM_Sans'] text-sm text-[#1a1f36]/60 leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-['DM_Mono'] text-xs text-[#e8a020]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
