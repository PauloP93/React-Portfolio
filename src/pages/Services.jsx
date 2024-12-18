import CyberpunkH1 from "../components/CyberpunkTitle/CyberpunkH1";
import CyberpunkBtn from "../components/CyberpunkButton/CyberpunkBtn";
import CyberTechLines from "../components/CyberpunkTechlines/CyberpunkTechLines";
import CyberpunkServiceTile from "../components/CyberpunkServiceTile/CyberpunkServiceTile";
import "./Services.css";

export default function ServicesPage({ Services }) {
  let ServicesMapped = Object.entries(Services);

  return (
    <>
      <section className="flex flex-row w-fit h-fit mb-8">
        <CyberpunkH1 text="Services" cssClasses="text-6xl mb-7" />
      </section>
      <div className="flex justify-center items-center m-auto w-ful h-fit">
        <CyberTechLines cssClasses="opacity-40 absolute top-1/2" />
      </div>
      <section>
        <div className="grid justify-center text-white grid-cols-3 gap-6 items-center place-items-center">
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
      <section className="flex flex-col w-full h-fit p-4 mt-[10em] relative">
        <h2 className="text-4xl font-bold services-contact-section">
          Didn't find what you were looking for ?
        </h2>
        <br />
        <span className="text-white text-xl tomorrow-semibold relative text-center mt-3">
          Contact me to see how I can help you
        </span>
        <CyberpunkBtn text="Contact me" cssClasses={"mt-3 items-center relative m-auto"} />
      </section>
    </>
  );
}
