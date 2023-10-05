import ProjectCard from "../../Molecules/ProjectCard/ProjectCard"

export default function ProjectsSection() {
  return (
    <div className="container my-24 mx-auto md:px-6" id="section-projects">
      <section className="mb-32 text-center lg:text-left">
        <h2 className="mb-12 text-center text-4xl font-bold">Our Projects</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          <ProjectCard title="Moon Raccoon" image="/unnamed.jpg" link="https://play.google.com/store/apps/details?id=com.MCKerim.ThinkBright" />
          <ProjectCard title="Moon Raccoon 2" image="/unnamed.jpg" link="https://play.google.com/store/apps/details?id=com.MCKerim.ThinkBright" />
          <ProjectCard title="Subway Surfer" image="/unnamed.jpg" link="https://play.google.com/store/apps/details?id=com.MCKerim.ThinkBright" />
          <ProjectCard title="GTA 5" image="/unnamed.jpg" link="https://play.google.com/store/apps/details?id=com.MCKerim.ThinkBright" />
        </div>
      </section>
    </div>
  );
}
