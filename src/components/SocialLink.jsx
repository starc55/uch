function SocialLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/58 transition hover:border-accent/30 hover:bg-accent/10 hover:text-white"
    >
      {label}
    </a>
  );
}

export default SocialLink;
