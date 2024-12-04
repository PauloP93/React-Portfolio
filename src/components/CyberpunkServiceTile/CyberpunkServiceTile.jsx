import "./CyberpunkServiceTile.css";

export default function CyberpunkServiceTile({ serviceKey, ServiceTitle }) {
  console.log("The current service from tile", ServiceTitle);
  return (
    <div key={serviceKey} className="cyberpunk-service-tile tomorrow-regular">
      <span>{ServiceTitle}</span>
    </div>
  );
}
