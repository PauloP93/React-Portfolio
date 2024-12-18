import "./CyberpunkServiceTile.css";

export default function CyberpunkServiceTile({ serviceKey, ServiceTitle }) {
  return (
    <div key={serviceKey} className="cyberpunk-service-tile tomorrow-regular h-full">
      <span>{ServiceTitle}</span>
    </div>
  );
}
