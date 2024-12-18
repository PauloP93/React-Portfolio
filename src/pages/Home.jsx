import CyberpunkTechLines from "../components/CyberpunkTechlines/CyberpunkTechLines";
import CyberpunkH1 from "../components/CyberpunkTitle/CyberpunkH1";
import SocialLink from "../components/Links/SocialLink.jsx";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
export default function HomePage({ homeDescription }) {
  return (
    <section className="pr-5 flex flex-row">
      <div className="w-1/2">
        <CyberpunkH1 text="Paulo Pimenta" cssClasses="text-8xl mb-7" />
        <p className="text-[1.2em] text-white tomorrow-regular mb-3">
          {homeDescription}
        </p>
        <div className="flex flex-row p-0">
          <SocialLink
            img={<FaGithub className="size-10" />}
            link="https://github.com/PauloPimenta"
          />
          <SocialLink
            img={<FaLinkedin className="size-10" />}
            link="https://www.linkedin.com/in/paulo-pimenta/"
          />
          <SocialLink
            img={<FaSquareUpwork className="size-10" />}
            link="https://www.upwork.com/freelancers/~019157edb8e9d95d73?mp_source=share"
          />
        </div>
      </div>
      <div className="w-1/2">
        <CyberpunkTechLines />
      </div>
    </section>
  );
}
