import "./CyberpunkSkillTile.css";

export default function CyberpunkSkillTile({ skillName }) {
  return (
    <>
      <div className="cyberpunk-skill-tile text-wrap tomorrow-regular text-center align-middle">
        <span className="text-center">{skillName}</span>
      </div>
    </>
  );
}
