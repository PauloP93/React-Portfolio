import CyberpunkTechLines from "../components/CyberpunkTechlines/CyberpunkTechLines";
import CyberpunkH1 from "../components/CyberpunkTitle/CyberpunkH1";
import SocialLink from "../components/Links/SocialLink.jsx";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

// TODO: Test the media query context and change the code to use it
export default function HomePage({ ...props }) {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1026px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  let sectionCss = "flex flex-row";
  sectionCss += isDesktop ? "pr-5" : "";

  return (
    <section className={sectionCss}>
      {isDesktop && (
        <>
          <div className="lg:w-1/2">
            <CyberpunkH1
              text="Paulo Pimenta"
              cssClasses="text-[3em] lg:text-8xl mb-7 md:text-[5em]"
            />
            <p className="text-[1.2em] text-white tomorrow-regular mb-3">
              {props.homeDescription}
            </p>
            <div className="flex flex-row p-0">
              <SocialLink
                img={<FaGithub className="lg:size-10 md:size-8 sm:size-7" />}
                link={props.github}
              />
              <SocialLink
                img={<FaLinkedin className="lg:size-10 md:size-8 sm:size-6" />}
                link={props.linkedin}
              />
              <SocialLink
                img={
                  <FaSquareUpwork className="lg:size-10 md:size-8 sm:size-6" />
                }
                link={props.upwork}
              />
            </div>
          </div>
          <div className="w-1/2">
            <CyberpunkTechLines />
          </div>
        </>
      )}

      {isTabletOrMobile && (
        <>
          <div className="items-center justify-center pt-5">
            <CyberpunkH1
              text="Paulo Pimenta"
              cssClasses="text-center text-[2.8em] sm:text-[4em] mb-6"
            />
            <p className="pt-5 text-[1.5em] sm:text-[1.5em] text-white break-words tomorrow-regular mb-3 text-center">
              {props.homeDescription}
            </p>
            <div className="relative inset-0 m-auto w-fit h-fit">
              <CyberpunkTechLines cssClasses="m-auto h-[80vh] w-[80vw]" />
            </div>
            <div className="flex flex-row p-0 justify-center text-center">
              <SocialLink
                img={<FaGithub className="size-10" />}
                link={props.github}
              />
              <SocialLink
                img={<FaLinkedin className="size-10" />}
                link={props.linkedin}
              />
              <SocialLink
                img={<FaSquareUpwork className="size-10" />}
                link={props.upwork}
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
}
