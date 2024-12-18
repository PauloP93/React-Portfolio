import "./CyberpunkSkillTile.css";

export default function CyberpunkSkillTile({ skillKey, SkillTitle }) {
  return (
    <div
      key={skillKey}
      className="cyberpunk-skill-tile tomorrow-regular"
    >
      <span>{SkillTitle}</span>
    </div>
  );
}
