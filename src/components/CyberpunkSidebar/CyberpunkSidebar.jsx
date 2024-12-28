import "./CyberpunkSidebar.css";

export default function CyberpunkSidebar(props) {
  return (
    <div className="w-64 h-74 fixed top-0 right-0 cyberpunk-sidebar">
      {props.children}
    </div>
  );
}
