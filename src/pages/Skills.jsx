import CyberpunkH1 from "../components/CyberpunkTitle/CyberpunkH1";
import CyberpunkSkillTile from "../components/CyberpunkSkillTile/CyberpunkSkillTile";
export default function SkillsPage() {
  return (
    <>
      <section className="flex flex-row w-fit h-fit mb-8">
        <CyberpunkH1 text="Skills" cssClasses="text-6xl mb-7" />
      </section>
      <section className="flex flex-col w-full h-fit p-4 mt-[10em]">
        <CyberpunkSkillTile skillKey="1" SkillTitle="HTML" />
      </section>
    </>
  );
}
