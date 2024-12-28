import SocialLink from ".//SocialLink.jsx";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Carrousel from "./Carrousel.jsx";
import './LandingPage.css';

export default function LandingPage({ name, description, carrouselImgs }) {

  return (
    <div className="flex justify-center items-center w-fit h-screen">

      {/* //Introduction  */}
      <div className="flex-1 items-center landing-page-flex">
        <h1 className="text-[3.5em] font-bold text-white">{name},</h1>
        <p className="text-center text-[1.2em] text-slate-500">{description}</p>
        <div className="flex flex-row p-1 items-center justify-center">
          <SocialLink
            img={<FaGithub className="size-10" />}
            link="https://github.com/PauloPimenta"
          />
          <SocialLink
            img={<FaLinkedin className="size-10" />}
            link="https://www.linkedin.com/in/paulo-pimenta/"
          />
        </div>
      </div>
      {/* //Carrousel */}
      <div className="flex-1 items-center landing-page-flex">
        <Carrousel images={carrouselImgs} />
      </div>
    </div>
  );
}
