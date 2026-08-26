import React, { useState, useEffect } from "react";
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
  Layers,
} from "lucide-react";

const COLORS = {
  night: "#003152",
  paper: "#ADDFF1",
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
    url: "{https://smart-garage-kappa.vercel.app/}",
    tags: ["Flutter", "PHP", "MySQL", "REST API"],
  },
];

const NAV_ITEMS = [
  { id: "intro", label: "Intro", icon: Home },
  { id: "about", label: "About", icon: UserRound },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "technologies", label: "Tech Stack", icon: Layers },
  { id: "projects", label: "My Projects", icon: BriefcaseBusiness },
  { id: "work", label: "What I Do", icon: Rocket },
  { id: "contact", label: "Contact", icon: Mail },
];

function SkillTag({ name, note, index = 0 }) {
  return (
    <div
      className="tech-chip rounded-lg border px-4 py-3 flex flex-col gap-1 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default"
      style={{
        borderColor: COLORS.acacia,
        backgroundColor: "transparent",
        animationDelay: `${index * 0.15}s`,
      }}
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
      className="rounded-xl p-6 flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{ backgroundColor: COLORS.paper, color: COLORS.ink }}
    >
      <div className="flex items-center justify-between">
        <ArrowUpRight size={18} style={{ color: COLORS.acacia }} />
      </div>

      <h3 className="text-xl font-bold">{project.title}</h3>

      <p className="text-sm font-semibold" style={{ color: COLORS.acacia }}>
        {project.role}
      </p>

      <p className="text-sm leading-relaxed opacity-90">
        {project.description}
      </p>

      <p className="text-xs font-mono opacity-70 mt-1">
        Requirements: {project.tags.join(", ")}
      </p>

      <a
        href='{https://smart-garage-kappa.vercel.app/}'
        target="_blank"
        rel="noopener noreferrer"
        className="smart-garage-link group inline-flex items-center gap-2 self-start mt-3 px-5 py-2.5 rounded-full text-sm font-semibold"
      >
        <span>Visit Smart Garage</span>
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </a>
    </div>
  );
}

function Sidebar({ mobileOpen, setMobileOpen, activeSection, scrollToSection }) {
  return (
    <>
      <aside
        className="
          peer
          hidden md:flex fixed left-0 top-0 bottom-0 z-50
          w-20 hover:w-64 group
          flex-col border-r overflow-hidden
          transition-all duration-700 ease-in-out shadow-2xl
        "
        style={{
          backgroundColor: COLORS.night,
          borderColor: "#2a2e4a",
        }}
      >
        <button
          className="h-20 flex items-center px-5 shrink-0"
          onClick={() => scrollToSection("intro")}
        >
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

            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div
                className="font-bold tracking-wide"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                OTHMAN
              </div>
              <div className="text-xs opacity-50">PORTFOLIO</div>
            </div>
          </div>
        </button>

        <nav className="flex flex-col gap-2 px-3 mt-6">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`relative flex items-center gap-4 h-12 px-3 rounded-xl
                   min-w-max transition-all duration-200 hover:translate-x-1
                   ${isActive ? "ring-1" : ""}`}
                style={{
                  color: COLORS.bone,
                  backgroundColor: isActive ? "#242942" : "transparent",
                }}
              >
                <Icon
                  size={21}
                  className="shrink-0"
                  style={{ color: COLORS.ember }}
                />

                <span className="font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

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

            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <p className="text-sm font-semibold whitespace-nowrap">
                Software Developer
              </p>
              <p className="text-xs opacity-50 whitespace-nowrap">
                Dodoma, Tanzania
              </p>
            </div>
          </div>
        </div>
      </aside>

      <header
        className="md:hidden sticky top-0 z-50 border-b"
        style={{
          backgroundColor: COLORS.night,
          borderColor: "#2a2e4a",
        }}
      >
        <div className="px-4 py-4 flex items-center justify-between">
          <button
            className="flex items-center gap-2"
            onClick={() => scrollToSection("intro")}
          >
            <Film size={20} style={{ color: COLORS.ember }} />
            <span
              className="font-bold tracking-wide"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              OTHMAN
            </span>
          </button>

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
              <button
                key={item.id}
                type="button"
                className="text-left"
                style={{
                  color:
                    activeSection === item.id ? COLORS.ember : COLORS.bone,
                }}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-start max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-24 scroll-mt-20 relative"
    >
      {/* Digital decorative line */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-[#2E7C6E]/30 to-transparent" />
      
      <h1
        className="heading-shimmer text-3xl md:text-4xl font-bold tracking-tight mb-10"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {title}
      </h1>
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
      timer = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, 120);
    } else if (!deleting && index === text.length) {
      timer = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && index > 0) {
      timer = setTimeout(() => {
        setDisplayed(text.slice(0, index - 1));
        setIndex(index - 1);
      }, 70);
    } else if (deleting && index === 0) {
      timer = setTimeout(() => setDeleting(false), 600);
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

function IntroSection({ isVisible }) {
  return (
    <Section id="intro" title="Introduction">
      <div className="max-w-3xl">
        <p
          className="text-3xl md:text-5xl font-bold leading-tight mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Hi I'm OTHMAN JAFARI a, <TypewriterWords />
        </p>

        <div
          className={`transition-all duration-[2500ms] ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          <p className="max-w-xl opacity-80 leading-relaxed">
            A second-year of Bachelor in Computer Science student in Arusha,
            Tanzania, learning full-stack development while working toward
            starting my own animation company.
          </p>

          <div className="flex gap-3 mt-6">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="px-5 py-2 rounded-lg font-semibold text-sm"
              style={{ backgroundColor: COLORS.ember, color: COLORS.ink }}
            >
              See my work
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="px-5 py-2 rounded-lg font-semibold text-sm border"
              style={{ borderColor: COLORS.acacia }}
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function AboutSection({ isVisible }) {
  return (
    <Section id="about" title="About Me">
      <div
        className={`flex items-start gap-4 transition-all duration-[2500ms] ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <GraduationCap
          size={28}
          style={{ color: COLORS.acacia }}
          className="shrink-0 mt-1"
        />

        <p className="max-w-2xl leading-relaxed opacity-90">
          I'm based in Dodoma, Tanzania, currently in my second year of
          Bachelor in Computer Science and Information Technology, expecting
          to graduate in 2027. I'm a full-stack developer with a foundation in
          JavaScript, and I learn best by building real, working projects and
          picking apart how they work afterward. Outside of coding, I'm
          working toward a bigger goal: starting my own animation studio in
          Tanzania.
        </p>
      </div>
    </Section>
  );
}

function EducationSection() {
  return (
    <Section id="education" title="Education & Stack">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <GraduationCap size={24} style={{ color: COLORS.ember }} />
          <h2 className="text-xl font-bold">
            Bachelor in Computer Science — Year 2
          </h2>
        </div>

        <p className="opacity-70 ml-9">
          Expected graduation: 2027 · Focus: full-stack development
        </p>
      </div>
    </Section>
  );
}

function TechnologiesSection() {
  return (
    <Section id="technologies" title="Technologies I Use">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {SKILLS.map((skill, index) => (
          <SkillTag
            key={skill.name}
            name={skill.name}
            note={skill.note}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}

function ProjectsSection() {
  return (
    <Section id="projects" title="My Projects">
      <div className="grid md:grid-cols-2 gap-5">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}

function WorkSection() {
  return (
    <Section id="work" title="What I Do">
      <div className="grid md:grid-cols-3 gap-4">
        {[
          [
            "Web Development",
            "Building websites and full-stack applications.",
          ],
          ["Mobile Development", "Creating mobile applications with Flutter."],
          ["Backend Development", "Working with PHP, MySQL REST APIs and different types of CMS."],
        ].map(([title, text]) => (
          <div key={title} className="dev-card rounded-xl p-5 font-mono">
            <p className="text-xs mb-2" style={{ color: "#22d3ee" }}>
              &gt; {title.toLowerCase().replace(/\s+/g, "_")}.run()
            </p>
            <h3 className="font-bold mb-2 text-sm tracking-wide">{title}</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              {text}
              <span className="dev-cursor">_</span>
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      <div className="max-w-2xl">
        <div className="flex items-start gap-4 mb-8">
          <Rocket
            size={28}
            style={{ color: COLORS.ember }}
            className="shrink-0"
          />

          <p className="opacity-90 leading-relaxed">
            Open to entry-level IT and development opportunities in Tanzania,
            for any kind of information feel free to check up on me the links
            below.
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
    </Section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [visibleSections, setVisibleSections] = useState({
    intro: true,
    about: false,
  });

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Mono:wght@400;600&family=Inter:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting) {
            setActiveSection(id);

            if (id === "intro" || id === "about") {
              setVisibleSections((prev) => ({
                ...prev,
                [id]: true,
              }));
            }
          } else if (id === "intro" || id === "about") {
            setVisibleSections((prev) => ({
              ...prev,
              [id]: false,
            }));
          }
        });
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0,
      }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden bg-animated-gradient"
      style={{
        color: COLORS.bone,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>{`
        /* Animated gradient background */
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .bg-animated-gradient {
          background: linear-gradient(-45deg, #003152, #0a4a6e, #1a5a7e, #003152);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }

        /* Dot grid pattern */
        .dot-grid {
          background-image: radial-gradient(circle, rgba(173, 223, 241, 0.08) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        /* Floating shapes animation */
        @keyframes float-shape {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .floating-shape {
          animation: float-shape 6s ease-in-out infinite;
        }

        .floating-shape:nth-child(2) {
          animation-delay: -2s;
        }
        .floating-shape:nth-child(3) {
          animation-delay: -4s;
        }

        /* Glow pulse */
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        .glow-pulse {
          animation: glow-pulse 4s ease-in-out infinite;
        }

        @keyframes heading-shimmer-move {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .heading-shimmer {
          background: linear-gradient(
            90deg,
            #d8c4f0 0%,
            #9b7fc7 25%,
            #5b4a7a 50%,
            #9b7fc7 75%,
            #d8c4f0 100%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: heading-shimmer-move 9s ease-in-out infinite;
          text-transform: uppercase;
        }

        @keyframes tech-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .tech-chip {
          animation: tech-float 3.2s ease-in-out infinite;
        }
        .tech-chip:hover {
          border-color: ${COLORS.ember};
          box-shadow: 0 0 18px rgba(224, 145, 61, 0.45);
        }

        .smart-garage-link {
          position: relative;
          overflow: hidden;
          color: ${COLORS.bone};
          background: linear-gradient(135deg, ${COLORS.acacia}, ${COLORS.night});
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .smart-garage-link:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 8px 22px rgba(46, 124, 110, 0.55);
        }
        .smart-garage-link::before {
          content: "";
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.35),
            transparent
          );
          transform: skewX(-20deg);
          transition: left 0.6s ease;
        }
        .smart-garage-link:hover::before {
          left: 130%;
        }

        /* Developer / terminal style cards */
        .dev-card {
          position: relative;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(34, 211, 238, 0.25);
          transition: border-color 0.3s ease, box-shadow 0.3s ease,
            transform 0.3s ease;
        }
        .dev-card:hover {
          border-color: #22d3ee;
          box-shadow: 0 0 22px rgba(34, 211, 238, 0.35);
          transform: translateY(-4px);
        }
        .dev-card::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: -20%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(34, 211, 238, 0.9),
            transparent
          );
          animation: dev-scan 2.8s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .dev-card:hover::after {
          opacity: 1;
        }
        @keyframes dev-scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        .dev-cursor {
          display: inline-block;
          color: #22d3ee;
          animation: dev-blink 1s step-end infinite;
        }
        @keyframes dev-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        /* Typing cursor */
        .typing-cursor {
          display: inline-block;
          animation: dev-blink 1s step-end infinite;
        }
      `}</style>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* Floating decorative shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Hexagon shape */}
        <div
          className="floating-shape absolute top-20 left-10 w-32 h-32 opacity-10"
          style={{
            background: COLORS.ember,
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        />

        {/* Circle glow */}
        <div
          className="glow-pulse absolute bottom-40 right-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ background: COLORS.acacia }}
        />

        {/* Code bracket shape */}
        <div
          className="floating-shape absolute top-1/3 left-1/4 text-9xl font-mono opacity-5"
          style={{ color: COLORS.paper }}
        >
          {"{ }"}
        </div>

        {/* Square shape */}
        <div
          className="floating-shape absolute bottom-20 left-1/3 w-24 h-24 opacity-10"
          style={{
            background: COLORS.paper,
            clipPath:
              "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            transform: "rotate(45deg)",
          }}
        />

        {/* Triangle shape */}
        <div
          className="floating-shape absolute top-2/3 right-1/4 w-20 h-20 opacity-10"
          style={{
            background: COLORS.ember,
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />

        {/* Small dots/particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full glow-pulse"
            style={{
              width: Math.random() * 8 + 4 + "px",
              height: Math.random() * 8 + 4 + "px",
              background: i % 2 === 0 ? COLORS.ember : COLORS.acacia,
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: 0.15,
              animationDelay: `-${Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Additional code-like decorative text */}
        <div
          className="floating-shape absolute bottom-1/4 right-10 text-7xl font-mono opacity-5"
          style={{ color: COLORS.acacia }}
        >
          {"</>"}
        </div>

        <div
          className="floating-shape absolute top-10 right-1/3 text-6xl font-mono opacity-5"
          style={{ color: COLORS.ember }}
        >
          {"() =>"}
        </div>
      </div>

      <Sidebar
        mobileOpen={menuOpen}
        setMobileOpen={setMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main
        className="
          md:ml-20
          md:peer-hover:ml-64
          transition-[margin-left]
          duration-700
          ease-in-out
          relative z-10
        "
      >
        <IntroSection isVisible={visibleSections.intro} />
        <AboutSection isVisible={visibleSections.about} />
        <EducationSection />
        <TechnologiesSection />
        <ProjectsSection />
        <WorkSection />
        <ContactSection />
      </main>

     <footer className="md:ml-20 overflow-hidden py-4 border-t border-white/10 relative z-10">
  <div className="flex flex-col items-center gap-3">
    {/* Social Media Icons with Labels - Center */}
    <div className="flex items-center justify-center gap-8">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/i.y.m_von/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110 group"
        aria-label="Instagram"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/70 group-hover:text-[#E0913D] transition-colors duration-300"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
        <span className="text-[10px] font-mono text-white/40 group-hover:text-white/70 transition-colors duration-300 tracking-wider uppercase">
          Instagram
        </span>
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/Streintz"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110 group"
        aria-label="Telegram"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/70 group-hover:text-[#E0913D] transition-colors duration-300"
        >
          <path d="M21.5 4.5L2.5 12.5L8.5 15.5L12.5 21.5L21.5 4.5Z" />
          <path d="M8.5 15.5L12.5 21.5L16.5 10.5" />
        </svg>
        <span className="text-[10px] font-mono text-white/40 group-hover:text-white/70 transition-colors duration-300 tracking-wider uppercase">
          Telegram
        </span>
      </a>

      {/* X (Twitter) */}
      <a
        href="https://twitter.com/othmanjafari"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110 group"
        aria-label="X (Twitter)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/70 group-hover:text-[#E0913D] transition-colors duration-300"
        >
          <path d="M4 4L11.731 12.2265L4 20" />
          <path d="M20 4L12.269 12.2265L20 20" />
          <path d="M11.731 12.2265L9.5 9.5" />
          <path d="M14.5 14.5L11.731 12.2265" />
        </svg>
        <span className="text-[10px] font-mono text-white/40 group-hover:text-white/70 transition-colors duration-300 tracking-wider uppercase">
          X
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/255686013965"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110 group"
        aria-label="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/70 group-hover:text-[#E0913D] transition-colors duration-300"
        >
          <path d="M21 11.5C21 16.1944 17.1944 20 12.5 20C10.9378 20 9.45529 19.5853 8.15714 18.8571L3 20L4.14286 14.8429C3.4147 13.5447 3 12.0622 3 10.5C3 5.80558 6.80558 2 11.5 2C16.1944 2 20 5.80558 20 10.5V11.5Z" />
          <path d="M8.5 9C8.5 9.82843 9.17157 10.5 10 10.5C10.8284 10.5 11.5 9.82843 11.5 9C11.5 8.17157 10.8284 7.5 10 7.5C9.17157 7.5 8.5 8.17157 8.5 9Z" />
          <path d="M12.5 12.5C12.5 13.3284 13.1716 14 14 14C14.8284 14 15.5 13.3284 15.5 12.5C15.5 11.6716 14.8284 11 14 11C13.1716 11 12.5 11.6716 12.5 12.5Z" />
        </svg>
        <span className="text-[10px] font-mono text-white/40 group-hover:text-white/70 transition-colors duration-300 tracking-wider uppercase">
          WhatsApp
        </span>
      </a>
    </div>

    {/* Marquee Text */}
    <div className="marquee w-full">
      <div className="marquee-content">
        <span>Application Programmer</span>
        <span>Application Programmer</span>
        <span>Application Programmer</span>
        <span>Application Programmer</span>
        <span>Application Programmer</span>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}
