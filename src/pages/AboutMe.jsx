import CyberpunkH1 from "../components/CyberpunkTitle/CyberpunkH1";
import AboutMeJPG from "../../public/assets/aboutme.jpg";
import { useMediaQuery } from "react-responsive";
import CyberpunkBtn from "../components/CyberpunkButton/CyberpunkBtn";

export default function AboutPage() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1026px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <>
      <div className="flex flex-row w-fit h-fit mb-8">
        <CyberpunkH1
          text="About Me"
          cssClasses="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-7"
        />
      </div>

      {isDesktop && (
        <div className="grid grid-cols-2">
          <div className="block">
            <CyberpunkH1
              text="Curious about the mind behind the code?"
              cssClasses="text-3xl mb-2"
            />
            <p className="text-justify tomorrow-regular text-lg mt-[1.5em]">
              I am a passionate and versatile software developer with a strong
              background in creating innovative solutions across diverse
              industries. With a degree in Computer Science and several years of
              experience, I specialize in developing robust and scalable
              applications, system integrations, and process automations. My
              expertise spans a variety of technologies, including .NET,
              Salesforce, and modern web frameworks.
            </p>
            <p className="text-justify tomorrow-regular text-lg mt-[2em]">
              Over the course of my career, I have contributed to numerous
              impactful projects, from designing seamless system integrations to
              creating custom workflows and applications tailored to client
              needs. My professional journey has also involved leading technical
              solutions, enhancing team workflows, and implementing DevOps
              practices to ensure efficient and high-quality software delivery.
            </p>
            <p className="text-justify tomorrow-regular text-lg mt-[2em]">
              When I'm not coding or exploring new tech, I enjoy solving complex
              problems, improving workflows, and finding innovative ways to make
              technology work better for people. Feel free to connect with me to
              discuss opportunities, projects, or ideas!
            </p>
          </div>
          <div className="items-center justify-center flex">
            <img
              className="mx-auto shadow-[1em_1em_10px_#f00]"
              src={AboutMeJPG}
              alt="about_me"
            />
          </div>
        </div>
      )}

      {isTabletOrMobile && (
        <div className="flex flex-col">
          <div className="items-center justify-center flex mb-7">
            <img
              className="mx-auto shadow-[1em_1em_10px_#f00]"
              src={AboutMeJPG}
              alt="about_me"
            />
          </div>
          <div className="block">
            <CyberpunkH1
              text="Curious about the mind behind the code?"
              cssClasses="text-3xl mb-2"
            />
            <p className="text-justify tomorrow-regular hyphens-auto text-lg mt-[1.5em]">
              I am a passionate and versatile software developer with a strong
              background in creating innovative solutions across diverse
              industries. With a degree in Computer Science and several years of
              experience, I specialize in developing robust and scalable
              applications, system integrations, and process automations. My
              expertise spans a variety of technologies, including .NET,
              Salesforce, and modern web frameworks.
            </p>
            <p className="text-justify tomorrow-regular hyphens-auto text-lg mt-[2em]">
              Over the course of my career, I have contributed to numerous
              impactful projects, from designing seamless system integrations to
              creating custom workflows and applications tailored to client
              needs. My professional journey has also involved leading technical
              solutions, enhancing team workflows, and implementing DevOps
              practices to ensure efficient and high-quality software delivery.
            </p>
            <p className="text-justify tomorrow-regular hyphens-auto text-lg mt-[2em]">
              Feel free to connect with me to discuss opportunities, projects,
              or ideas!
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-row items-center justify-center">
        <CyberpunkBtn
          text="Contact me"
          cssClasses={"mt-3 relative m-auto"}
          navigateLink="/contacts"
        />
      </div>
    </>
  );
}
