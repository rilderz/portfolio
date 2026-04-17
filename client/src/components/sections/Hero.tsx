import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePic from "@/assets/WhatsApp Image 2026-03-14 at 11.36.12 AM.jpeg";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663520413843/e89a5rdqeDonJjRTzYLziF/hero-bg-eYULmJRqohr5JQGTsZafFA.webp";
const ABOUT_PORTRAIT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663520413843/e89a5rdqeDonJjRTzYLziF/about-portrait-5JExGtvKGYBSPpnoXugvLf.webp";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Subtle overlay to ensure text readability */}
      <div className="absolute inset-0 bg-[#f5f3ee]/80" />

      <div className="relative z-10 container mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Editorial text */}
          <div className="lg:col-span-7">
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-[#e8a020]" />
              <span className="label-tag">Computer Science Student • Moi University</span>
            </div>

            {/* Name */}
            <h1
              className="font-['Playfair_Display'] font-black text-[#1a1f36] leading-[0.92] mb-6"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
            >
              Dominic
              <br />
              <span className="italic text-[#e8a020]">Kariuki</span>
            </h1>

            {/* Thick rule */}
            <div className="w-24 h-[3px] bg-[#1a1f36] mb-6" />

            {/* Tagline */}
            <p className="font-['DM_Sans'] text-lg text-[#1a1f36]/70 max-w-lg leading-relaxed mb-10">
              Passionate about building elegant solutions to real-world problems.
              Currently in my third year pursuing a degree in Computer Science at Moi University.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 py-3 bg-[#1a1f36] text-white font-['DM_Sans'] text-sm font-medium tracking-wide hover:bg-[#2d3561] transition-colors duration-200"
              >
                View Projects
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 py-3 border-2 border-[#1a1f36] text-[#1a1f36] font-['DM_Sans'] text-sm font-medium tracking-wide hover:bg-[#1a1f36] hover:text-white transition-colors duration-200"
              >
                Get in Touch
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/rilderz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#1a1f36]/60 hover:text-[#1a1f36] transition-colors duration-200"
              >
                <Github size={18} />
                <span className="font-['DM_Mono'] text-xs tracking-wide">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/dominic-kariuki-0583663b2?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#1a1f36]/60 hover:text-[#1a1f36] transition-colors duration-200"
              >
                <Linkedin size={18} />
                <span className="font-['DM_Mono'] text-xs tracking-wide">LinkedIn</span>
              </a>
              <a
                href="mailto:nyanjirudominic@gmail.com"
                className="flex items-center gap-2 text-[#1a1f36]/60 hover:text-[#1a1f36] transition-colors duration-200"
              >
                <Mail size={18} />
                <span className="font-['DM_Mono'] text-xs tracking-wide">Email</span>
              </a>
            </div>
          </div>

          {/* Right: Portrait image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#e8a020]" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 overflow-hidden bg-[#1a1f36]">
                <img
                  src={profilePic}
                  alt="Dominic Kariuki"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Stats badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#1a1f36] text-white p-4 shadow-xl">
                <div className="font-['Playfair_Display'] font-bold text-2xl text-[#e8a020]">3+</div>
                <div className="font-['DM_Sans'] text-xs text-white/70 tracking-wide uppercase">Years Coding</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="label-tag text-[#1a1f36]/50">Scroll</span>
          <button onClick={scrollToAbout} className="text-[#1a1f36]/50 hover:text-[#e8a020] transition-colors animate-bounce">
            <ArrowDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
