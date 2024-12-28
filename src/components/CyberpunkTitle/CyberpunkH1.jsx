import "./CyberpunkH1.css";

export default function CyberpunkH1({ text, cssClasses = "" }) {
  let cssClassesH1 = "cyberpunk-title" + " " + cssClasses;
  return <h1 className={cssClassesH1}>{text}</h1>;
}
