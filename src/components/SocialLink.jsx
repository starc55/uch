function SocialLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/62 transition hover:border-accent/30 hover:bg-accent/10 hover:text-white visited:text-white/62"
    >
      {label}
    </a>
  );
}

export default SocialLink;
