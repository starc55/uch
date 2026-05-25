function SocialLink({ href, label, link, name, compact = false }) {
  const target = href ?? link;
  const text = label ?? name;

  return (
    <a
      href={target}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-full border border-white/10 text-white/62 transition hover:border-accent/30 hover:bg-accent/10 hover:text-white visited:text-white/62 ${
        compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
      }`}
    >
      {text}
    </a>
  );
}

export default SocialLink;
