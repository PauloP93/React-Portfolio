import CyberpunkH1 from "../components/CyberpunkTitle/CyberpunkH1";
import CyberTechLines from "../components/CyberpunkTechlines/CyberpunkTechLines";
import CyberpunkProjectTile from "../components/CyberpunkProjectTile/CyberpunkProjectTile";

export default function ProjectsPage({ Projects }) {
  let ProjectsMapped = Object.entries(Projects.projects);
  return (
    <>
      <section className="flex flex-row w-fit h-fit mb-8">
        <CyberpunkH1
          text="Projects"
          cssClasses="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-7"
        />
      </section>
      <div className="flex justify-center items-center m-auto w-ful h-fit">
        <CyberTechLines cssClasses="opacity-40 absolute top-1/2" />
      </div>
      <section>
        <div className="grid justify-center text-white lg:grid-cols-3 gap-6 items-center place-items-center">
          {ProjectsMapped.map(([key, currentProject]) => (
            <CyberpunkProjectTile
              key={key}
              projectKey={key}
              projectName={currentProject.title}
              projectDescription={currentProject.description}
              technologies={currentProject.technologies}
              type={currentProject.type}
            />
          ))}
        </div>
      </section>
    </>
  );
}
