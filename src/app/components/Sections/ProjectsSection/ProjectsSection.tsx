import ProjectCard from "../../Molecules/ProjectCard/ProjectCard";
import { projects } from "../../../Data/Projects";

export default function ProjectsSection() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center lg:text-left">
        <h2 className="mb-12 text-center text-5xl font-bold">Our <span style={{ color: "#fcd4a2" }}>Proudest</span> Work</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
