import CyberpunkH1 from "../components/CyberpunkTitle/CyberpunkH1";
import CyberTechLines from "../components/CyberpunkTechlines/CyberpunkTechLines";
import CyberpunkServiceTile from "../components/CyberpunkServiceTile/CyberpunkServiceTile";

export default function ServicesPage({ Services }) {
  let ServicesMapped = Object.entries(Services);

  return (
    <>
      <section className="flex flex-row w-fit h-fit">
        <CyberpunkH1 text="Services" cssClasses="text-6xl mb-7" />
      </section>
      <div className="flex justify-center items-center m-auto w-full">
        <CyberTechLines cssClasses="opacity-40 absolute top-1/2" />
      </div>
      <section>
        <div className="grid text-white grid-cols-4 gap-3">
          {ServicesMapped.map(([key, currentService]) => {
            return (
              <CyberpunkServiceTile
                serviceKey={key}
                ServiceTitle={currentService.service}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
