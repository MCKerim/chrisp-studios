import hover from "./hover.module.css";

export default function ProjectCard() {
  return (
    <div className={hover.main_div}>
      <div className={hover.overlay_div}>
        <p
          style={{
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          Moon Raccoon
        </p>
      </div>
    </div>
  );
}
