/* ============================================================
   Footer — Swiss Modernism + Editorial Tech
   Dark navy, minimal, editorial
   ============================================================ */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1f36] border-t border-white/10 py-8">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-['Playfair_Display'] font-bold text-white">
              Dominic<span className="text-[#e8a020]">.</span>
            </span>
            <span className="font-['DM_Mono'] text-xs text-white/30">
              &copy; {year}
            </span>
          </div>
          <p className="font-['DM_Mono'] text-xs text-white/30 text-center">
            Designed &amp; built with React, TypeScript &amp; Tailwind CSS
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-['DM_Mono'] text-xs text-white/40 hover:text-[#e8a020] transition-colors duration-200 uppercase tracking-widest"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
