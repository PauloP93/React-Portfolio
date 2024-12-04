import "./SocialLink.css";

export default function SocialLink({ img, link }) {
  return (
    <a
      href={link}
      className="p-1 social-link hover:rounded-sm w-fit"
      target="_blank"
      rel="noreferrer"
    >
      {img}
    </a>
  );
}
