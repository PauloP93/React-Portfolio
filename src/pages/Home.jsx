import SocialLink from "../components/Links/SocialLink";
import Carrousel from "../components/Links/Carrousel";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function HomePage({
  homeDescription,
  github,
  linkedin,
  carrouselImgs,
  myImg
}) {
  return (
    <div className="p-6 text-center">
      <section className="p-2 text-center">
        <h1 className="text-4xl font-bold">
          Hi! I'm Paulo Pimenta and this is my portfolio
        </h1>
        <span className="mt-12 size-8 text-2xl">{homeDescription}</span>
        <img
          className="rounded-full w-52 h-52 mt-12 m-auto"
          src={myImg}
          alt=""
        />
        {/* Add img of me here */}
      </section>
      <section className="p-2 mt-10 text-center items-center justify-center">
        <h1 className="italic text-5xl text-center mb-7">
          Building Scalable Solutions for a Digital Future
        </h1>
        <Carrousel images={carrouselImgs} />

        <div className="flex flex-row justify-center">
          <SocialLink img={<FaGithub className="size-10" />} link={github} />
          <SocialLink
            img={<FaLinkedin className="size-10" />}
            link={linkedin}
          />
        </div>
      </section>
    </div>
  );
}
