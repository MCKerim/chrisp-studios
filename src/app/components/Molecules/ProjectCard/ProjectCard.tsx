import hover from "./hover.module.css";

// ProjectCard Props object
type ProjectCardProps = {
  title: string;
  image: string;
  link: string;
};

export default function ProjectCard({ title, image, link }: ProjectCardProps) {
  return (
    <div className={hover.main_div} style={{
      backgroundImage: `url(${image})`,
      aspectRatio: "9/16",
    }}>
      <div className={hover.overlay_div}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            {title}
          </p>
          <div style={{
            borderBottom: "1px",
            borderColor: "white",
            borderStyle: "solid",
          }} 
          />
          <div
            style={{
              marginTop: "10px",
            }}
          >
            <a
              style={{
                backgroundColor: "#fcd4a2",
                color: "black",
                borderRadius: "5px",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "5px",
                paddingBottom: "5px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
                textAlign: "center",
              }}
              href={link}
            >
              DOWNLOAD
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
