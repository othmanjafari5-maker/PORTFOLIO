
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Canvas,
  useFrame,
} from "@react-three/fiber";
import {
  Float,
  Html,
  Line,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
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
  ChevronDown,
  CarFront,
  MapPinned,
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
  { name: "Three.js", note: "3D web experiences" },
];

const PROJECTS = [
  {
    title: "Smart Garage",
    role: "Flutter frontend + PHP/MySQL backend",
    description:
      "A vehicle assistance platform connecting drivers with nearby garages and emergency mechanical support. Rebuilding the original website as a mobile app while keeping the existing PHP backend.",
    url: "https://smart-garage-kappa.vercel.app/",
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

function TypewriterWords() {
  const text = "Full Stack Developer ";
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timer;
    if (!deleting && index < text.length) {
      timer = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex((v) => v + 1);
      }, 120);
    } else if (!deleting && index === text.length) {
      timer = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && index > 0) {
      timer = setTimeout(() => {
        setDisplayed(text.slice(0, index - 1));
        setIndex((v) => v - 1);
      }, 70);
    } else {
      timer = setTimeout(() => setDeleting(false), 600);
    }
    return () => clearTimeout(timer);
  }, [index, deleting]);

  return (
    <span style={{ color: COLORS.ember }}>
      {displayed}<span className="typing-cursor">|</span>
    </span>
  );
}

function Section({ id, title, children, className = "" }) {
  return (
    <section
      id={id}
      className={`min-h-screen max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-28 md:pb-24 scroll-mt-20 relative ${className}`}
    >
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

function Sidebar({ mobileOpen, setMobileOpen, activeSection, scrollToSection }) {
  return (
    <>
      <aside
        className="peer hidden md:flex fixed left-0 top-0 bottom-0 z-50 w-20 hover:w-64 group flex-col border-r overflow-hidden transition-all duration-700 ease-in-out shadow-2xl"
        style={{ backgroundColor: COLORS.night, borderColor: "#2a2e4a" }}
      >
        <button className="h-20 flex items-center px-5 shrink-0" onClick={() => scrollToSection("intro")}>
          <div className="flex items-center gap-4 min-w-max">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: COLORS.ember, color: COLORS.ink }}>
              <Film size={21} />
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="font-bold tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>OTHMAN</div>
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
                className={`relative flex items-center gap-4 h-12 px-3 rounded-xl min-w-max transition-all duration-200 hover:translate-x-1 ${isActive ? "ring-1" : ""}`}
                style={{ color: COLORS.bone, backgroundColor: isActive ? "#242942" : "transparent" }}
              >
                <Icon size={21} className="shrink-0" style={{ color: COLORS.ember }} />
                <span className="font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 whitespace-nowrap">{item.label}</span>
                {isActive && <span className="absolute left-0 w-1 h-6 rounded-r-full" style={{ backgroundColor: COLORS.ember }} />}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto px-5 pb-6 min-w-max">
          <div className="flex items-center gap-3 border-t pt-5" style={{ borderColor: "#2a2e4a" }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: COLORS.acacia, color: COLORS.bone }}>
              <Code2 size={17} />
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <p className="text-sm font-semibold whitespace-nowrap">Software Developer</p>
              <p className="text-xs opacity-50 whitespace-nowrap">Tanzania</p>
            </div>
          </div>
        </div>
      </aside>

      <header className="md:hidden sticky top-0 z-50 border-b" style={{ backgroundColor: COLORS.night, borderColor: "#2a2e4a" }}>
        <div className="px-4 py-4 flex items-center justify-between">
          <button className="flex items-center gap-2" onClick={() => scrollToSection("intro")}>
            <Film size={20} style={{ color: COLORS.ember }} />
            <span className="font-bold tracking-wide">OTHMAN</span>
          </button>
          <button className="p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {mobileOpen && (
          <nav className="flex flex-col px-4 pb-4 gap-3 font-mono text-sm">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} type="button" className="text-left" style={{ color: activeSection === item.id ? COLORS.ember : COLORS.bone }} onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

function Roadmap({ activeSection, scrollToSection, progress }) {
  const route = [
    { x: 38, y: 34 },
    { x: 105, y: 78 },
    { x: 65, y: 130 },
    { x: 145, y: 181 },
    { x: 92, y: 235 },
    { x: 154, y: 288 },
    { x: 78, y: 340 },
  ];

  const getCarPosition = (value) => {
    const p = Math.min(0.999, Math.max(0, value));
    const scaled = p * (route.length - 1);
    const i = Math.floor(scaled);
    const t = scaled - i;
    const a = route[i];
    const b = route[Math.min(route.length - 1, i + 1)];
    return {
      x: a.x + (b.x - a.x) * t,
      y: a.y + (b.y - a.y) * t,
      angle: Math.atan2(b.y - a.y, b.x - a.x) * (180 / Math.PI),
    };
  };

  const car = getCarPosition(progress);
  const activeIndex = Math.max(0, NAV_ITEMS.findIndex((item) => item.id === activeSection));
  const completion = Math.round(progress * 100);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block w-56">
      <div
        className="rounded-2xl border backdrop-blur-xl p-3 shadow-2xl overflow-hidden"
        style={{
          background: "rgba(0,35,57,.94)",
          borderColor: "rgba(173,223,241,.2)",
          boxShadow: "0 20px 60px rgba(0,0,0,.35)",
        }}
      >
        <div className="flex items-center justify-between px-1 mb-2">
          <div className="flex items-center gap-2">
            <MapPinned size={15} style={{ color: COLORS.ember }} />
            <div>
              <p className="text-[9px] uppercase tracking-[.25em] text-white/40">My roadmap</p>
              <h3 className="font-bold text-base leading-tight">Journey Map</h3>
            </div>
          </div>
          <span className="font-mono text-xs font-bold" style={{ color: COLORS.ember }}>{completion}%</span>
        </div>

        <div className="h-1 rounded-full bg-white/10 overflow-hidden mb-3">
          <div
            className="h-full transition-[width] duration-150"
            style={{ width: `${completion}%`, background: `linear-gradient(90deg, ${COLORS.ember}, ${COLORS.acacia})` }}
          />
        </div>

        <div
          className="relative rounded-xl overflow-hidden border"
          style={{
            height: 390,
            background: "linear-gradient(145deg,#0b536e 0%,#07506b 42%,#164f59 100%)",
            borderColor: "rgba(255,255,255,.1)",
          }}
        >
          {/* Map terrain */}
          <div className="absolute inset-0 opacity-30 map-grid" />
          <div className="absolute -right-8 top-12 w-28 h-44 rounded-full bg-cyan-300/10 blur-2xl rotate-12" />
          <div className="absolute -left-10 bottom-12 w-32 h-28 rounded-full bg-emerald-300/10 blur-2xl" />

          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 360"
            preserveAspectRatio="none"
            aria-label="Portfolio journey map"
          >
            {/* small streets */}
            <path d="M0 60 C35 52 45 65 76 54 S130 28 200 42" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="7" />
            <path d="M0 160 C40 145 60 165 92 150 S150 125 200 140" fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="6" />
            <path d="M20 360 C50 320 50 285 32 250 S48 185 20 140" fill="none" stroke="rgba(255,255,255,.09)" strokeWidth="5" />

            {/* main driving road */}
            <polyline
              points={route.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke="rgba(0,0,0,.28)"
              strokeWidth="13"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points={route.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke="#e9e2cc"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points={route.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke="#667078"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points={route.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke="#f4c95d"
              strokeWidth="1.8"
              strokeDasharray="5 5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity=".9"
            />

            {/* destination markers */}
            {route.map((point, index) => {
              const item = NAV_ITEMS[index];
              const active = index === activeIndex;
              const visited = index <= activeIndex;
              return (
                <g key={item.id} onClick={() => scrollToSection(item.id)} style={{ cursor: "pointer" }}>
                  <circle cx={point.x} cy={point.y} r={active ? 8 : 6} fill={active ? COLORS.ember : visited ? COLORS.acacia : "#163947"} stroke="#f7f5ef" strokeWidth="1.5" />
                  <circle cx={point.x} cy={point.y} r="2" fill="#fff" />
                </g>
              );
            })}
          </svg>

          {/* Map labels */}
          {NAV_ITEMS.map((item, index) => {
            const point = route[index];
            const left = `${(point.x / 200) * 100}%`;
            const top = `${(point.y / 360) * 100}%`;
            const active = item.id === activeSection;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="absolute -translate-x-1/2 flex items-center gap-1.5 group"
                style={{ left, top, transform: "translate(-50%, -50%) translateY(-16px)" }}
                title={`Go to ${item.label}`}
              >
                <span className={`text-[8px] font-bold whitespace-nowrap px-1.5 py-1 rounded-md border backdrop-blur-sm transition-all ${active ? "scale-110" : "opacity-70 group-hover:opacity-100"}`} style={{ background: active ? "rgba(224,145,61,.92)" : "rgba(0,35,57,.78)", borderColor: active ? COLORS.ember : "rgba(255,255,255,.13)", color: active ? COLORS.ink : COLORS.bone }}>
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* Moving car */}
          <div
            className="absolute z-20 pointer-events-none transition-[left,top] duration-150 ease-linear"
            style={{ left: `${(car.x / 200) * 100}%`, top: `${(car.y / 360) * 100}%` }}
          >
            <div style={{ transform: `translate(-50%, -50%) rotate(${car.angle + 90}deg)` }}>
              <div className="roadmap-car-glow" />
              <div className="roadmap-car">
                <CarFront size={18} strokeWidth={2.5} />
              </div>
            </div>
          </div>

          <div className="absolute left-2 bottom-2 right-2 flex items-center justify-between px-2 py-1.5 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
            <span className="text-[8px] uppercase tracking-[.18em] text-white/45">You are here</span>
            <span className="text-[9px] font-semibold" style={{ color: COLORS.ember }}>{NAV_ITEMS[activeIndex]?.label}</span>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between px-1 text-[8px] uppercase tracking-[.16em] text-white/35">
          <span>scroll to drive</span>
          <span>↕ forward / reverse</span>
        </div>
      </div>
    </div>
  );
}

function SceneShell({ children, height = "min-h-[115vh]" }) {
  return <div className={`relative ${height}`}>{children}</div>;
}

function EducationScene({ progress }) {
  const nodes = useMemo(() => [
    { p: [-3.8, -1.3, 0], label: "Foundation", year: "2022" },
    { p: [-1.8, 0.3, -0.2], label: "Computer Science", year: "2024" },
    { p: [0.4, -0.2, 0.4], label: "Year 2", year: "2026" },
    { p: [2.3, 0.8, -0.1], label: "Graduation", year: "2027" },
  ], []);

  const group = useRef();
  const cameraTarget = useRef();
  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime();
    const p = progress;
    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.18) * 0.08 + p * 0.2;
      group.current.position.y = Math.sin(t * 0.7) * 0.06;
    }
    camera.position.x += ((p - 0.5) * 2.2 - camera.position.x) * 0.04;
    camera.position.y += ((1.0 + Math.sin(p * Math.PI) * 0.8) - camera.position.y) * 0.04;
    camera.position.z += ((8.2 - p * 2.0) - camera.position.z) * 0.04;
    if (cameraTarget.current) {
      cameraTarget.current.position.x += ((p * 5 - 2.5) - cameraTarget.current.position.x) * 0.05;
    }
    camera.lookAt(cameraTarget.current?.position ?? [0, 0, 0]);
  });

  return (
    <>
      <color attach="background" args={["#021827"]} />
      <ambientLight intensity={1.4} />
      <directionalLight position={[3, 6, 5]} intensity={3} color="#ADDFF1" />
      <pointLight position={[-3, 2, 2]} intensity={15} distance={10} color="#E0913D" />
      <Sparkles count={110} scale={[11, 5, 5]} size={2} speed={0.35} color="#ADDFF1" />
      <group ref={group}>
        <Line
          points={[
            [-5, -1.7, 0], [-3.8, -1.3, 0], [-2.8, 0, 0.1], [-1.8, 0.3, -0.2],
            [-0.8, -0.6, 0.3], [0.4, -0.2, 0.4], [1.3, 0.5, 0], [2.3, 0.8, -0.1], [4, 1.4, 0],
          ]}
          color="#E0913D"
          lineWidth={3}
        />
        {nodes.map((node, i) => (
          <Float key={node.year} speed={1.2 + i * 0.12} rotationIntensity={0.2} floatIntensity={0.25}>
            <group position={node.p}>
              <mesh>
                <sphereGeometry args={[0.34, 32, 32]} />
                <meshStandardMaterial color={i <= Math.floor(progress * nodes.length) ? "#E0913D" : "#2E7C6E"} emissive={i <= Math.floor(progress * nodes.length) ? "#E0913D" : "#2E7C6E"} emissiveIntensity={1.3} />
              </mesh>
              <mesh position={[0, 0.35, 0]} rotation={[0.1, 0.2, 0]}>
                <torusGeometry args={[0.52, 0.035, 12, 48]} />
                <meshBasicMaterial color="#ADDFF1" transparent opacity={0.55} />
              </mesh>
              <Html distanceFactor={8} position={[0, 0.7, 0]} center>
                <div className="w-36 text-center pointer-events-none select-none">
                  <div className="text-[10px] font-mono opacity-50">{node.year}</div>
                  <div className="text-xs font-bold text-white whitespace-nowrap">{node.label}</div>
                </div>
              </Html>
            </group>
          </Float>
        ))}
        <group ref={cameraTarget} position={[0, 0, 0]}>
          <mesh position={[0, 0, -0.3]}>
            <icosahedronGeometry args={[0.85, 2]} />
            <meshStandardMaterial color="#ADDFF1" wireframe transparent opacity={0.3} />
          </mesh>
        </group>
      </group>
    </>
  );
}

function TechNode({ skill, index, progress }) {
  const ref = useRef();
  const radius = 2.2 + (index % 3) * 0.7;
  const angle = (index / SKILLS.length) * Math.PI * 2;
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const a = angle + t * (0.12 + index * 0.008) + progress * Math.PI * 1.4;
    if (ref.current) {
      ref.current.position.x = Math.cos(a) * radius;
      ref.current.position.y = Math.sin(a * 1.15) * 1.35;
      ref.current.position.z = Math.sin(a) * radius * 0.8;
      ref.current.rotation.y = t * 0.35;
    }
  });
  return (
    <group ref={ref}>
      <mesh>
        <icosahedronGeometry args={[0.22, 1]} />
        <meshStandardMaterial color={index % 2 ? "#2E7C6E" : "#E0913D"} emissive={index % 2 ? "#2E7C6E" : "#E0913D"} emissiveIntensity={1.4} />
      </mesh>
      <Html distanceFactor={7} center>
        <div className="px-2 py-1 rounded-lg border text-center whitespace-nowrap backdrop-blur-md" style={{ background: "rgba(0,49,82,.75)", borderColor: index % 2 ? "#2E7C6E88" : "#E0913D88" }}>
          <div className="text-[11px] font-semibold text-white">{skill.name}</div>
          <div className="text-[8px] opacity-50 text-white">{skill.note}</div>
        </div>
      </Html>
    </group>
  );
}

function TechnologyScene({ progress }) {
  const core = useRef();
  useFrame(({ clock }) => {
    if (core.current) {
      core.current.rotation.x = clock.getElapsedTime() * 0.18 + progress * 2;
      core.current.rotation.y = clock.getElapsedTime() * 0.28 + progress * 3;
      core.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 1.3) * 0.06 + progress * 0.12);
    }
  });

  const ring = useMemo(() => Array.from({ length: 3 }, (_, i) => i), []);
  return (
    <>
      <color attach="background" args={["#021827"]} />
      <ambientLight intensity={1.2} />
      <pointLight position={[0, 2, 3]} intensity={18} distance={12} color="#E0913D" />
      <pointLight position={[-4, -2, -3]} intensity={12} distance={12} color="#2E7C6E" />
      <Sparkles count={140} scale={[10, 6, 8]} size={2} speed={0.45} color="#ADDFF1" />
      {ring.map((r) => (
        <mesh key={r} rotation={[r * 0.55, r * 0.35, r * 0.2]}>
          <torusGeometry args={[1.4 + r * 0.8, 0.018, 12, 100]} />
          <meshBasicMaterial color={r % 2 ? "#2E7C6E" : "#E0913D"} transparent opacity={0.35} />
        </mesh>
      ))}
      <group ref={core}>
        <mesh>
          <icosahedronGeometry args={[0.9, 2]} />
          <meshStandardMaterial color="#ADDFF1" wireframe transparent opacity={0.45} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.46, 32, 32]} />
          <meshStandardMaterial color="#E0913D" emissive="#E0913D" emissiveIntensity={2} />
        </mesh>
      </group>
      {SKILLS.map((skill, index) => <TechNode key={skill.name} skill={skill} index={index} progress={progress} />)}
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </>
  );
}

function ScrollScene({ type, sectionId }) {
  const ref = useRef();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = Math.max(1, rect.height - viewport);
      const p = Math.min(1, Math.max(0, -rect.top / total));
      setProgress(p);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className="relative min-h-[150vh]" id={sectionId}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <Canvas camera={{ position: [0, 1, 8], fov: 45 }} dpr={[1, 1.5]}>
          {type === "education" ? <EducationScene progress={progress} /> : <TechnologyScene progress={progress} />}
        </Canvas>
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,10,18,.5)_100%)]" />
        <div className="absolute left-6 bottom-10 md:left-12 md:bottom-14 max-w-md pointer-events-none">
          <p className="text-[10px] uppercase tracking-[.35em] text-white/40 mb-2">{type === "education" ? "Scroll-driven journey" : "Interactive technology field"}</p>
          <h2 className="text-2xl md:text-4xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {type === "education" ? "My education, as a journey." : "The tools behind my work."}
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/65">
            {type === "education"
              ? "Scroll through the path. The scene moves forward and backward with you."
              : "The technologies orbit, shift and respond as you move through this section."}
          </p>
        </div>
        <div className="absolute right-6 bottom-10 md:right-12 md:bottom-14 text-right pointer-events-none">
          <span className="font-mono text-xs text-white/40">{Math.round(progress * 100)}%</span>
          <div className="mt-2 w-28 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full transition-[width] duration-100" style={{ width: `${progress * 100}%`, background: COLORS.ember }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function IntroSection({ isVisible }) {
  return (
    <Section id="intro" title="Introduction">
      <div className="max-w-3xl">
        <p className="text-3xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Hi I'm OTHMAN JAFARI a, <TypewriterWords />
        </p>
        <div className={`transition-all duration-[2500ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`}>
          <p className="max-w-xl opacity-80 leading-relaxed">
            A second-year of Bachelor in Computer Science student in Arusha, Tanzania, learning full-stack development while working toward starting my own animation company.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }} className="px-5 py-2 rounded-lg font-semibold text-sm" style={{ backgroundColor: COLORS.ember, color: COLORS.ink }}>See my work</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="px-5 py-2 rounded-lg font-semibold text-sm border" style={{ borderColor: COLORS.acacia }}>Get in touch</a>

          </div>
        </div>
      </div>
    </Section>
  );
}

function AboutSection({ isVisible }) {
  return (
    <Section id="about" title="About Me">
      <div className={`flex items-start gap-4 transition-all duration-[2500ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`}>
        <GraduationCap size={28} style={{ color: COLORS.acacia }} className="shrink-0 mt-1" />
        <p className="max-w-2xl leading-relaxed opacity-90">
          I'm based in Dodoma, Tanzania, currently in my second year of Bachelor in Computer Science and Information Technology, expecting to graduate in 2027. I'm a full-stack developer with a foundation in JavaScript, and I learn best by building real, working projects and picking apart how they work afterward. Outside of coding, I'm working toward a bigger goal: starting my own animation studio in Tanzania.
        </p>
      </div>
    </Section>
  );
}

function EducationData() {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 -mt-[30vh] pb-20">
      <div className="rounded-2xl border backdrop-blur-xl p-6 md:p-8" style={{ background: "rgba(0,49,82,.82)", borderColor: "rgba(173,223,241,.16)" }}>
        <div className="flex items-start gap-4">
          <GraduationCap size={26} style={{ color: COLORS.ember }} />
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Bachelor in Computer Science — Year 2</h2>
            <p className="opacity-60 mt-2">Expected graduation: 2027 · Focus: full-stack development</p>
            <p className="opacity-75 mt-4 text-sm leading-relaxed">You can replace these milestone details with your actual school, university, dates and achievements.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechnologiesData() {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 -mt-[30vh] pb-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="rounded-xl border p-4 backdrop-blur-xl" style={{ background: "rgba(0,49,82,.78)", borderColor: "rgba(46,124,110,.45)" }}>
            <div className="font-semibold">{skill.name}</div>
            <div className="text-xs mt-1 opacity-50 font-mono">{skill.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <Section id="projects" title="My Projects">
      <div className="grid md:grid-cols-2 gap-5">
        {PROJECTS.map((project) => (
          <div key={project.title} className="rounded-xl p-6 flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl" style={{ backgroundColor: COLORS.paper, color: COLORS.ink }}>
            <div className="flex items-center justify-between"><ArrowUpRight size={18} style={{ color: COLORS.acacia }} /></div>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm font-semibold" style={{ color: COLORS.acacia }}>{project.role}</p>
            <p className="text-sm leading-relaxed opacity-90">{project.description}</p>
            <p className="text-xs font-mono opacity-70 mt-1">Requirements: {project.tags.join(", ")}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="smart-garage-link group inline-flex items-center gap-2 self-start mt-3 px-5 py-2.5 rounded-full text-sm font-semibold">
              <span>Visit Smart Garage</span><ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

function WorkSection() {
  const work = [
    ["Web Development", "Building websites and full-stack applications."],
    ["Mobile Development", "Creating mobile applications with Flutter."],
    ["Backend Development", "Working with PHP, MySQL REST APIs and different types of CMS."],
  ];
  return (
    <Section id="work" title="What I Do">
      <div className="grid md:grid-cols-3 gap-4">
        {work.map(([title, text]) => (
          <div key={title} className="dev-card rounded-xl p-5 font-mono">
            <p className="text-xs mb-2" style={{ color: "#22d3ee" }}>&gt; {title.toLowerCase().replace(/\s+/g, "_")}.run()</p>
            <h3 className="font-bold mb-2 text-sm tracking-wide">{title}</h3>
            <p className="text-sm opacity-70 leading-relaxed">{text}<span className="dev-cursor">_</span></p>
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
          <Rocket size={28} style={{ color: COLORS.ember }} className="shrink-0" />
          <p className="opacity-90 leading-relaxed">Open to entry-level IT and development opportunities in Tanzania, for any kind of information feel free to check up on me the links below.</p>
        </div>
        <div className="space-y-4 font-mono text-sm">
          <a href="tel:+255686013965" className="flex items-center gap-3 hover:opacity-70"><Phone size={18} style={{ color: COLORS.ember }} />+255 686 013 965</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=othmanjafari5@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-70"><Mail size={18} />EMAIL</a>
          <a href="https://github.com/othmanjafari5-maker/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:opacity-70"><ExternalLink size={18} style={{ color: COLORS.ember }} />GITHUB</a>
          <a href="https://www.linkedin.com/in/othman-jafari-8695b42a3/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:opacity-70"><ExternalLink size={18} style={{ color: COLORS.ember }} />LINKEDIN</a>
        </div>
      </div>
    </Section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [visibleSections, setVisibleSections] = useState({ intro: true, about: false });
  const [roadmapProgress, setRoadmapProgress] = useState(0);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Mono:wght@400;600&family=Inter:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          if (id === "intro" || id === "about") setVisibleSections((prev) => ({ ...prev, [id]: true }));
        }
      });
    }, { rootMargin: "-35% 0px -50% 0px", threshold: 0 });

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      setRoadmapProgress(window.scrollY / max);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-animated-gradient text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #003152; }
        @keyframes gradient-shift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        .bg-animated-gradient { background:linear-gradient(-45deg,#003152,#0a4a6e,#1a5a7e,#003152); background-size:400% 400%; animation:gradient-shift 15s ease infinite; }
        .dot-grid { background-image:radial-gradient(circle,rgba(173,223,241,.08) 1px,transparent 1px); background-size:30px 30px; }
        @keyframes heading-shimmer-move { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        .heading-shimmer { background:linear-gradient(90deg,#d8c4f0,#9b7fc7,#5b4a7a,#9b7fc7,#d8c4f0); background-size:250% auto; -webkit-background-clip:text; background-clip:text; color:transparent; animation:heading-shimmer-move 9s ease-in-out infinite; text-transform:uppercase; }
        @keyframes dev-blink { 0%,50%{opacity:1} 51%,100%{opacity:0} }
        .typing-cursor,.dev-cursor { animation:dev-blink 1s step-end infinite; }
        .smart-garage-link { color:${COLORS.bone}; background:linear-gradient(135deg,${COLORS.acacia},${COLORS.night}); box-shadow:0 4px 14px rgba(0,0,0,.25); transition:.3s ease; }
        .smart-garage-link:hover { transform:translateY(-2px) scale(1.04); box-shadow:0 8px 22px rgba(46,124,110,.55); }
        .dev-card { position:relative; overflow:hidden; background:rgba(0,0,0,.2); border:1px solid rgba(34,211,238,.25); transition:.3s ease; }
        .dev-card:hover { border-color:#22d3ee; box-shadow:0 0 22px rgba(34,211,238,.35); transform:translateY(-4px); }
        .map-grid { background-image: linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px); background-size:22px 22px; }
        .roadmap-car { width:28px; height:22px; border-radius:8px 8px 6px 6px; display:flex; align-items:center; justify-content:center; color:#101820; background:linear-gradient(145deg,#ffe58a,#E0913D); border:2px solid #fff6cf; box-shadow:0 3px 10px rgba(0,0,0,.45); }
        .roadmap-car-glow { position:absolute; width:42px; height:42px; left:50%; top:50%; transform:translate(-50%,-50%); border-radius:50%; background:rgba(224,145,61,.35); filter:blur(7px); animation:car-pulse 1.2s ease-in-out infinite; }
        @keyframes car-pulse { 0%,100%{opacity:.55;transform:translate(-50%,-50%) scale(.8)} 50%{opacity:1;transform:translate(-50%,-50%) scale(1.15)} }
      `}</style>

      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-24 left-10 w-32 h-32 opacity-10 rounded-full blur-2xl" style={{ background: COLORS.ember }} />
        <div className="absolute bottom-40 right-20 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ background: COLORS.acacia }} />
      </div>

      <Sidebar mobileOpen={menuOpen} setMobileOpen={setMenuOpen} activeSection={activeSection} scrollToSection={scrollToSection} />
      <Roadmap activeSection={activeSection} scrollToSection={scrollToSection} progress={roadmapProgress} />

      <main className="md:ml-20 md:mr-4 lg:mr-60 transition-[margin-left] duration-700 relative z-10">
        <IntroSection isVisible={visibleSections.intro} />
        <AboutSection isVisible={visibleSections.about} />

        <div id="education">
          <Section id="education-heading" title="Education Journey" className="min-h-0 pb-8">
            <p className="max-w-2xl opacity-70">Scroll through the scene to move through the stages of your education. You can replace the milestone data later.</p>
          </Section>
          <ScrollScene type="education" sectionId="education-scene" />
          <EducationData />
        </div>

        <div id="technologies">
          <Section id="technologies-heading" title="Technologies I Use" className="min-h-0 pb-8">
            <p className="max-w-2xl opacity-70">Your technology data stays visible while the 3D field moves behind it.</p>
          </Section>
          <ScrollScene type="technologies" sectionId="technology-scene" />
          <TechnologiesData />
        </div>

        <ProjectsSection />
        <WorkSection />
        <ContactSection />
      </main>

      <footer className="md:ml-20 overflow-hidden py-5 border-t border-white/10 relative z-10">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-8">
            <a href="https://www.instagram.com/i.y.m_von/" target="_blank" rel="noopener noreferrer" className="social-link flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110 group"><span className="text-white/60 group-hover:text-[#E0913D] text-xs">Instagram</span></a>
            <a href="https://t.me/Streintz" target="_blank" rel="noopener noreferrer" className="social-link flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110 group"><span className="text-white/60 group-hover:text-[#E0913D] text-xs">Telegram</span></a>
            <a href="https://twitter.com/othmanjafari" target="_blank" rel="noopener noreferrer" className="social-link flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110 group"><span className="text-white/60 group-hover:text-[#E0913D] text-xs">X</span></a>
            <a href="https://wa.me/255686013965" target="_blank" rel="noopener noreferrer" className="social-link flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110 group"><span className="text-white/60 group-hover:text-[#E0913D] text-xs">WhatsApp</span></a>
          </div>
          <div className="marquee w-full overflow-hidden">
            <div className="marquee-content flex gap-10 whitespace-nowrap">
              <span>Application Programmer</span><span>Application Programmer</span><span>Application Programmer</span><span>Application Programmer</span><span>Application Programmer</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}