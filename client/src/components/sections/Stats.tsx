const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "3", label: "Years Coding" },
  { value: "100%", label: "Passion" },
  { value: "∞", label: "Potential" },
  { value: "3", label: "Current Year" },
];

export default function Stats() {
  return (
    <div className="bg-[#1a1f36] py-8">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 divide-x divide-white/10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-4 px-6 text-center"
            >
              <span className="font-['Playfair_Display'] font-bold text-3xl text-[#e8a020] leading-none mb-1">
                {stat.value}
              </span>
              <span className="font-['DM_Sans'] text-xs text-white/50 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
