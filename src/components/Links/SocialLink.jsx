export default function SocialLink({ img, link }) {
  return (
    <a
      href={link}
      className="text-white p-1 hover:bg-slate-300/30 hover:rounded-sm w-fit"
      target="_blank"
      rel="noreferrer"
    >
      {img}
    </a>
  );
}
