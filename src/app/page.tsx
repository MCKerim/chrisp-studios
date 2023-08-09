import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        id="section-home"
        className="hero h-screen"
        style={{
          backgroundImage: "url(/black-golden-colored-wallpaper.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <Image src="/Logo.png" width={800} height={800} alt="Logo" />
        </div>
      </div>

      <AboutSection />

      <div className="divider"></div>

      <ProjectsSection />
    </>
  );
}

