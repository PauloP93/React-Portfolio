import "./CyberpunkBtn.css";
import { useNavigate } from "react-router-dom";

export default function CyberpunkBtn({ text, cssClasses, navigateLink = "" }) {
  const navigate = useNavigate();

  function HandleNavigate() {
    if (navigateLink !== "") {
      navigate(navigateLink);
    }
  }

  let cssClassesBtn = "btn" + " " + cssClasses;
  return (
    <button className={cssClassesBtn} onClick={HandleNavigate}>
      <span className="btn__content tomorrow-regular">{text}</span>
    </button>
  );
}
