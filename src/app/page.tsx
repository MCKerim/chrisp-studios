import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <>
      <div
        className="hero h-screen"
        style={{
          backgroundImage: "url(/colorBg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              ChrisP Studios
            </h1>
            <p className="mb-5 text-white">
              Small indie gamedev studio located in germany
            </p>
            <button className="btn">Play Games</button>
          </div>
        </div>
      </div>
      
      <AboutSection />

      <div className="divider"></div>

      <ProjectsSection />
    </>
  );
}
