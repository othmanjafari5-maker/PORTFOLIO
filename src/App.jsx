import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import {
  ExternalLink,
  Mail,
  Menu,
  Phone,
  X,
  Film,
  Code2,
  GraduationCap,
  Rocket,
  ArrowUpRight,
  Home,
  UserRound,
  BriefcaseBusiness,
} from "lucide-react";

const COLORS = {
  night: "#14172B",
  paper: "#F1E9D8",
  ember: "#E0913D",
  acacia: "#2E7C6E",
  ink: "#23241F",
  bone: "#F7F5EF",
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
    title: "Smart Garage",
    role: "Flutter frontend + PHP/MySQL backend",
    description:
      "A vehicle assistance platform connecting drivers with nearby garages and emergency mechanical support. Rebuilding the original website as a mobile app while keeping the existing PHP backend.",
    tags: ["Flutter", "PHP", "MySQL", "REST API"],
  },
];

const NAV_ITEMS = [
  { path: "/", label: "Intro", icon: Home },
  { path: "/about", label: "About", icon: UserRound },
  { path: "/education", label: "Education", icon: GraduationCap },
  { path: "/work", label: "What I Do", icon: BriefcaseBusiness },
  { path: "/contact", label: "Contact", icon: Mail },
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


function Sidebar({ mobileOpen, setMobileOpen }) {
  return (
    <>
      {/* Desktop expandable sidebar */}
      <aside
        className="
          hidden md:flex fixed left-0 top-0 bottom-0 z-50
          w-20 hover:w-64 group
          flex-col border-r overflow-hidden
          transition-all duration-300 ease-in-out shadow-2xl
        "
        style={{
          backgroundColor: COLORS.night,
          borderColor: "#2a2e4a",
        }}
      >
        {/* Logo */}
        <div className="h-20 flex items-center px-5 shrink-0">
          <div className="flex items-center gap-4 min-w-max">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{
                backgroundColor: COLORS.ember,
                color: COLORS.ink,
              }}
            >
              <Film size={21} />
            </div>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div
                className="font-bold tracking-wide"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                OTHMAN
              </div>
              <div className="text-xs opacity-50">PORTFOLIO</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 px-3 mt-6">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative flex items-center gap-4 h-12 px-3 rounded-xl
                   min-w-max transition-all duration-200 hover:translate-x-1
                   ${isActive ? "ring-1" : ""}`
                }
                style={({ isActive }) => ({
                  color: COLORS.bone,
                  backgroundColor: isActive ? "#242942" : "transparent",
                  ringColor: COLORS.ember,
                })}
              >
                <Icon
                  size={21}
                  className="shrink-0"
                  style={{ color: COLORS.ember }}
                />

                <span className="font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom profile */}
        <div className="mt-auto px-5 pb-6 min-w-max">
          <div
            className="flex items-center gap-3 border-t pt-5"
            style={{ borderColor: "#2a2e4a" }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{
                backgroundColor: COLORS.acacia,
                color: COLORS.bone,
              }}
            >
              <Code2 size={17} />
            </div>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <p className="text-sm font-semibold whitespace-nowrap">
                Software Developer
              </p>
              <p className="text-xs opacity-50 whitespace-nowrap">
                Arusha, Tanzania
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile navigation */}
      <header
        className="md:hidden sticky top-0 z-50 border-b"
        style={{
          backgroundColor: COLORS.night,
          borderColor: "#2a2e4a",
        }}
      >
        <div className="px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Film size={20} style={{ color: COLORS.ember }} />
            <span
              className="font-bold tracking-wide"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              OTHMAN
            </span>
          </Link>

          <button
            className="p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="flex flex-col px-4 pb-4 gap-3 font-mono text-sm">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

function Page({ number, title, children }) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <div className="flex items-center gap-3 mb-10">
        
        <h1
          className="text-3xl md:text-4xl font-bold tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h1>
      </div>
      {children}
    </section>
  );
}
function TypewriterWords() {
  const text = "Full Stack Developer ";
  const [displayed, setDisplayed] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    let timer;

    if (!deleting && index < text.length) {
      // Typing
      timer = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, 120);

    } else if (!deleting && index === text.length) {
      // Pause after finishing
      timer = setTimeout(() => {
        setDeleting(true);
      }, 1800);

    } else if (deleting && index > 0) {
      // Deleting
      timer = setTimeout(() => {
        setDisplayed(text.slice(0, index - 1));
        setIndex(index - 1);
      }, 70);

    } else if (deleting && index === 0) {
      // Pause before typing again
      timer = setTimeout(() => {
        setDeleting(false);
      }, 600);
    }

    return () => clearTimeout(timer);
  }, [index, deleting]);

  return (
    <span style={{ color: COLORS.ember }}>
      {displayed}
      <span className="typing-cursor">|</span>
    </span>
  );
}
function IntroPage() {
  return (
    <Page  title="Intro">
      <p
        className="text-3xl md:text-5xl font-bold leading-tight mb-4"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <p

>
  Hi I'm OTHMAN JAFARI,{" "}
  <TypewriterWords />
</p>
  
      </p>
      <p className="max-w-xl opacity-80 leading-relaxed">
        A second-year of Bachelor in Computer Science student in
        Arusha, Tanzania, learning full-stack development while working
        toward starting my own animation company. 
      </p>
      <div className="flex gap-3 mt-6">
        <Link
          to="/work"
          className="px-5 py-2 rounded-lg font-semibold text-sm"
          style={{ backgroundColor: COLORS.ember, color: COLORS.ink }}
        >
          See my work
        </Link>
        <Link
          to="/contact"
          className="px-5 py-2 rounded-lg font-semibold text-sm border"
          style={{ borderColor: COLORS.acacia }}
        >
          Get in touch
        </Link>
      </div>
    </Page>
  );
}

function AboutPage() {
  return (
    <Page  title="About Me">
      <div className="flex items-start gap-4">
        <GraduationCap
          size={28}
          style={{ color: COLORS.acacia }}
          className="shrink-0 mt-1"
        />
        <p className="max-w-2xl leading-relaxed opacity-90">
          I'm based in Dodoma, Tanzania, currently in my second year of 
          Bachelor in Computer Science and Information Technology , expecting to graduate in 2027. I'm a
           full-stack developer with a foundation in JavaScript,
          and I learn best by building real, working projects and picking
          apart how they work afterward. Outside of coding, I'm working
          toward a bigger goal: starting my own animation studio in Tanzania.
        </p>
      </div>
    </Page>
  );
}

function EducationPage() {
  return (
    <Page  title="Education & Stack">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <GraduationCap size={24} style={{ color: COLORS.ember }} />
          <h2 className="text-xl font-bold">
            Diploma in Computer Science — Year 2
          </h2>
        </div>
        <p className="opacity-70 ml-9">
          Expected graduation: 2027 · Focus: full-stack development
        </p>
      </div>
      <p className="text-sm font-mono mb-4 opacity-70">TECH I USE</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {SKILLS.map((skill) => (
          <SkillTag key={skill.name} name={skill.name} note={skill.note} />
        ))}
      </div>
    </Page>
  );
}

function WorkPage() {
  return (
    <Page  title="What I Do">
      <div className="grid md:grid-cols-2 gap-5">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {[
          ["Web Development", "Building websites and full-stack applications."],
          ["Mobile Development", "Creating mobile applications with Flutter."],
          ["Backend Development", "Working with PHP, MySQL and REST APIs."],
        ].map(([title, text]) => (
          <div
            key={title}
            className="rounded-xl border p-5"
            style={{ borderColor: COLORS.acacia }}
          >
            <h3 className="font-bold mb-2">{title}</h3>
            <p className="text-sm opacity-70 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </Page>
  );
}

function ContactPage() {
  return (
    <Page  title="Contact">
      <div className="max-w-2xl">
        <div className="flex items-start gap-4 mb-8">
          <Rocket size={28} style={{ color: COLORS.ember }} className="shrink-0" />
          <p className="opacity-90 leading-relaxed">
            Open to entry-level IT and development opportunities in Tanzania,
            for any kind of information feel free to check up on me the links below.
          </p>
        </div>
        <div className="space-y-4 font-mono text-sm"> 
          <a
  href="tel:+255686013965"
  className="flex items-center gap-3 hover:opacity-70"
>
  <Phone size={18} style={{ color: COLORS.ember }} />
  +255 686 013 965
</a>
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=othmanjafari5@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 hover:opacity-70"
>
  <Mail size={18} />
  EMAIL
</a>
          <a
            href="https://github.com/othmanjafari5-maker/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:opacity-70"
          >
            <ExternalLink size={18} style={{ color: COLORS.ember }} />
            GITHUB

          </a>
          <a
            href="https://www.linkedin.com/in/othman-jafari-8695b42a3/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:opacity-70"
          >
            <ExternalLink size={18} style={{ color: COLORS.ember }} />
            LINKEDIN
          </a>
        </div>
      </div>
    </Page>
  );
}

function NotFound() {
  return (
    <Page number="404" title="Page Not Found">
      <p className="opacity-70 mb-6">The page you're looking for does not exist.</p>
      <Link
        to="/"
        className="inline-block px-5 py-2 rounded-lg font-semibold text-sm"
        style={{ backgroundColor: COLORS.ember, color: COLORS.ink }}
      >
        Back to Intro
      </Link>
    </Page>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Mono:wght@400;600&family=Inter:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <BrowserRouter>
      <div
        className="min-h-screen"
        style={{
          backgroundColor: COLORS.night,
          color: COLORS.bone,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <Sidebar
          mobileOpen={menuOpen}
          setMobileOpen={setMenuOpen}
        />

        <main className="md:ml-20 transition-all duration-300">
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="md:ml-20 overflow-hidden py-2 border-t border-white/10">
          <div className="marquee">
            <div className="marquee-content">
              <span>Application Programmer</span>
              <span>Application Programmer</span>
              <span>Application Programmer</span>
              <span>Application Programmer</span>
              <span>Application Programmer</span>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}