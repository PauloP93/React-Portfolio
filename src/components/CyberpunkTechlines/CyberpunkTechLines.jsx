import "./CyberpunkTechLines.css";
import techlines from "/tech_lines.png";

export default function CyberpunkTechLines({ cssClasses = "" }) {
  let cssClassesTechLines = "tech-lines" + " " + cssClasses;
  return <img src={techlines} className={cssClassesTechLines} />;
}
