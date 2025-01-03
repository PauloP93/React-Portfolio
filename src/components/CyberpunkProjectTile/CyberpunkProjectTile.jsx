import "./CyberpunkProjectTile.css";

export default function CyberpunkProjectTile({ ...props }) {
  return (
    <>
      <div
        key={props.projectKey}
        className="cyberpunk-project-tile h-full lg:w-[27em] lg:h-[22em]"
      >
        <span className="tomorrow-bold">{props.projectName}</span>
        <hr className="text-white w-full mt-[1.2em]" />
        <span className="tomorrow-light"> {props.projectDescription}</span>
        <hr className="text-white w-full mt-[3em]" />
        <label className="tomorrow-semibold mb-4">Tech Stack</label>
        <div className="tech-stack p-2 flex flex-row flex-wrap w-fit">
          {props.technologies.map((tech) =>
            tech.img !== "" ? (
              <img
                className="w-12 h-12 ml-4 mb-2"
                src={tech.img}
                key={tech.tech}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            ) : (
              <span className="mr-2 flex items-center justify-center">
                {tech.tech}
              </span>
            )
          )}
        </div>
      </div>
    </>
  );
}
