import React, { useState, useEffect } from "react";
import {
  Link as LinkIcon,
  ExternalLink,
  Mail,
  Menu,
  X,
  Film,
  Code2,
  GraduationCap,
  Rocket,
  ArrowUpRight,
} from "lucide-react";
const COLORS = {
  night: "#14172B",   // background — night sky over Arusha
  paper: "#F1E9D8",   // storyboard paper / light panels
  ember: "#E0913D",   // primary accent — Kilimanjaro sunset amber
  acacia: "#2E7C6E",  // secondary accent — tech / code
  ink: "#23241F",     // dark text on light panels
  bone: "#F7F5EF",    // light text on dark panels
};
const SKILLS = [
  { name: "JavaScript", note: "core language" },
  { name: "HTML & CSS", note: "structure & style" },
  { name: "React", note: "currently learning" },
  { name: "PHP & MySQL", note: "backend & database" },
  { name: "Flutter & Dart", note: "mobile apps" },
  { name: "Java (OOP)", note: "coursework" },
  { name: "Git & GitHub", note: "version control" },
];

const PROJECTS = [
  {
    frame: "04",
    title: "Smart Garage",
    role: "Flutter frontend + PHP/MySQL backend",
    description:
      "A vehicle assistance platform connecting drivers with nearby garages and emergency mechanical support. Rebuilding the original website as a mobile app while keeping the existing PHP backend.",
    tags: ["Flutter", "PHP", "MySQL", "REST API"],
  },

];

const NAV_ITEMS = [
  { id: "hero", label: "01 · Intro" },
  { id: "about", label: "02 · About" },
  { id: "education", label: "03 · Education" },
  { id: "work", label: "04 · What I Do" },
  { id: "contact", label: "05 · Contact" },
];
function Sprockets({ side = "left" }) {
  const holes = Array.from({ length: 10 });
  return (
    <div
      className={`hidden md:flex flex-col justify-between py-6 ${side === "left" ? "items-start" : "items-end"
        }`}
    >
      {holes.map((_, i) => (
        <span
          key={i}
          className="block w-3 h-3 rounded-sm"
          style={{ backgroundColor: COLORS.night, opacity: 0.15 }}
        />
      ))}
    </div>
  );
}
function Frame({ id, number, title, children }) {
  return (
    <section
      id={id}
      className="relative grid grid-cols-[2rem_1fr_2rem] md:grid-cols-[3rem_1fr_3rem] max-w-5xl mx-auto px-4"
    >
      <Sprockets side="left" />
      <div className="py-16 md:py-24">
        <div className="flex items-center gap-3 mb-8">
          <span
            className="font-mono text-sm px-2 py-1 rounded"
            style={{ backgroundColor: COLORS.ember, color: COLORS.ink }}
          >
            FRAME {number}
          </span>
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {title}
          </h2>
        </div>
        {children}
      </div>
      <Sprockets side="right" />
    </section>
  );
}

function SkillTag({ name, note }) {
  return (
    <div
      className="rounded-lg border px-4 py-3 flex flex-col gap-1"
      style={{ borderColor: COLORS.acacia, backgroundColor: "transparent" }}
    >
      <span className="font-semibold" style={{ color: COLORS.bone }}>
        {name}
      </span>
      <span className="text-xs font-mono" style={{ color: COLORS.ember }}>
        {note}
      </span>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      className="rounded-xl p-6 flex flex-col gap-3"
      style={{ backgroundColor: COLORS.paper, color: COLORS.ink }}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs opacity-60">
          FRAME {project.frame}
        </span>
        <ArrowUpRight size={18} style={{ color: COLORS.acacia }} />
      </div>
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-sm font-semibold" style={{ color: COLORS.acacia }}>
        {project.role}
      </p>
      <p className="text-sm leading-relaxed opacity-90">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-1 rounded"
            style={{ backgroundColor: COLORS.night, color: COLORS.bone }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Loads a couple of Google Fonts so the page doesn't fall back to
  // plain system fonts. This only needs to run once, so the
  // dependency array is empty.
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Mono:wght@400;600&family=Inter:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div
      style={{
        backgroundColor: COLORS.night,
        color: COLORS.bone,
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* NAVIGATION — the "filmstrip" header */}
      <header
        className="sticky top-0 z-20 border-b"
        style={{ backgroundColor: COLORS.night, borderColor: "#2a2e4a" }}
      >
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Film size={20} style={{ color: COLORS.ember }} />
            <span
              className="font-bold tracking-wide"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              OTHMAN
            </span>
          </div>

          <nav className="hidden md:flex gap-6 font-mono text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu — only rendered when menuOpen is true */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col px-4 pb-4 gap-3 font-mono text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* FRAME 01 — HERO */}
      <Frame id="hero" number="01" title="Intro">
        <p
          className="text-3xl md:text-5xl font-bold leading-tight mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Building software today,{" "}
          <span style={{ color: COLORS.ember }}>an animation studio</span>{" "}
          tomorrow.
        </p>
        <p className="max-w-xl opacity-80 leading-relaxed">
          I'm Othman — a second-year Diploma in Computer Science student in
          Arusha, Tanzania, learning full-stack development while working
          toward starting my own animation company.
        </p>
        <div className="flex gap-3 mt-6">
          <a
            href="#work"
            className="px-5 py-2 rounded-lg font-semibold text-sm"
            style={{ backgroundColor: COLORS.ember, color: COLORS.ink }}
          >
            See my work
          </a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg font-semibold text-sm border"
            style={{ borderColor: COLORS.acacia }}
          >
            Get in touch
          </a>
        </div>
      </Frame>

      {/* FRAME 02 — ABOUT */}
      <Frame id="about" number="02" title="About Me">
        <div className="flex items-start gap-4">
          <GraduationCap
            size={28}
            style={{ color: COLORS.acacia }}
            className="shrink-0 mt-1"
          />
          <p className="max-w-2xl leading-relaxed opacity-90">
            I'm based in Arusha, Tanzania, currently in my second year of a
            Diploma in Computer Science, expecting to graduate in 2027. I'm a
            beginner full-stack developer with a foundation in JavaScript,
            and I learn best by building real, working projects and picking
            apart how they work afterward. Outside of coding, I'm working
            toward a bigger goal: starting my own animation studio in
            Tanzania.
          </p>
        </div>
      </Frame>

      {/* FRAME 03 — EDUCATION + SKILLS */}
      <Frame id="education" number="03" title="Education & Stack">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Code2 size={18} style={{ color: COLORS.ember }} />
            <p className="font-semibold">
              Diploma in Computer Science — Year 2
            </p>
          </div>
          <p className="text-sm opacity-70 ml-6">
            Expected graduation: 2027 · Focus: full-stack development
          </p>
        </div>

        <p className="text-sm font-mono mb-3 opacity-70">TECH I USE</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {SKILLS.map((skill) => (
            <SkillTag key={skill.name} name={skill.name} note={skill.note} />
          ))}
        </div>
      </Frame>

      {/* FRAME 04-06 — PROJECTS / WHAT I DO */}
      <Frame id="work" number="04" title="What I Do">
        <div className="grid md:grid-cols-3 gap-5">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Frame>

      {/* FRAME 07 — CONTACT */}
      <Frame id="contact" number="05" title="Contact">
        <div className="flex items-center gap-3 mb-6">
          <Rocket size={22} style={{ color: COLORS.ember }} />
          <p className="opacity-90">
            Open to entry-level IT and dev opportunities in Arusha, and
            always happy to talk about animation and building things.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 font-mono text-sm">
          <a
            href="mailto:your-email@example.com"
            className="flex items-center gap-2 hover:opacity-70"
          >
            <Mail size={16} /> your-email@example.com
          </a>
          <a href="https://github.com/your-username" className="flex items-center gap-2 hover:opacity-70">
            <ExternalLink size={16} /> github.com/your-username
          </a>
          <a href="https://linkedin.com/in/your-username" className="flex items-center gap-2 hover:opacity-70">
            <ExternalLink size={16} /> linkedin.com/in/your-username
          </a>
        </div>
      </Frame>

      <footer className="text-center py-8 text-xs font-mono opacity-40">
        © {new Date().getFullYear()} Othman — built with React
      </footer>
    </div>
  );
}
