import "./CyberpunkBtn.css";

export default function CyberpunkBtn({ text, cssClasses }) {
  let cssClassesBtn = "btn" + " " + cssClasses;
  return (
    <button className={cssClassesBtn}>
      <span className="btn__content tomorrow-regular">{text}</span>
    </button>
  );
}
