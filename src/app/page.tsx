import AboutSection from "./components/Sections/AboutSection/AboutSection";
import SocialMediaSection from "./components/Sections/SocialMediaSection/SocialMediaSection";
import ProjectsSection from "./components/Sections/ProjectsSection/ProjectsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        id="section-home"
        className="hero h-screen"
        style={{
          backgroundImage: "url(/Background.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <Image src="/Logo.png" width={800} height={800} alt="Logo" />
        </div>
      </div>
      
      <div id="section-about" />
      <AboutSection />

      <div className="divider" id="section-projects"/>
      <ProjectsSection />

      <div className="divider" id="section-socialMedia"/>
      <SocialMediaSection />
    </>
  );
}

