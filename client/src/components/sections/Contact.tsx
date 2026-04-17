import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Send, MapPin } from "lucide-react";
import { toast } from "sonner";

const socialLinks = [
  { icon: Github, label: "GitHub", handle: "@rilderz", href: "https://github.com/rilderz" },
  { icon: Linkedin, label: "LinkedIn", handle: "dominic-kariuki", href: "https://www.linkedin.com/in/dominic-kariuki-0583663b2?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { icon: Twitter, label: "Twitter", handle: "@dominickariuki", href: "https://twitter.com/@DKaris79685" },
  { icon: Mail, label: "Email", handle: "@dominic", href: "mailto:nyanjirudominic@gmail.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", subject: "", message: "" });
      toast.success("Message sent! I'll get back to you within 24 hours.");
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 bg-[#1a1f36]">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="flex items-start gap-6 mb-16">
          <div className="hidden md:block">
            <span
              className="font-['Playfair_Display'] font-black leading-none select-none pointer-events-none"
              style={{
                fontSize: "clamp(4rem, 10vw, 8rem)",
                color: "rgba(255,255,255,0.06)",
                letterSpacing: "-0.04em",
              }}
            >
              05
            </span>
          </div>
          <div className="flex-1 pt-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#e8a020]" />
              <span className="label-tag text-[#e8a020]">Get in Touch</span>
            </div>
            <h2 className="font-['Playfair_Display'] font-bold text-white text-4xl md:text-5xl leading-tight">
              Let's build
              <br />
              <span className="italic text-[#e8a020]">something great</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Info */}
          <div className="lg:col-span-4 fade-up">
            <div className="w-full h-[2px] bg-white/10 mb-8" />
            <p className="font-['DM_Sans'] text-white/70 leading-relaxed mb-10">
              I'm actively looking for internship opportunities and collaborations.
              Whether you have a project idea, want to discuss tech, or just want to connect,
              feel free to reach out. I'm always excited to learn and work on interesting challenges.
            </p>

            <div className="flex items-center gap-2 mb-8">
              <MapPin size={14} className="text-[#e8a020]" />
              <span className="font-['DM_Mono'] text-xs text-white/50">
                Kenya · Open to Remote
              </span>
            </div>

            {/* Social links */}
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-9 h-9 border border-white/20 flex items-center justify-center group-hover:border-[#e8a020] group-hover:bg-[#e8a020]/10 transition-colors duration-200">
                    <link.icon size={15} className="text-white/60 group-hover:text-[#e8a020] transition-colors duration-200" />
                  </div>
                  <div>
                    <div className="font-['DM_Sans'] text-xs text-white/40 uppercase tracking-widest">
                      {link.label}
                    </div>
                    <div className="font-['DM_Mono'] text-sm text-white/80 group-hover:text-[#e8a020] transition-colors duration-200">
                      {link.handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="lg:col-span-8 fade-up" style={{ transitionDelay: "0.15s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="label-tag text-white/50 block mb-2">
                    Name <span className="text-[#e8a020]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#e8a020] transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="label-tag text-white/50 block mb-2">
                    Email <span className="text-[#e8a020]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#e8a020] transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="label-tag text-white/50 block mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#e8a020] transition-colors duration-200"
                />
              </div>

              <div>
                <label className="label-tag text-white/50 block mb-2">
                  Message <span className="text-[#e8a020]">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#e8a020] transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="flex items-center gap-3 px-8 py-3.5 bg-[#e8a020] text-[#1a1f36] font-['DM_Sans'] font-semibold text-sm tracking-wide hover:bg-[#f0b84a] transition-colors duration-200 disabled:opacity-60"
              >
                <Send size={16} />
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
