import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a1f36] shadow-lg"
          : "bg-[#1a1f36]/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6 max-w-7xl">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <span className="font-['Playfair_Display'] font-bold text-xl text-white tracking-tight">
            Dominic<span className="text-[#e8a020]">.</span>
          </span>
          <span className="hidden sm:block font-['DM_Mono'] text-xs text-white/40 tracking-widest uppercase">
            CS Student
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative font-['DM_Sans'] text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive ? "text-[#e8a020]" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#e8a020]" />
                )}
              </button>
            );
          })}
          <a
            href="/DominicResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-1.5 border border-[#e8a020] text-[#e8a020] font-['DM_Sans'] text-sm font-medium tracking-wide hover:bg-[#e8a020] hover:text-[#1a1f36] transition-colors duration-200"
          >
          Résumé
         </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1a1f36] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left font-['DM_Sans'] text-sm font-medium text-white/80 hover:text-[#e8a020] transition-colors py-1"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-white/10">
            <span className="inline-block px-4 py-1.5 border border-[#e8a020] text-[#e8a020] font-['DM_Sans'] text-sm font-medium">
              Résumé
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
