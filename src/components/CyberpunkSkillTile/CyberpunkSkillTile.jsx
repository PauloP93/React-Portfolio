import "./CyberpunkSkillTile.css";

export default function CyberpunkSkillTile({ skillName }) {
  return (
    <>
      <div className="cyberpunk-skill-tile text-wrap tomorrow-regular h-16">
        <span className="">{skillName}</span>
      </div>
    </>
  );
}
