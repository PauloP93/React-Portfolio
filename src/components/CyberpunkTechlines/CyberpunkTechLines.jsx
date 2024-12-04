import "./CyberpunkTechLines.css";

export default function CyberpunkTechLines({ cssClasses = "" }) {
  let cssClassesTechLines = "tech-lines" + " " + cssClasses;
  return <img src="./tech_lines.png" className={cssClassesTechLines} />;
}
