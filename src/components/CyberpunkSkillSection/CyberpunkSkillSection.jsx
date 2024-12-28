import CyberpunkSkillTile from "../CyberpunkSkillTile/CyberpunkSkillTile";

export default function CyberpunkSkillSection({ sectionTitle, skillsArr }) {
  return (
    <div className="w-full h-fit p-5 grid grid-rows-1 gap-2 mb-[3em]">
      <h2 className="cyberpunk-skill-title text-3xl tomorrow-regular text-white mb-[1em]">
        {sectionTitle}
      </h2>
      <div className="flex flex-row justify-start flex-wrap gap-x-4 gap-y-2">
        {skillsArr[0].map((name) => (
          <CyberpunkSkillTile skillName={name} />
        ))}
      </div>
    </div>
  );
}
